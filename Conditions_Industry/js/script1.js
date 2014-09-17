/**
 * Created by jerrysutton on 9/16/14.
 */


{
    var n = prompt("Enter a number", "5");
    var entered = "You entered a number between";

    if (n >= 1 && n < 10)
    {console.log(entered + " 0 and 10")}
    else if (n >= 10 && n < 20)
    {console.log(entered + " 9 and 20")}
    else if (n >= 20 && n < 30)
    {console.log(entered + " 19 and 30")}
    else if (n >= 30 && n < 40)
    {console.log(entered + " 29 and 40")}
    else if (n >= 40 && n <= 100)
    {console.log(entered + " 39 and 100")}
    else if (n < 1 || n > 100)
    {console.log("You entered a number less than 1 or greater than 100")}
    else
    {console.log("You did not enter a number!")}
}