/*function multiply(a,b){
    return a * b;
}*/
/*
const multiply = (...args) => {
    return args.reduce((accum, val) => accum * val, 1);};*/

    var multiply = function () { 
        return Array.prototype.reduce.call(arguments, function(a, b) { 
          return a * b;
        });
      };

    module.exports = multiply;
