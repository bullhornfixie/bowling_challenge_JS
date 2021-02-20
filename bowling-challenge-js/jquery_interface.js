$(document).ready(function() {
  let kingpin = new Game();

$('#restart').click(function() {
  console.log("game restarted")
})

$('#pin-1').click(function() {
  kingpin.roll(1)
  $('#frame-1').text(kingpin.score[1]);
  $('#frame-2').text(kingpin.score[2]);
})


});

