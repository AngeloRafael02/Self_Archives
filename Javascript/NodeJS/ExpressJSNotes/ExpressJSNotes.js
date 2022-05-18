    //ExpressJS Notes
    //Made By: Angelo Rafael Recio

    //ExpressJS: NodeJS Framework used to make server-side applications and APIs
    //Uses nodemon as well to test server, so install that too 

        //First we have to set up the development
const express = require('express') //imports express from node_modules
var app = express() //declare express module as a variable

app.get('/', function(req,res){ //get('root', callback()) | root wil be the very base URL of the page
    res.send("Test Server");
});

app.post('/',function(req,res){ //a POST request will send the following:
    res.send("You just called a POST method at the root name '/' !");
})
    //There are also other HTTP request to do in ExpressJS. Refer to HTTP_Notes.txt (Self_Archives\HTTP_Notes.txt)

    //DEFINING ROUTES
    //There are cases where Static routes are viable such as the root URL of pages. However, using dynamic routes allows us to pass parameters and process base on them 
app.get('/id/:id',function(req,res){
    res.send("current id according to route: " + req.params.id);
})
    //type any string on the URL address and it will be passed as a string for the page 

app.listen(3000);