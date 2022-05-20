    //three formats in exporting code blocks:

module.exports.counter  = function(arr){
    return 'There are ' + arr.length + ' elements in the array';
};

const adder = function(a,b){
    return a + b
};
module.exports.adder = adder;

var pi = 3.142;
var niceNumber = 69;
var blazeIt = 420;
module.exports = {
    pi: pi,
    niceNumber: niceNumber,
    blazeIt:blazeIt
};