//Jerry Sutton
//Sep 18, 2014
//Conditions Wacky

var grade = prompt("What is your grade?");
var minGrade = 70;
var lowGrade = 69;

    console.log("Your grade is: " + (grade >= 90 ? "Excellent!": (grade > 70? "Average" : "Needs to be improved")) );

if(minGrade <= 70){
    console.log("You have until June to get it up");
}else if(lowGrade >= 69){
    console.log("Keep up the great work!");
}else{
    console.log("You need to input a grade");
}


