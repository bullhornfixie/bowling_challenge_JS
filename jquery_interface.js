$(document).ready(function() {
  let kingpin = new Game();

$('#pin-0').click(function() { kingpin.receiveShot(0); standard() })
$('#pin-1').click(function() { kingpin.receiveShot(1); standard() })
$('#pin-2').click(function() { kingpin.receiveShot(2); standard() })
$('#pin-3').click(function() { kingpin.receiveShot(3); standard() })
$('#pin-4').click(function() { kingpin.receiveShot(4); standard() })
$('#pin-5').click(function() { kingpin.receiveShot(5); standard() })
$('#pin-6').click(function() { kingpin.receiveShot(6); standard() })
$('#pin-7').click(function() { kingpin.receiveShot(7); standard() })
$('#pin-8').click(function() { kingpin.receiveShot(8); standard() })
$('#pin-9').click(function() { kingpin.receiveShot(9); standard() })
$('#pin-10').click(function() { kingpin.receiveShot(10); strike() })

function standard() { 
  var gridNum = kingpin.frameCount.toString()
  $('#frame-' + gridNum).text(kingpin.frameScore)
  totalScore()
}

function strike() {
  if(kingpin.shotCount === 1) {
    var gridNum = kingpin.frameCount.toString()
    $('#frame-' + gridNum).text("X") 
    kingpin.endOfFrame() 
    $('#score').text(kingpin.displayTotalScore())
    kingpin.frameReset() }
  else { standard() }
}

function totalScore() {
  if(kingpin.shotCount === 2) { 
    kingpin.endOfFrame() 
    $('#score').text(kingpin.displayTotalScore())
    kingpin.frameReset() }
}

});