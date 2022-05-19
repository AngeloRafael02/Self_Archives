const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send('GET route from ModuleTest.js');
});

router.post('/', function(req,res){
    res.send('POST route from ModuleTest.js')
});

//make router export to to imported to man ExpressJSNotes.JS
module.exports = router;