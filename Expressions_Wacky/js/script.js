//Jerry Sutton
//Sep 09, 2014
//Expression Wacky

//The Pythagorean Theorem

var asquared = Number(prompt("Enter the length of leg A"));
var bsquared = Number(prompt("Enter the length of leg B"));
var a = Math.pow(asquared, 2);
var b = Math.pow(bsquared, 1);

var pyt = (+a + b);
//console.log(cogs); //prints to console
var result = "The Pythagorean Theorem answer of A squared + B squared is \ " + pyt +" \ squared";
alert(result);

//var prin = Number(prompt("Enter your Principal amount")); //principal amount of loan or savings
//var interest = Number(prompt("Enter your Interest rate")); //rate at which you will earn interest on your principal
//var rate = Number(prompt("Enter your rate(time)")); //time of loan

//var simint = (+prin * (.10 * interest) * rate); //calculates the above info - Simple Interest = Interest earned from principal
//console.log(cogs); //prints to console
//var result = "The dollar amount on what Simple Interest you'll earn or pay is roughly" + simint + "";
//alert(result);