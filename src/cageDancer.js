var CageDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass( 'dancer' ).addClass( 'cageDancer' );
  
  this.$node.mouseover(function(){
      $(this).addClass( 'big' );
    }).mouseout(function(){
      $(this).removeClass( 'big' );
    });

  this.top = top;
  this.left = left;

};

CageDancer.prototype = Object.create(Dancer.prototype);
CageDancer.prototype.constructor = CageDancer;

CageDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  //img http://www.placecage.com/c/50/50

};

CageDancer.prototype.move = function(){
  Dancer.prototype.move.call(this);

  var windowH = $('body').height();
  var windowW = $('body').width();
  var cage = this;
  debugger;

  var vectorY = 2;
  var vectorX = 2;

  cage.$node.css({ top: cage.top, left: cage.left });
  cage.top += vectorX;
  cage.left += vectorY;

  if (cage.top <= 0 ) {
    vectorX = 1;  
  } else if (cage.top > windowH - 50 ) {
    vectorX = -1;
  } else if ( cage.left <= 0 ) {
    vectorY = 3;
  } else if (cage.left > windowW - 50) {
    vectorY = -3;
  }
};

