//Jerry Sutton
//Sep 25, 2014
//Functions Wacky

//one prompt for a score between 1-10
var x = prompt("What was your score? \nPlease enter 1-10");
var y = 6;

//if else statement before ternary
/*if (x > y) {
    result = "Great Job";
}
else {
    result = I would find another Hobby;
}*/

//Below is the above code written using the ternary operator
(result = x > y) ? console.log("Great Job") : console.log("I would find another Hobby");