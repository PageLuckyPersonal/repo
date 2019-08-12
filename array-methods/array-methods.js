var kawaiiMakeup = ["eyeliner", "blush", "penguin", "pink freak dolphin"];
console.log(kawaiiMakeup);

var kawaiiSnacks = ["pocky", "mushrooms", "bears", "coffee"];
console.log(kawaiiSnacks);

//Array Method 1 - concat()

var newKawaiiList= kawaiiMakeup.concat(kawaiiSnacks);

console.log(newKawaiiList);



//Array Method 2 - copyWithin()    (target, start, end) (OR replace this first number, with this second number)
//two numbers
var expensiveThings = ["diamonds", "apartment", "cars", "boyfriend"];

var expensiveThingsList = expensiveThings.copyWithin(1,3);

console.log(expensiveThingsList);
//three numbers (start here, replace from this number to *before* this number)
var expensiveThings2 = ["saphire", "gold", "rubies", "champagne"];
var expensiveThingsList2 = expensiveThings2.copyWithin(0,1,3);

console.log(expensiveThingsList2);