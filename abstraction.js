/**
* Key to programming is the ability to pass around things which aren't yet absolute. If you think about program to greet someone
* this becomes clear.
*
* We can literally say: "Hello Ed!"
*/

function Secretary(){

}

Secretary.prototype.greet = function(){
  return "Hello Ed!"
};

var mandy = new Secretary();

console.log(mandy.greet());

// But what if we need to greet Egita?

Secretary.prototype.greetEgita = function(){
  return "Hello Egita"
};

console.log(mandy.greetEgita());

// BUT SERIOUSLY?!! This could go on and on... We can't write a new function for every possibility, so how about this:

Secretary.prototype.greetGuest = function(guestName){
  return "Hello " + guestName; //When you 'return' something in a function it's what the function spits out.
};

console.log(mandy.greetGuest('Julie'));
console.log(mandy.greetGuest('Ella'));

// We abstracted the problem
