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
  CageDancer.prototype.move.call(this);

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
    var windowH = $('body').height();
    var windowW = $('body').width();
    var cage = this;

    var position = {};
    position.x  = cage.top;
    position.y = cage.left;

    var vectorY = 2;
    var vectorX = 2;

    setInterval(function(){
      cage.$node.css({ top: position.x, left: position.y });
      position.x += vectorX;
      position.y += vectorY;

      if (position.x <= 0 ) {
        vectorX = 1;  
      } else if (position.x > windowH - 50 ) {
        vectorX = -1;
      } else if ( position.y <= 0 ) {
        vectorY = 3;
      } else if (position.y > windowW - 50) {
        vectorY = -3;
      }
    }, 10);
  };

