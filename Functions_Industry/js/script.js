//Jerry Sutton
//Sep 25, 2014
//Functions Industry


function myFunc(theObject) {
    theObject.brand = "Toyota";
}

//defining
var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
};

//Logs Honda
console.log(mycar.brand);

//Logs Toyota
myFunc(mycar);
console.log(mycar.brand);