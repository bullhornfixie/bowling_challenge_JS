'use strict';

class Game {
  constructor() {
  this.scoreCard = []
  this.pinCount = 10; 
  this.rollCount = 0;
  this.frameScore = 0
  this.frameCount = 1;
  this.bonus = "none"
  this.spareBonusPoints = 0 
  }
};

Game.prototype.roll = function(hitpins) {
  this.pinCount -= hitpins;
  this.rollCount++;
  this.frameScore += hitpins; 
  if(this.rollCount === 1) { this.spareBonusPoints += hitpins }
  console.log("you rolled")
}

Game.prototype.endOfFrame = function() {
  this.frameCount ++
  console.log("frame over")
}

Game.prototype.strikeOrSpareForCurrentFrame = function() {
  if(this.rollCount === 1 && this.pinCount === 0 ) { this.bonus = "X" }
  else if(this.rollCount === 2 && this.pinCount === 0 ) { this.bonus = "/" } 
  else{ this.bonus = "none" }
  console.log("your bonus for this frame is", this.bonus)
}

Game.prototype.addStrikeOrSpareBonusToLastFrame = function() {
  if(this.frameCount > 1) {
  let bonus = this.frameScore 
  let objIndex = this.scoreCard.findIndex((obj => obj.frame == this.frameCount - 1))
  console.log("before update: ", this.scoreCard[objIndex])
  if(this.scoreCard[objIndex].bonus === "X") { this.scoreCard[objIndex].score += bonus }
  else if(this.scoreCard[objIndex].bonus === "/") { this.scoreCard[objIndex].score += this.spareBonusPoints }
  console.log("after update: ", this.scoreCard[objIndex])
  }
}

Game.prototype.updateScoreCard = function() {
  this.scoreCard.push({frame : this.frameCount, score : this.frameScore, bonus : this.bonus})
  // return this.scoreCard.reduce((a, b) => a + b, 0);
  console.log("score card updated", this.scoreCard)
}

Game.prototype.frameReset = function() {
  this.pinCount = 10; 
  this.rollCount = 0;
  this.frameScore = 0;
  this.spareBonusPoints = 0;
  console.log("frame reset")
}

Game.prototype.autoCalculate = function () {
  this.strikeOrSpareForCurrentFrame()
  this.updateScoreCard()
  this.addStrikeOrSpareBonusToLastFrame()
  this.endOfFrame()
  this.frameReset()
  console.log("ready for next frame!")
}
