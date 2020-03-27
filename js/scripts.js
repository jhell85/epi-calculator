$(document).ready(function() {
  let currentNumber = 0;
  let storedNumber = 0;
  let operator = "";
  let equalsToken = false;
  let checkIfZero = function(value){
    if (equalsToken === true){
      storedNumber = 0;
      equalsToken = false;
    }
    if (currentNumber === 0 || currentNumber === ""){
      currentNumber = value;
    } else {
      currentNumber += value;
    }
  }
  let updateDisplay = function(){
    if (storedNumber === NaN || storedNumber === 0) {
      $("#display").replaceWith(`<h3 id="display">${currentNumber}<h3>`)
    }else{
      $("#display").replaceWith(`<h3 id="display">${storedNumber} ${operator} ${currentNumber}<h3>`)
    }
  }
  $("#1").click(function() {
    checkIfZero("1")
    updateDisplay()
  })
  $("#2").click(function() {
    checkIfZero("2")
    updateDisplay()
  })
  $("#3").click(function() {
    checkIfZero("3")
    updateDisplay()
  })
  $("#4").click(function() {
    checkIfZero("4")
    updateDisplay()
  })
  $("#5").click(function() {
    checkIfZero("5")
    updateDisplay()
  })
  $("#6").click(function() {
    checkIfZero("6")
    updateDisplay()
  })
  $("#7").click(function() {
    checkIfZero("7")
    updateDisplay()
  })
  $("#8").click(function() {
    checkIfZero("8")
    updateDisplay()
  })
  $("#9").click(function() {
    checkIfZero("9")
    updateDisplay()
  })
  $("#0").click(function() {
    checkIfZero("0")
    updateDisplay()
  })
  $("#dot").click(function() {
    if (equalsToken === true){
      clearNumbers();
    }
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
    $("#display").replaceWith(`<h3 id="display">${currentNumber}<h3>`)
    storedNumber = currentNumber;
    currentNumber = ""
    operator = ""
    equalsToken = true;
  })
  //--------------------business logic-----------------------
  let clearNumbers = function(){
    storedNumber = 0;
    currentNumber = 0;
  }
  $("#clear").click(function() {
    clearNumbers()
    updateDisplay()
  })
  $("#addition").click(function() {
    if (storedNumber === 0) {
      storedNumber = currentNumber;
      currentNumber = ""
    } else if (equalsToken === true){
      equalsToken = false;
    } else {
      storedNumber = parseFloat(currentNumber) + parseFloat(storedNumber) 
      currentNumber = ""
    }
    operator = "+"
    updateDisplay()
    currentNumber= 0
  }) 
  $("#subtraction").click(function() {
    if (storedNumber === 0) {
      storedNumber = currentNumber;
      currentNumber = ""
    } else if (equalsToken === true){
      equalsToken = false;
    } else {
      storedNumber = parseFloat(storedNumber) - parseFloat(currentNumber) 
      currentNumber = ""
    }
    operator = "-"
    updateDisplay()
    currentNumber= 0
  }) 
  $("#multiply").click(function() {
    if (storedNumber === 0) {
      storedNumber = currentNumber;
      currentNumber = ""
    } else if (equalsToken === true){
      equalsToken = false;
    } else {
      storedNumber = parseFloat(currentNumber) * parseFloat(storedNumber) 
      currentNumber = "";
    }
    operator = "*"
    updateDisplay()
    currentNumber= ""
  }) 
  $("#divide").click(function() {
    if (storedNumber === 0) {
      storedNumber = currentNumber;
      currentNumber = ""
    } else if (equalsToken === true){
      equalsToken = false;
    } else {
      storedNumber = parseFloat(storedNumber) / parseFloat(currentNumber) 
      currentNumber = "";
    }
    operator = "/"
    updateDisplay()
    currentNumber= 0
  }) 
});
  
