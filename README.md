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

