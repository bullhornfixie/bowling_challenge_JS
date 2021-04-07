

describe('Scorecard', function () {
  beforeEach(function () {
    kingpin = new Game;
  });

  describe('Rolling a bowling ball', function () {

    it('should knock down all pins down when 10 is entered within a frame', function() {
      kingpin.receiveShot(9)
      kingpin.receiveShot(1)
      expect(kingpin.pinCount).toEqual(0)
    })

    it('updates your score for each frame', function() {
      kingpin.receiveShot(5)
      kingpin.receiveShot(3)
      expect(kingpin.frameScore).toEqual(8)
    })

    it('tracks the amount of rolls and there is a maximum of 2 per frame', function() {
      kingpin.receiveShot(2)
      kingpin.receiveShot(5)
      expect(kingpin.shotCount).toEqual(2)
      expect(kingpin.frameScore).toEqual(7)
    })

    it('resets the frame after 2 rolls', function() {
      kingpin.receiveShot(2)
      kingpin.receiveShot(5)
      kingpin.frameReset()
      expect(kingpin.pinCount).toEqual(10)
      expect(kingpin.shotCount).toEqual(0)
      expect(kingpin.frameScore).toEqual(0)
    })


  })
});