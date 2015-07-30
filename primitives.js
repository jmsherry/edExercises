//The word 'var' is a 'reserved word' or 'keyword' in javascript. It tells the system to reseve some memory to hold a value which may vary.
//In other languages you can set constants like: CONST PI = 3.14 (constants are often denoted by capitals). Javascript has no constants - all values are mutable

var string = '1'; //A string of characters to be outputted in some way
console.log('string: ', string);

var number = 2; //<-- this is an integer
var secondNumber = 2.14; //<-- this is a float (short for 'floating point number');
console.log('integer: ', number);
console.log('float: ', secondNumber);

var boolean = true;
var boolean2 = false;
console.log('Booleans: ', boolean, boolean2);

var sym1 = Symbol(); //<-- FUCKING IGNORE!!!!! Symbol wank!!
console.log(sym1);

//Special primitives
var x = null; //you put this in place of an object you know is going to be supplied later. You CAN test against it, but don't!
var z = undefined; //use this to nuke something out of existance. You can test against this, but again it's best not to.
// both of these are actual objects themselves
console.log('null: ');
console.dir(x);
console.log('undefined: ');
console.dir(z);

//Variables can be changed, CONSTANTS can't. CONSTANTS are usually denoted by CAPITALS...
const MYNAME = "James";
console.log(MYNAME);
MYNAME = "Timothy";
console.log(MYNAME);



// Shortform declarations
/**
* OBJECTS
**/
var obj = {};   //var obj = Object.create() or var obj = new Object();

//objects have properties and you can add them using either 'dot notation' ore 'square brackets'
obj.firstName = string;
obj.surname = 'Garay';
obj['age'] = 35;

console.log('obj', obj);

//objects map to a hash table in the C++ layer below. EVERYTHING in javascript, except the primattives above the object section, are objects or
// 'wrappers' on objects - that means that they're an object which has had funcitonality glued on to it (like arrays get inbuilt itteration, functions can execute, etc)

/**
* ARRAYS
**/
var array = []; // an array
var array2 = ['apple', 2, false, {name: 'Ed'}, ['pilot'], function(){return 'hello world'}]; //you can put anything straight into an array
console.log(array);
console.log(array2);

//Arrays are 'zero based', so the first item in an array is at index '0'. To get apple, therefore, we do:
console.log(array2[0]);

//let's use that function at the end of the array
console.log(array2[5]);

//hmmm.. that logged the function, but didn't execute it?? That's because functions are 'first class citizens' in javascript and can
// be passed around until needed. When you want to call a function you have to 'invoke it' with ();

console.log(array2[5]());

/**
* FUNCTIONS
**/

//functions get auto stored, so you can tie them to a variable, or you can just release them wild into the environment that you're in

var myFunc = function(){
  return 'hello world';
};

// or

function myFunc2(){
  return 'hello world';
}

// can be executed as

myFunc();

myFunc2();

// but in general functions need a name as they will be passed around and executed using it.

// a function without a name is called an anonymous function


// an example of that is an IIFE (immediately invoked function expression)

(function(mathObj){
  console.log(mathObj.E);
}(Math));

//you may also see anonymous functions passed into things as arguments

function myFunc3(func){
  func.call();
}

myFunc3(function(){
  //yes, we just passed this function into a function as an argument
  console.log('I was passed as an argument!');
  return true;
});

//Function arguments van be variables or other functions needed to comlete the task. They can be executed separately
//at any time using the 'call' method [and params are in as a comma-separated-list' or the 'apply' method, where an array
// of arguments is passed in.

//You can always see the arguments passed into a function by logging out the value of 'arguments, like so:

function argLog(){
  console.log(arguments);
}

argLog(1, "test");

/**
* Globals
*
* In the browser the 'window' object is your world. It's all the script knows about. It is known as the 'Global Namespace'.
* All throughout the functions section we've just declared functions and they've gone into that Namespace - which is bad!
*
*/

console.log(window.myFunc3); //<--bad!! NB. you don't have to type window. for Globals; it's presumed.

//If your carousel program has a 'next' function; and some 3rd party's mp3 player also has a 'next' function, then whoever's was written in
//last will go missing:

function edSpecial(){
  //yes, we just passed a function into a function as an arguments
  console.log('I\'m Ed\'s amazeballs function!!');
  return Math.PI;
};

console.log('You, trying to get PI: ', edSpecial());
console.log('#win');
console.log('then some 3rd party wanker adds their stuff');
edSpecial = function(){return 'NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN!!!'};

//You try to get PI
console.log('You, trying to get PI again: ', edSpecial());

//to avoid this you 'namespace' your code:

window.Ed = function(){};
// or more practically if you're loading lots of modules
window.Ed = window.Ed || function(){}; //<-- || means or; so Window.Ed is either window.Ed (ie. already loaded) or it's a function [which you then define]

//There are, however, globals provided for you, such as:

console.log('The math object', window.Math);
console.log('The location object', window.location);

//etc., etc.


//FUNCTION INHERITANCE AND PROTOTYPING
// https://github.com/jmsherry/inheritanceExamples
