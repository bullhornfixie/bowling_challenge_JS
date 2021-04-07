$(document).ready(function() {
  let kingpin = new Game();

$('#pin-0').click(function() { kingpin.roll(0); standard() })
$('#pin-1').click(function() { kingpin.roll(1); standard() })
$('#pin-2').click(function() { kingpin.roll(2); standard() })
$('#pin-3').click(function() { kingpin.roll(3); standard() })
$('#pin-4').click(function() { kingpin.roll(4); standard() })
$('#pin-5').click(function() { kingpin.roll(5); standard() })
$('#pin-6').click(function() { kingpin.roll(6); standard() })
$('#pin-7').click(function() { kingpin.roll(7); standard() })
$('#pin-8').click(function() { kingpin.roll(8); standard() })
$('#pin-9').click(function() { kingpin.roll(9); standard() })
$('#pin-10').click(function() { kingpin.roll(10); strike() })


function standard() { 
  var gridNum = kingpin.frameCount.toString()
  $('#frame-' + gridNum).text(kingpin.frameScore)
  display()
}

function strike() {
  if(kingpin.rollCount === 1) {
    var gridNum = kingpin.frameCount.toString()
    $('#frame-' + gridNum).text("X") 
    kingpin.endOfFrame() 
    $('#score').text(kingpin.gameScore())
    kingpin.frameReset() 
    console.log("strike!") }
  else { standard() }
}

function display() {
  if(kingpin.rollCount === 2) { 
    kingpin.endOfFrame() 
    $('#score').text(kingpin.gameScore())
    kingpin.frameReset() }
}

});