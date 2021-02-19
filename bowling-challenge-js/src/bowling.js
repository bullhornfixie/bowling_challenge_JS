// https://codepen.io/owenjam/pen/reeLWN
// https://www.bowlinggenius.com/

'use strict';

class BowlingGame {

  constructor() {
    this.rolls = [];
    this.score = 20
  }

  roll = function(pins) {
    this.rolls.push(pins);
    return "pins_down"
  }

  frameScore = function() {
    document.getElementById("frame1").innerHTML = this.score;
    console.log(1)
  }

};




