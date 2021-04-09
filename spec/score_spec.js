
describe('Score', function () {
  beforeEach(function () {
    kingpin = new Game;
  });

    it('tracks total game score', function() {
      /* frame1 */ kingpin.roll(1), kingpin.roll(4), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(5)
      /* frame2 */ kingpin.roll(4), kingpin.roll(5), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(14)
      /* frame3 */ kingpin.roll(6), kingpin.roll(4), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(24) 
      /* frame4 */ kingpin.roll(5), kingpin.roll(5), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(39)
      /* frame5 */ kingpin.roll(10), /* strike */    kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(59)
      /* frame6 */ kingpin.roll(0), kingpin.roll(1), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(61)
      /* frame7 */ kingpin.roll(7), kingpin.roll(3), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(71)
      /* frame8 */ kingpin.roll(6), kingpin.roll(4), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(87)
      /* frame9 */ kingpin.roll(10), /* strike */    kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(107)
      /* frame10*/ kingpin.roll(2), kingpin.roll(8), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(127)
      // extra roll due to spare in 10th frame 
      /* frame10*/ kingpin.roll(6), /* no 2nd  */    kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(133)
    })
});

