    //NodeJS Notes
    //By: Angelo Rafael Recio

    //declare a variable to be called for when we use http module
var http = require('http'); //the require() function is used to include a module wit the name of the module. http is built-in to allow transfer data over http

http.createServer(function(req,res){ //.createServer() - method used to create an HTTP Server
    res.writeHead(200, { 'Content-Type' : 'text/html' }); //If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
    res.write('Hello NodeJS'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //server object listens to port 8080
