'use strict';

class Game {
  constructor() {
  this.scoreCard = []
  this.pinCount = 10; 
  this.shotCount = 0;
  this.frameScore = 0
  this.frameCount = 1;
  }
};

Game.prototype.receiveShot = function(hitpins) {
    this.pinCount -= hitpins;
    this.shotCount++;
    this.frameScore += hitpins; 
}

Game.prototype.endOfFrame = function() {
  this.scoreCard.push(this.frameScore)
  this.scoreCard.reduce((a, b) => a + b, 0);
  this.frameCount ++
}

Game.prototype.frameReset = function() {
  this.pinCount = 10; 
  this.shotCount = 0;
  this.frameScore = 0;
}

  // if(this.shotCount === 1 && this.bonus = "/") { hitpins * 2 }
  // if (this.shotCount === 2 || this.pinCount === 0 ) { this.frameCount ++ }
  // once above condition is true need to execute below functions 

Game.prototype.strikeOrSpare = function() {
  let bonus = ""
  if(this.pinCount === 0 && this.shotCount === 1 ) { bonus = "X" }
  else if(this.pinCount === 0 && this.shotCount === 2 ) { bonus = "/" }
  return bonus 
  // need to configure how bonus score will be implemented for a spare /
}

// Game.prototype.displayTotalScore = function() {
//   this.scoreCard.push(this.frameScore)
//   return this.scoreCard.reduce((a, b) => a + b, 0);
// }



/*
let kingpin = new Game

kingpin.receiveShot(2)
kingpin.receiveShot(3)
> "end of frame"

kingpin.frameScore
> 5
*/
