//Jerry Sutton
//Sep 25, 2014
//Functions Industry

//Declares the function
function myFunc(theObject) {
    theObject.brand = "Toyota";
}

//defining
var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
};


console.log(mycar.brand);


myFunc(mycar);
console.log(mycar.brand);