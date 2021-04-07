$(document).ready(function() {
  let kingpin = new Game();

$('#pin-0').click(function() { kingpin.receiveShot(0); points() })
$('#pin-1').click(function() { kingpin.receiveShot(1); points() })
$('#pin-2').click(function() { kingpin.receiveShot(2); points() })
$('#pin-3').click(function() { kingpin.receiveShot(3); points() })
$('#pin-4').click(function() { kingpin.receiveShot(4); points() })
$('#pin-5').click(function() { kingpin.receiveShot(5); points() })

function points() { 
  var gridNum = kingpin.frameCount.toString()
  $('#frame-' + gridNum).text(kingpin.frameScore)
  reset()
}

function reset() {
  if(kingpin.shotCount === 2) { 
    kingpin.endOfFrame() 
    $('#score').text(kingpin.displayTotalScore())
    kingpin.frameReset()
  } 
}

});