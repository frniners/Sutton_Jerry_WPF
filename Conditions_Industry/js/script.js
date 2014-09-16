//Jerry Sutton
//Sep 18, 2014
//Conditions Industry

var time = Number(prompt("What time is it?"));

if (time < 12) {
    console.log("Good morning");
} else if (time === 12) {
    console.log("Lunch Time");
} else {
    console.log("Good evening");
}