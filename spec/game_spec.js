

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

    it('checks to see if a strike was achieved in frame', function() {
      kingpin.roll(10)
      kingpin.strikeOrSpare()
      expect(kingpin.pinCount).toEqual(0)
      expect(kingpin.rollCount).toEqual(1)
      expect(kingpin.bonus).toBe("X")
    })

    it('checks to see if a spare was achieved in frame', function() {
      kingpin.roll(5)
      kingpin.roll(5)
      kingpin.strikeOrSpare()
      expect(kingpin.pinCount).toEqual(0)
      expect(kingpin.rollCount).toEqual(2)
      expect(kingpin.bonus).toBe("/")
    })

    it('checks to see if no bonus was achieved in frame', function() {
      kingpin.roll(2)
      kingpin.roll(2)
      kingpin.strikeOrSpare()
      expect(kingpin.bonus).toBe("none")
    })
  });
});