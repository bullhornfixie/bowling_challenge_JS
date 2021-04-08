'use strict';

class Game {
  constructor() {
  this.scoreCard = []
  this.pinCount = 10; 
  this.rollCount = 0;
  this.frameScore = 0
  this.frameCount = 1;
  this.bonus = "none"
  }
};

Game.prototype.roll = function(hitpins) {
  this.pinCount -= hitpins;
  this.rollCount++;
  this.frameScore += hitpins; 
  console.log("you rolled")
}

Game.prototype.endOfFrame = function() {
  this.frameCount ++
  console.log("frame over")
}

Game.prototype.strikeOrSpare = function() {
  if(this.rollCount === 1 && this.pinCount === 0 ) { this.bonus = "X" }
  else if(this.rollCount === 2 && this.pinCount === 0 ) { this.bonus = "/" } 
  else{ this.bonus = "none" }
  console.log("your bonus fo this frame was", this.bonus)
}

Game.prototype.addBonusPoints = function() {
  let lastFrame = [this.scoreCard[this.scoreCard.length -1]]
  // if bonus in lastFrame is "X" need to update score in lastFrame with current score as bonus points 
  console.log(lastFrame)
}

Game.prototype.updateScoreCard = function() {
  this.strikeOrSpare()
  // addBonusPoints needs to be done at this stage as below push will become last element
  this.scoreCard.push({frame : this.frameCount, score : this.frameScore, bonus : this.bonus})
  // return this.scoreCard.reduce((a, b) => a + b, 0);
  console.log("total score updated")
}

Game.prototype.frameReset = function() {
  this.pinCount = 10; 
  this.rollCount = 0;
  this.frameScore = 0;
  console.log("frame reset")
}
