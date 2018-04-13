# The things I don't use much

## HTML

1. MDN as reference. https://developer.mozilla.org/en-US/

2. package.json

- It contains all the dependencies of this lib.

- Use the '--save' flag to install packages, the package will be added to the package.json file.

- Use 'npm init' to create a new package.json file.

## Rendering HTML and Templates

－ Use res.render() to render HTML (from an EJS file)

－ For loop for ejs template.

    － Use basic javascript or use forEach function.

    - XML and JSON format. -- jsonview chrome extension. (add to browser!)

## Send request through Nodejs code

- node request package. 

```javascript
// Let's see how to use it?
var request = require("request");
request("http://google.ca", function(error, response, body){
    if(error) {
        console.log(error);
    } else{
        if (response.statusCode == 200) {
            console.log(body);
        }
    }
});
```

## get request: req.query.name;

SQL(relational) vs. NoSQL(non-relational)

================================
A NON_RELATIONAL DATABASE:
================================
{
    name: "Ira",
    age: 24,
    city: Missoula,
    comments: [
        {text:"come visit Montana!"}
    ]
}

## MongoDB? - Mean (Mongo express angular node)

Non-relational database.

## Mongo Commands

- mongod: start mongo server.

- mongo: opens up mongo shell.

- help: show help commands.

- show dbs: 

- use

- insert

- find

- update 

- remove

- show collections

-db.campgournds.drop()


## RESTful routes

name        url             HTTP verb        desc
========================================
INDEX       /dogs           GET         Display a list of all dog
NEW         /dogs/new       GET         Display form to make a new dog
CREATE      /dogs           POST        Add new dog to DB
SHOW        /dogs/:id       GET         Shows info about one dog
Edit        /dogs/:id/edit  GET         Show edit form for one dog
Update      /dogs/:id       PUT         Update a particular dog, then redirect
Destroy     /dogs/:id       DELETE      Delete a particular dog, then redirect


REST - A mapping between HTTP routes and CRUD

BLOG

Create
Read
Update
Destroy

