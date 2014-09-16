//Jerry Sutton
//Sep 18, 2014
//Conditions Industry

var time = Number(prompt("What time is it?")); //principal amount of loan or savings
var interest = Number(prompt("Enter your Interest rate")); //rate at which you will earn interest on your principal
var rate = Number(prompt("Enter your rate(time)"));

if (time < 12) {
    console.log("Good Morning");
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
