    //NodeJS Notes
    //By: Angelo Rafael Recio

    //declare a variable to be called for when we use http module
var http = require('http'); //the require() function is used to include a module wit the name of the module. http is built-in

http.createServer(function(req,results){
    results.writeHead(200, { 'Content-Type' : 'text/html' });
    results.end("Hello World!");
}).listen(8080);
