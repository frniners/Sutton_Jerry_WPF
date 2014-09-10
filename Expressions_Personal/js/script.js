//Jerry Sutton
//Sep 09, 2014
//Expression Personal

//Simple Interest = Interest earned from principal
//Simple Interest = P*r*t / Principal, interest & rate

var prin = Number(prompt("Enter your Principal amount")); //principal amount of loan or savings
var interest = Number(prompt("Enter your Interest rate")); //rate at which you will earn interest on your principal
var rate = Number(prompt("Enter your rate(time)")); //time of loan

var simint = (+prin * (.10 * interest) * rate); //calculates the above info - Simple Interest = Interest earned from principal
//console.log(cogs); //prints to console
var result = "The dollar amount on what Simple Interest you'll earn or pay is roughly" + simint + "";
alert(result);