$(document).ready(function(){
  window.dancers = [];
  window.cage = null;

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    // hide the window once a cage is created
    if (dancerMakerFunctionName === 'CageDancer') {
      $(this).hide();
    }
    // if a cage is already created, just return.
    if (dancerMakerFunctionName === 'CageDancer' && window.cage !== null) {
      return;
    } else {
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);

      if (dancer instanceof CageDancer) {
        window.cage = dancer;
      }

      window.dancers.push(dancer);
    }
  });

  window.lineUp = function(){
    for (var i = 0; i < dancers.length; i++) {

      var t = Math.random()*$('body').height();
      var l = $('body').width()/2;
      dancers[i].top = t;
      dancers[i].left = l;
      dancers[i].$node.animate({top: t,left: l}, 2000);
    }
  };

    window.disperse = function(){
    for (var i = 0; i < dancers.length; i++) {

      var t = Math.random()*$('body').height();
      var l = Math.random()*$('body').height();
      dancers[i].top = t;
      dancers[i].left = l;
      dancers[i].$node.animate({top: t,left: l}, 2000);
    }
  };

  $(".lineUpButton").on("click", function(event){
    lineUp();   
  });
    $(".disperse").on("click", function(event){
    disperse();   
  });
});

