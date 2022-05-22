    //ExpressJS Notes
    //Made By: Angelo Rafael Recio

    //ExpressJS: NodeJS Framework used to make server-side applications and APIs
    //Uses nodemon as well to test server, so install that too 

        //First we have to set up the development
const express = require('express') //imports express from node_modules
var app = express() //declare express module as a variable

    //app.method(path,handler)
    //handler is a callback function that is executed when a matching request type is found on the relevant route
app.get('/', function(req,res){ //get('root', callback()) | root wil be the very base URL of the page
    res.send("Test Server");
});

app.post('/',function(req,res){ //a POST request will send the following:
    res.send("You just called a POST method at the root name '/' !");
});
    //There are also other HTTP request to do in ExpressJS. Refer to HTTP_Notes.txt (Self_Archives\HTTP_Notes.txt)


    //DEFINING ROUTES
    //There are cases where Static routes are viable such as the root URL of pages. However, using dynamic routes allows us to pass parameters and process base on them 
app.get('/id/:id',function(req,res){
    res.send("current id according to route: " + req.params.id);
}); //type any string on the URL address and it will be passed as a string for the page 


    //PATTERN MATCHED ROUTES
    //you can use regex to limit the URL Parameter matching
app.get('/id/regex/:id([0-9]{5})', function(req,res){
    res.send('id:' + req.params.id);
}); //current regex only lets 5 numbers as route, goes 404 otherwise


    //ROUTERS: to separate routes from the main JS file we can use Express.Router() (seen on the ModuleTest.j)
const test = require('./ModuleTest.js')
app.use('/module',test);
    //now you can make separate routes be grouped into separate files. 
    //you can now access routes from other files 
    
    //MIDDLEWARE: functions that have access to the request object (req), the Object response (res), and the next middleware function in the applications request/response cycle
    //Go to MiddlewareDemo.js

app.listen(3000);