//Jerry Sutton
//Sep 09, 2014
//Expression Industry

//Cost of goods sold

var cbeginv = Number(prompt("Enter your Cost of Beginning Inventory")); //cost of beginning inventory
var cops = Number(prompt("Enter your Cost of Purchases")); //cost of purchases
var cendinv = Number(prompt("Enter your Cost of Ending Inventory")); //cost of ending inventory

var cogs = (+cbeginv + cops - cendinv); //calculates the above info - Cost of beginning inventory + Cost of purchases – Cost of ending inventory = Costs of goods sold
//console.log(cogs); //prints to console
var result = "Your Cost of Goods Sold is " + cogs + "";
alert(result);

//Cost of goods sold

//var cbeginv = Number(prompt("Enter your Cost of Beginning Inventory","")) || 0; //cost of beginning inventory
//var cops = Number(prompt("Enter your Cost of Purchases","")) || 0; //cost of purchases
//var cendinv = Number(prompt("Enter your Cost of Ending Inventory","")) || 0; //cost of ending inventory

//var cogs = cbeginv + cops - cendinv; //calculates the above info: Cost of beginning inventory + Cost of purchases - Cost of ending inventory = Costs of goods sold
//var result = "Your Cost of Goods Sold is " + cogs + "";
alert(result);