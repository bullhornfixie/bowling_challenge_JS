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
  // if(this.shotCount === 1 && this.bonus = "/") { hitpins * 2 }
  if (this.shotCount === 2 || this.pinCount === 0 ) { return "end frame"}
  // once above condition is true need to execute below functions 
};

Game.prototype.strikeOrSpare = function() {
  let bonus = ""
  if(this.pinCount === 0 && this.shotCount === 1 ) { bonus = "X" }
  else if(this.pinCount === 0 && this.shotCount === 2 ) { bonus = "/" }
  return bonus 
  // need to configure how bonus score will be implemented for a spare /
}

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


