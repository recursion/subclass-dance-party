var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass( 'dancer' ).addClass( 'flashy' );
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

BlinkyDancer.prototype.move = function() {
  Dancer.prototype.move.call(this);

  if (window.cage) {
    if (this.top >= window.cage.top && this.top <= window.cage.top + 50 && this.left >= window.cage.left && this.left <= window.cage.left + 50) {
      this.$node.remove();
    }
  }
};

