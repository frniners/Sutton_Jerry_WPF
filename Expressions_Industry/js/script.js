//Jerry Sutton
//Sep 09, 2014
//Expression Industry

//Cost of goods sold

var cbeginv = prompt("Enter your Cost of Beginning Inventory"); //cost of beginning inventory
var cops = prompt("Enter your Cost of Purchases"); //cost of purchases
var cendinv = prompt("Enter your Cost of Ending Inventory"); //cost of ending inventory

var cogs = (cbeginv + cops - cendinv); //calculates the above info - Cost of beginning inventory + Cost of purchases – Cost of ending inventory = Costs of goods sold
//console.log(cogs); //prints to console
var result = "Your Cost of Goods Sold is " + cogs + "";
alert(result);
