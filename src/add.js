/*function add(a,b){
    return a + b;
}*/
/*
const add = (...nums) => {
    return nums.reduce((total, num) => total + num, 0);
};
*/

var add = function () { 
    return Array.prototype.reduce.call(arguments, function(a, b) { 
      return a + b;
    });
  };
module.exports = add;

