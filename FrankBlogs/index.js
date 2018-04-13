/**
 * Step 1. npm init
 * Step 2. install below packages
 * Package needed to init:
 *- body-parser
 *- express
 *- dotenv
 *- mongoose
 *- ejs
 * Step 3. create .env file 
 *- IP=127.0.0.1
 *- PORT=3000
 */
/*local variable */
var bodyParser = require('body-parser'),
express        = require('express'),
app            = express();

/*const variable */
const dotenv   = require('dotenv').config();
const mongoose = require('mongoose'),
methodOverride = require('method-override');

mongoose.connect("mongodb://localhost/frank_blogs_app");

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

/**Mongoose Model config */
var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date,default:Date.now}
});
// create a signle blog
var Blog = mongoose.model('Blog', blogSchema);

/**Routes confg */
app.get('/', function(req, res){
    res.redirect('/blogs');
});

app.get('/blogs', function(req, res){
    Blog.find({}, function(err, blogs){
        if(err) {
            console.log(err);
        } else{
            res.render('index', {blogs:blogs});
        }
    });
});

// New route
app.get('/blogs/new', function(req, res){
    res.render('new');
});

// Create blog
app.post('/blogs', function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            console.log(err);
        } else{
            res.redirect('/blogs');
        }
    });
});

// Show Route
app.get('/blogs/:id', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log(err);
            res.redirect('/blogs');
        } else{
            res.render('show', {blog:foundBlog});     
        }
    });
});

// edit route
app.get('/blogs/:id/edit', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            console.log(err);
            res.redirect('/blogs');
        } else{
            res.render('edit', {blog: foundBlog});
        }
    });
});

app.put('/blogs/:id', function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/'+req.params.id);
        }
    });
});


// delete route
app.delete('/blogs/:id', function(req, res){
    // Blog.findByIdAndRemove(req.params.id, function(err){
    //     if(err) {
    //         res.redirect('/blogs');
    //     } else {
    //         res.redirect('/blogs');
    //     }
    // });
    res.redirect('/blogs');

});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});