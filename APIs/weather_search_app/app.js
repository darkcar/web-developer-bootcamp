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
    var city = eq.query.city;
    
    res.render("result");
});
// create server
app.listen(3000, function(){
    console.log("Welcome to weather search app~");
    console.log("http://localhost:3000");
});