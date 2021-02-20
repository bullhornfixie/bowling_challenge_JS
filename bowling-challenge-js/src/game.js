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
  if (this.shotCount === 2 || this.pinCount === 0 ) { return "frame end"}
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

kingpin = new Game
kingpin.receiveShot(10)

kingpin.updateTotalScore()
kingpin.displayTotalScore()
kingpin.frameReset()

kingpin.receiveShot(5)
kingpin.receiveShot(5)

kingpin.updateTotalScore()
kingpin.displayTotalScore()
// should return 20 


/* when frame ends
update frameScore [] with score 
reset pinCount to 10 
reset shotCount to 0 
reset frameScore to 0 
track spares or strikes for frame 

syntax idea if frameEnd = true 
  update 
  display 
  reset
    frameEnd = false 

*/
