'use strict';

class Game {
  constructor() {
  this.totalScore = []
  this.pinCount = 10; 
  this.rollCount = 0;
  this.frameScore = 0
  this.frameCount = 1;
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

Game.prototype.gameScore = function() {
  console.log("total score updated")
  this.totalScore.push(this.frameScore)
  return this.totalScore.reduce((a, b) => a + b, 0);
}

Game.prototype.frameReset = function() {
  this.pinCount = 10; 
  this.rollCount = 0;
  this.frameScore = 0;
  console.log("frame reset")
}

