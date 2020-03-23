$(document).ready(function() {
  let currentNumber = ""
  let updateDisplay = function(){
    $("#display").replaceWith(`<h3 id="display">${currentNumber}<h3>`)
  }
  $("#1").click(function() {
    currentNumber += "1"
    updateDisplay()
  })
  $("#2").click(function() {
    currentNumber += "2"
    updateDisplay()
  })
  $("#3").click(function() {
    currentNumber += "3"
  })
  $("#4").click(function() {
    currentNumber += "4"
  })
  $("#5").click(function() {
    currentNumber += "5"
  })
  $("#6").click(function() {
    currentNumber += "6"
  })
  $("#7").click(function() {
    currentNumber += "7"
  })
  $("#8").click(function() {
    currentNumber += "8"
  })
  $("#9").click(function() {
    currentNumber += "9"
  })
  $("#0").click(function() {
    currentNumber += "0"
  })
  $("#equals").click(function() {
    console.log(currentNumber);
    currentNumber = "";
  })
  
});
  
