$(document).ready(function() {
  let kingpin = new Game();

$('#pin-1').click(function() {
  kingpin.receiveShot(1)
  $('#frame-1').text(kingpin.frameScore);
})

});

