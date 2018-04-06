var express = require("express");
var app = express();

// "/" => "hi, there!"
app.get("/", function(req, res){
  res.send("Hi, there!");
});
// "/bye" => "Good bye"
app.get("/bye", function(req, res){
  res.send("Goodbye!!!");
});

// routing page
app.get("/r/:subName", function(req, res){
  res.send("Welcome to the " + req.params.subName.toUpperCase() + " sbuReddit");
});

app.get("/r/:subName/comments/:id/:title", function(req, res){
  res.send("This is the commenting page, and the name is " + req.params.subName + ", and id is " + req.params.id + ", and title is " + req.params.title);
});

// "/dog" =>
app.get("*", function(req, res){
  res.send("You are a start!!!");
});
// Tell Express to listen for the request port
app.listen(8009, () => console.log('Example app listening on port 8009!'))
