//METHOD
function EdMultiply(str, a, b){
  function add(){}

  function multiply(){ //function
    return a * b;
  }

  return str + multiply(a,b)
}


$('body').html('').append('<button>CLick me</button><div id="test"></div>').children().click(function(e){
  console.log('click');
var $this = $(this), $div = $('#test'), txt = $div.text();

console.log($this, txt);

  switch(txt){
   case '':
   $div.text(names[0]);
   break;
   case names[0]:
   $this.text(names[1]);
   break;
   case names[1]:
   $this.text(names[0]);
   break;
  }

});
