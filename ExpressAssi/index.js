var express = require("express");
var app = express();

// Homepage
app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

// Speack pack
app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  var sound = "";
  switch (animal) {
    case "pig":
      sound = "'Oink'";
      break;
    case "cow":
      sound = "'Moo'";
      break;
    case "dog":
      sound = "'Woof Woof!'";
      break;
    default:
      sound = "Hi!!!";
  }
  res.send("The " + animal + " says " + sound);
});

// Repeat pack
app.get("/repeat/:word/:times", function(req, res){
  var times = req.params.times;
  var word = req.params.word;
  if (times > 0) {
    var tempStr = "";
    for(var i = 0; i < times; i ++) {
      tempStr += word + " ";
    }
    res.send(tempStr);
  } else {
    res.send("The number should be positive!");
  }
});

// Anything else goes to 404
app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?");
});

// listen to server
app.listen(8009, function(){
  console.log("Server running!!!");
});
