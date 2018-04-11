var express = require('express');
var app = express();
const dotenv = require('dotenv').config();
var bodyParser = require('body-parser');

// set body parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// set view engine
app.set("view engine", "ejs");

// set static
app.use(express.static('public'));

// global variables
var campgrounds = [
    {name:"Abernethy & District Campground RV Park", imageUrl:"/images/camp1.jpg"},
    {name:"Angler's Trail Resort", imageUrl:"/images/camp2.jpg"},
    {name:"Antelope Lake Regional Park", imageUrl:"/images/camp3.jpg"}
];

// routes starts
app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    
    res.render('campgrounds', {campgroundsVal:campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render('new');
});

// create new campground
app.post('/campgrounds', urlencodedParser, function(req, res){
    // get data from from and add to array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, imageUrl:image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});