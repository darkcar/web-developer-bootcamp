/**
 * Install express, 
 */

 var express = require("express");
 var app = express();
 var request = require("request");
 var YQL = require('yql');
 app.set("view engine", "ejs");



app.get("/results", function(req, res){
    var requestUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    request(requestUrl, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var results = JSON.parse(body);
            res.send(results);
        } else {
            res.send("Loading takes too much time!!! Try again later.");
        }
    });
});

app.get("/weather", function(req, res){
    var query = new YQL('select * from weather.forecast where (location = 94089)');
    query.exec(function(err, data) {
        console.log(data.query.results.channel.units);
        // var location = data.query.results.channel.location;
        // var condition = data.query.results.channel.item.condition;
        // console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' degrees.');
    });
});

 // Create server
 app.listen(3000, function(){
    console.log("http://localhost:3000");
	console.log("Server is listening!!!");
});
