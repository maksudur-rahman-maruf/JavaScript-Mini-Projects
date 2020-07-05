
let add = function(a,b) {
    return a + b;
};

let multiply = function(a,b) {
    return a * b;
}


// let calc = function(num1, num2, callback) {
//      return callback(num1, num2);
// }

function calc(num1, num2, callback) {
     return callback(num1, num2);
}

console.log(calc(6,3, add));