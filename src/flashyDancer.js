var FlashyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

FlashyDancer.prototype = Object.create(Dancer.prototype);
FlashyDancer.prototype.constructor = FlashyDancer;

FlashyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var h = Math.floor(Math.random() * 100);

  this.$node.css('border-color', 'rgb('+r+','+g+','+b+')');
  this.$node.css({'height' : 'h', 'width': 'h'});

};

FlashyDancer.prototype.move = function() {
  Dancer.prototype.move.call(this);

  if (window.cage !== null) {
    if (this.top >= window.cage.top && this.top <= window.cage.top + 50 && this.left >= window.cage.left && this.left <= window.cage.left + 50) {
      this.$node.remove();
    }  
  }
};

