//Jerry Sutton
//Sep 18, 2014
//Conditions Industry


var companyName = prompt("Please enter company name.", "");
var willOrderPackage = prompt("Would you like to order a Web Design package today?","");

if (willOrderPackage === "yes") {
    console.log("Thank you for your order.");

}else if(willOrderPackage = "no") {
    console.log("Come back when you are ready.");
}else{
    console.log("You did not confirm yes or no!");
}

