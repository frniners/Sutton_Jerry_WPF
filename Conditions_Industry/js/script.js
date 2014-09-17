//Jerry Sutton
//Sep 18, 2014
//Conditions Personal


    var n = prompt("Enter a first number"); //Random number
    var n2 = prompt("Multiply another number"); //Random number added to first var of "n"
    var entered = "You entered a number between"; // generated range for number chosen

    if (n >= 1 && n < 10){
        //number between 1 and 9
        console.log(entered + "0 and 10");
    }
    else if (n >= 10 && n < 20){
        //number between 10 and 19
        console.log(entered + "9 and 20");
    }else if (n >= 20 && n < 30) {
        //number between 20 and 29
        console.log(entered + "19 and 30");
    }else if (n >= 30 && n < 40){
        //number between 30 and 39
        console.log(entered + "29 and 40");
    }else if (n >= 40 && n <= 100) {
        //number between 40 and 100
        console.log(entered + "39 and 100");
    }else if (n < 1 || n > 100) {
        //number less than 1 or greater than 100
        console.log("You entered a number less than 1 or greater than 100");
    }else
        console.log("You did not enter a number!");

    if (n2 > 0){
        //number greater than zero
        console.log(n * n2);
    }else if (n2 < 0) {
        //number less than 1 or 2nd number less than 1
        console.log("You entered a number less than 1");
    }else
        console.log("You did not enter a number!");
