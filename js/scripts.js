$(document).ready(function() {
  let currentNumber = ""
  let storedNumber = ""
  let operator = ""
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
    updateDisplay()
  })
  $("#4").click(function() {
    currentNumber += "4"
    updateDisplay()
  })
  $("#5").click(function() {
    currentNumber += "5"
    updateDisplay()
  })
  $("#6").click(function() {
    currentNumber += "6"
    updateDisplay()
  })
  $("#7").click(function() {
    currentNumber += "7"
    updateDisplay()
  })
  $("#8").click(function() {
    currentNumber += "8"
    updateDisplay()
  })
  $("#9").click(function() {
    currentNumber += "9"
    updateDisplay()
  })
  $("#0").click(function() {
    currentNumber += "0"
    updateDisplay()
  })
  $("#dot").click(function() {
    currentNumber += "."
    updateDisplay()
  })
  $("#equals").click(function() {
    if (operator === "+"){
      currentNumber = parseFloat(currentNumber) + parseFloat(storedNumber) 
    } else if (operator === "/"){
      currentNumber = parseFloat(storedNumber) / parseFloat(currentNumber) 
    } else if (operator === "-"){
      currentNumber = parseFloat(storedNumber) - parseFloat(currentNumber)
    } else if (operator === "*"){
      currentNumber = parseFloat(storedNumber) * parseFloat(currentNumber)
    }
    updateDisplay();
    storedNumber = currentNumber;
    currentNumber = "";

  })
  //--------------------business logic-----------------------
  $("#addition").click(function() {
    if (storedNumber === "") {
      storedNumber = currentNumber;
      currentNumber += " +"
      updateDisplay()
      currentNumber= ""
      operator = "+"
    } else {
      storedNumber = parseFloat(currentNumber) + parseFloat(storedNumber) 
      currentNumber = `${storedNumber} +`;
      updateDisplay()
      currentNumber= ""
      operator = "+"
    }
    
  }) 
  
});
  
