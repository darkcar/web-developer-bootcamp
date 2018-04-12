var express = require('express');
var app = express();
const dotenv = require('dotenv').config();
var bodyParser = require('body-parser');

// use mongoose 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp_camp');

// create schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// create obj
var Campground = mongoose.model("Campground", campgroundSchema);

// set body parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// set view engine
app.set("view engine", "ejs");

// set static
app.use(express.static('public'));

// routes starts
app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else{
            res.render('index', {campgroundsVal:campgrounds});
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render('new');
});

// get the campground detail
app.get('/campgrounds/:id', function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else{
            res.render('show', {foundCampgroundVal: foundCampground});
        }
    });
});

// create new campground
app.post('/campgrounds', urlencodedParser, function(req, res){
    // get data from from and add to array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name:name, image:image, description: description};
    Campground.create(newCampground, function(err, newCampground){
        if(err) {
            console.log(err);
        } else{
            console.log("You have added one new campground!");
            console.log(newCampground);
        }
    });
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});