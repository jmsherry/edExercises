$(function(){ //This is the jQuert 'onDocumentReady' function, which means that all the HTML is in the DOM tree and ready to be acted upon. NB It may not be rendered yet...

  //First we're going to bind events normally:
  $('.triggerLink').on('click.jim', function(e){
    console.log(arguments);
    alert('BOOYAH!! (normal event)');
    return false; // See below
  });

  //Now we're going to bind a delegated event:
  $('body').on('click.jim', '#delegated .triggerLink', function(e){
    console.log(arguments);
    alert('BOOYAH (delegated event)!!');
    return false; // See below
  });

  //Now bring in content via ajax
  $.ajax({
    url: "ajaxContent.html",
    context: document.getElementById('undelegated') // See below
  }).done(function(response) {
    $(this).append(response);
    console.log('HTML imported for div#undelegated', response);
  });

  $.ajax({
    url: "ajaxContent.html",
    context: document.getElementById('delegated') // HERE HERE!! These lines set the context of 'this' in the success handler
}).done(function(response) {
    $(this).append(response); //'this' context set above...
    console.log('HTML imported for div#delegated', response);
  });

});

/*
* So just a quick thing. When you click a link it tries to navigate the browser to somewhere. This is a problem if your link has no target.
* ie. href="#" <-- that will tell the browser to jump to the first element on the page, so your viewport will leap upwards. #bad
*
* Trying to navigate somewhere is a link's 'DEFAULT ACTION'. You need to stop that happening. On the event object there's a method called
* 'preventDefault' that will do this.
*
* Also, when an event is triggered on an element it 'bubbles' up the DOM tree (like bubbles rising). That means that if there are events
* on nodes above which are listening for the same thing then they will be triggered to. You may wish to stop the bubbling, as it's risky.
* Again, on the event object, there's a method called 'stopPropagation'.
*
* So normally, without jQuery, you would write:

var el = document.getElementById('#myEl');
el.addEventListener('click', function(e){ // You can't namespace events here as you can in jQuery, so no 'click.ed' :(
  //Do something
  e.preventDefault();
  e.stopPropagation*()
});

* In jQuery you can do both of those things at once by putting 'return false;' at the end of your handler functions
* Also worth noting that in the pure javascript example above you get a basic evebt object supplied to you. In the
* jQuery ones you get an enhanced one with more jQyery goodies and measurements in it...
*
*
*/
