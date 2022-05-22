    //MIDDLEWARE: functions that have access to the request, and response objects, as well as the next middleware functions
    //function that runs between request and response
const express = require('express');
const app = express();

app.use(logger) //to make a global middle ware (got to logger funciton for details)
    //calls logger funciton then procs next() funciton, 
    //NOTE: Order of middleware matters in writing. it will run depending on the order you define it
    //NOTE: use next() to functions not in last to tell that another middleware must be called, same reason why after logger(), another middle ware is called depending on the order
    // next() - goes to the next middleware, once next() its done, assuming it's one middleware, goes back to the previous middleware

    //Current Middleware orders base on routes (console.log will tell order when middleware occurs):
        // '/'       = (logger -> '/')
        // '/child1' = (logger -> auth -> /child1 )
        // 'child2'  = (logger -> ShowOrder -> /child2 -> ShowOrder)

app.get('/', function(req,res){ //<= function itself counts as a middleware because it runs between req and res
    console.log("main page");
    res.send("main page");
});

app.get('/child1', auth ,function(req,res){ //<= middleware can be added inside method function. be mindful of the order
    console.log('variable: req.admin = ' + req.admin); //
    console.log("child page");
    res.send("child Page");
});

app.get('/child2', ShowOrder,function (req,res,next) {
    console.log("Child2");
    res.send("child2 page");
})

//middlewares that can be called 
function logger(req,res,next) { //another example of middleware
    console.log(req.originalUrl)
    console.log("log");
    next();
}
function auth(req,res,next) { //another example of middleware
    if (req.query.admin === 'true'){ // localhost:3000/child1?admin=true to make it true
        req.admin = true    //you can declare variable on req or res because all middleware can use it
        next();
    } else {
        res.send('no Auth');
    }
    console.log("auth");
    next();
}
function ShowOrder(req,res,next){
    console.log("Before");
    next();
    console.log("After");
}

app.listen(3000); 