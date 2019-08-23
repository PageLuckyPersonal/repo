/*  Array Method 1 - concat() */
//combines two different arrays together
var kawaiiMakeup = ["eyeliner", "blush", "penguin", "pink freak dolphin"];
console.log(kawaiiMakeup);
var kawaiiSnacks = ["pocky", "mushrooms", "bears", "coffee"];
console.log(kawaiiSnacks);
var newKawaiiList= kawaiiMakeup.concat(kawaiiSnacks);
console.log(newKawaiiList);


/*  Array Method 2 - copyWithin() (target, start, end) (OR replace this first number, with this second number)*/
//two numbers
var expensiveThings = ["diamonds", "apartment", "cars", "boyfriend"];
var expensiveThingsList = expensiveThings.copyWithin(1,3);
console.log(expensiveThingsList);
//three numbers (start here, replace from this number to this number)
var expensiveThings2 = ["saphire", "gold", "rubies", "champagne"];
var expensiveThingsList2 = expensiveThings2.copyWithin(1,0,3);
console.log(expensiveThingsList2);

/*  Array Method 3 - entries  */
//makes an array an object and then does a loop to create key/value pairings

var listOfFruits =["cherries","plums", "grapes", "navel oranges"];
//this creates the object, but you can't see the pairings
var numberedFruits = listOfFruits.entries();
console.log(numberedFruits);
//See? It's an object now
console.log(typeof numberedFruits);
//a for loop is need to print the pairings
// "let" and "of" are the important words
for (let whatever of numberedFruits) {
    console.log(whatever);
}


/*  Array Method 4 - every()  */
//checks to see if array items pass a test
//returns only a boolean value of true or false
//you have to use a function
//IMPORTANT - this only returns true or false if the "condition" meets every item
var theSleepers = [10, 10, 12, 11, 12];
function whenToSleep(allBedtimes){
    return allBedtimes < 11;
}
//what array are you running it on? Then add the method. Then what are you seeking to test?
console.log(theSleepers.every(whenToSleep));
//this returns false because SOME go to bed early but not all. ALL must pass for true


/*  Array Method 5 - fill()  */
// Pick where in an array you want to replace a value with another static value
// It's useful for creating default values
var allPeople = ["Japanese", "chinese", "Lebanese", "American"];
//now change them all to Japanese people
//what are you filling with? Where is the start and end?
var justJapanese = allPeople.fill("Japanese", 1, 4);
console.log(justJapanese);
//why go through 4? It only includes whats at 1 through the next number.
//I want the 3 position included - so I went through position 4


/* Array Method 6 - filter() */
//filter creates a new array with objects in the previous array that pass a test
//we need a function to run the test itself
var kidHeight = [5.2, 3.2, 4.8, 4.5, 5.1];
function testingHeight(tallHeights){
  return tallHeights >= 4;  
}
var whoCanRide = kidHeight.filter(testingHeight);
console.log(whoCanRide);
//four kids can ride, but one kid can't! Ohhh, sad
//you can also see that it is a new array


/* Array Method 7 - find() */
//look for the first value of a particular number in an array
//useful for big data
//we need a function for this
var mySales = [100, 2000, 3500, 945, 372, 849, 575, 4888, 2000, 4683];
function checkingSales(bigSale){
    return bigSale >= 3000;
}
var theBigSale = mySales.find(checkingSales);
console.log(theBigSale);
//notice that we asked for the first one to be 3000 or greater.
//there are more but find only finds the first to pass the test


/* Array Method 8 - findIndex() */
//like the previous you look for a value, but this returns its index instead
//you need a function
var mySales = [1100, 2000, 3500, 945, 372, 849, 575, 4888, 2000, 4683];
function checkingIndex(checkIt){
    return checkIt <= 1000;
}
var closeToAGrand = mySales.findIndex(checkingIndex);
console.log(closeToAGrand);
//this shows us the index 3 is the first to be under 1000


/* Array Method 9 - forEach() 
//runs a function for every element in the array
//add 5 to the temp because you had a sunburn and needed a jacket
var temperatures = [70, 75, 77, 85, 91, 67];
function newTemp(temperature){
    return temperature + 5;
}
//what was the real temperature for you each day?
var myTemperature = temperatures.forEach(newTemp);
console.log(myTemperature);*/

var temperatures = [70, 75, 77, 85, 91, 67];

temperatures.forEach(function tempFunction(higherTemp){
console.log(higherTemp + 5);
})

//Note this took a sec because you're using the array method and function all in one go

/* Array Method 10 - from() */
// Changes a string into an array
//if used as below the word Array is required
var newSillyArray = Array.from("sillyfisharesilly");
console.log(newSillyArray);

/* Array Method 11 - .includes() */
// True or false? Prove that the following array contains the word plushie

let adorbsStuff = ['Pikachu', 'seal squishy', 'shiba magnet', 'plushie', 'fat shiba plushie'];

var isItThere = adorbsStuff.includes('plushie');
console.log(isItThere);
// it returns true, there is an adorable plushie there! You're so lucky!

/* Array Method 12 - .indexOf() */
//What is we have a really big array with thousands of lines and we need to know what line one item is on?
//if it's not there, you'll see -1, this works on objects, but findIndex works on easier primitives
//only the first index of whatever you search is returned
//These customers entered in their favorite passtimes on a children's website, did fishing or watching YouTube make the cut?
let indexArray = ['soccer', "playing video games", 'not socializing','watching YouTube', 'throwing things','sleeping','fishing'];

var lookingAtPasstimes = indexArray.indexOf('watching YouTube');
console.log(lookingAtPasstimes);
//Yes, someone enjoys watching YouTube in spot 3

var areTheyFishing = indexArray.indexOf('fishing');
console.log(areTheyFishing);
// Yes at index 6 someone enjoys fishing


/* Array Method 13 - isArray() */
//type of will always call an array an object. If you really need to know if it's an array
//just use isArray() to find out
//is this an array?
let animeListings = ['clover','attack on titan','sakura','strawberry panic','host club'];
console.log(animeListings);
console.log(Array.isArray(animeListings));
// This returns true, it IS an array


/* Array Method 14 - .join() */
// this method will return an array as a string
// let's recycle the array above. How can we turn that array into a string?

var newAnimeListings = animeListings.join();
//check, is it a string?
console.log(typeof newAnimeListings);
//"string", yep it is a string

/* Array(Object) Method 15 - .keys() */
//Returns an array iterator object with the keys of an array
//Though listed as an array method it requires an object to work
let smallGirlProblems = {Annoyance1:'huge chairs', Annoyance2:'tall cabinets', Annoyance3:'strong boyfriend', Annoyance4:'big spoons',Annoyance5:'large meals'};
var theIterator = Object.keys(smallGirlProblems);
console.log(theIterator);

/* Array Method 16 - .length  */
//NOTE length does not require ()
// .length can be used to see how many things are in an array
// it's also used to run function or for loops through everything in an array
// It works on arrays, it does NOT work on objects, for objects use .keys()
console.log(animeListings.length);


/* Array Method 17 -   */