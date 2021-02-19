$(document).ready(function() {
  let kingpin = new BowlingGame();
  console.log(kingpin.score)

$('#restart').click(function() {
  kingpin.score = 0
  console.log(kingpin.score)
})

});