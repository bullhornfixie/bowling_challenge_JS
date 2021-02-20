'use strict';

class Game {
  constructor() {
  this.scoreCard = []
  this.pinCount = 10; 
  this.shotCount = 0;
  this.frameScore = 0;
  }
};

Game.prototype.receiveShot = function(hitpins) {
  this.shotCount++;
  this.pinCount -= hitpins;
  this.frameScore += hitpins;
  if (this.shotCount === 2 || this.pinCount === 0 ) { return "end frame"}
};

Game.prototype.updateTotalScore = function() {
  this.scoreCard.push(this.frameScore)
}

Game.prototype.displayTotalScore = function() {
  return this.scoreCard.reduce((a, b) => a + b, 0);
}

Game.prototype.frameReset = function() {
  this.pinCount = 10; 
  this.shotCount = 0;
  this.frameScore = 0;
}


/* when frame ends
  update frameScore [] with score 
  display frameScore
  track spares or strikes for frame 
  reset frame data at end of frame
*/
