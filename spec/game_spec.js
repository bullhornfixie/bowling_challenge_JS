

describe('Scorecard', function () {
  beforeEach(function () {
    kingpin = new Game;
  });

  describe('Rolling a bowling ball', function () {
   
    it('should knock down all pins down when 10 is entered within a frame', function() {
      kingpin.roll(9)
      kingpin.roll(1)
      expect(kingpin.pinCount).toEqual(0)
    })

    it('updates your score for each frame', function() {
      kingpin.roll(5)
      kingpin.roll(3)
      expect(kingpin.frameScore).toEqual(8)
    })

    it('tracks the amount of rolls and there is a maximum of 2 per frame', function() {
      kingpin.roll(2)
      kingpin.roll(5)
      expect(kingpin.rollCount).toEqual(2)
    })

    it('resets the frame after 2 rolls', function() {
      kingpin.roll(2)
      kingpin.roll(5)
      kingpin.frameReset()
      expect(kingpin.pinCount).toEqual(10)
      expect(kingpin.rollCount).toEqual(0)
      expect(kingpin.frameScore).toEqual(0)
    })

    it('changes bonus status to "X" when a strike is achieved in a frame', function() {
      kingpin.roll(10)
      kingpin.strikeOrSpareForCurrentFrame()
      expect(kingpin.pinCount).toEqual(0)
      expect(kingpin.rollCount).toEqual(1)
      expect(kingpin.bonus).toBe("X")
    })

    it('changes bonus status to "/" when a spare is achieved in a frame', function() {
      kingpin.roll(5)
      kingpin.roll(5)
      kingpin.strikeOrSpareForCurrentFrame()
      expect(kingpin.pinCount).toEqual(0)
      expect(kingpin.rollCount).toEqual(2)
      expect(kingpin.bonus).toBe("/")
    })

    it('changes bonus status to "none" when no bonus is achieved in a frame', function() {
      kingpin.roll(2)
      kingpin.roll(2)
      kingpin.strikeOrSpareForCurrentFrame()
      expect(kingpin.bonus).toBe("none")
    })

    it('tracks total game score', function() {
      /* frame1 */ kingpin.roll(1), kingpin.roll(4), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(5)
      /* frame2 */ kingpin.roll(4), kingpin.roll(5), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(14)
      /* frame3 */ kingpin.roll(6), kingpin.roll(4), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(24) 
      /* frame4 */ kingpin.roll(5), kingpin.roll(5), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(39)
      /* frame5 */ kingpin.roll(10), /* strike */    kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(59)
      /* frame6 */ kingpin.roll(0), kingpin.roll(1), kingpin.autoCalculate(), expect(kingpin.displayGameScore()).toEqual(61)
    })
  });
});