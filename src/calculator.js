/*Addition function */

var add = function () { 
    return Array.prototype.reduce.call(arguments, function(a,b) { 
      return a + b;
    });
};

/*Multiplication fuction */
var multiply = function () { 
    return Array.prototype.reduce.call(arguments, function(x,y) { 
      return x * y;
    });
};

module.exports = {add, multiply};



