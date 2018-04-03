var express =require("express");
var app = express();

// Why do we use bodyParser? 
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("home");
});

// global friends list
var friendsList = [
    "tony", "miranada", "justin"
];
// friends
app.get("/friends", function(req, res){
    
    res.render("friends", {friendsListVar:friendsList});
});

// post frined
app.post("/addfriend", function(req, res){
    // get the friends' name
    var username = req.body.username;
    friendsList.push(username);
    res.redirect("/friends");
});

app.listen("3000", function(){
    console.log("Running");
});