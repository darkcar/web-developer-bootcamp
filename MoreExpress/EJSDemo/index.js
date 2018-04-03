var express = require("express");
var app = express();

/* set the static path*/
app.use(express.static("public"));

/* set view engine */
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
	// res.send("Welcome to the homepage!");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{"title" : "This is my page", "author" : "Frank"},
		{"title" : "This is my page", "author" : "Frank"},
		{"title" : "This is my page", "author" : "Frank"},
		{"title" : "This is my page", "author" : "Frank Wang"}
	];
	res.render("post", {postsVar : posts});
});


app.listen(8009, function(){
	console.log("Server is listening!!!");
});
