//Jerry Sutton
//Sep 09, 2014
//Expression Wacky

//The Pythagorean Theorem - the square of the hypotenuse is equal to the sum of the squares of the other two sides.

var asquared = Number(prompt("Enter the length of leg A")); //small side of triangle A
var bsquared = Number(prompt("Enter the length of leg B")); //second side of triangle
var a = Math.pow(asquared, 2); //side a squared
var b = Math.pow(bsquared, 2); //side b squared

//adding side and A and B to find what the square of the hypotenuse
var pyt = (+a + b);

//prints to console
//console.log(cogs);

// result of above calculations
var result = "The Pythagorean Theorem answer of A squared + B squared is \ " + pyt +" \ squared";
alert(result); //pop up displaying result
