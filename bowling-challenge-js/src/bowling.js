'use strict';

class Game {

  constructor(){
    this.frameCount = 0
    this.totalScore = 0
    this.spareBonus = false
  };

  start() {
    while (this.frameCount < 10) {
      this.frameCount ++; 
    }
  };

  roll(pins_down) {
    if (pins_down === 10) {
      return '/'
    } else {
      pins_down }
  };
  
};

