var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

// Home page
app.get("/", function(req, res){
    res.render("home");
});

// query page
app.get("/query", function(req, res){
    var city = req.query.city;
    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\""+city+"\")&format=json&env=store://datatables.org/alltableswithkeys";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var results = JSON.parse(body).query.results.channel;
            res.render("result", {resultsVar:results});
        }
    });  
});

// create server
app.listen(3000, function(){
    console.log("Welcome to weather search app~");
    console.log("http://localhost:3000");
});