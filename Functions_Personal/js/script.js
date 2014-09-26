//Jerry Sutton
//Sep 25, 2014
//Functions Personal

//prompt variables to determine amounts for calculation
var paycheck = prompt("How much was your paycheck this week? \nPlease enter the amount");
var carpymt = prompt ("How much is your car payment this month? \nPlease enter the amount");
var freemon = prompt ("Did you receive any extra income this week? \nPlease enter amount");

//if the paycheck & extra income is more than the car payment
if(carpymt < paycheck + freemon){
    console.log("You can make your Car Payment this week!!!");

}else{
    console.log("Save your money until next weeks Paycheck.");
}