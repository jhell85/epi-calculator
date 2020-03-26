$(document).ready(function() {
  let currentNumber = 0
  let storedNumber = 0
  let operator = ""
  let EqualsCheck = false 
  let checkIfZero = function(value){
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
  })
  //--------------------business logic-----------------------

  $("#clear").click(function() {
    storedNumber = 0
    currentNumber = 0
    updateDisplay()
  })
  $("#addition").click(function() {
    if (storedNumber === 0) {
      storedNumber = currentNumber;
      currentNumber = ""
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
    } else {
      storedNumber = parseFloat(storedNumber) - parseFloat(currentNumber) 
      currentNumber = ""
    }
    updateDisplay()
    currentNumber= 0
    operator = "-"
  }) 
  $("#multiply").click(function() {
    if (storedNumber === 0) {
      storedNumber = currentNumber;
      currentNumber = ""
    } else {
      storedNumber = parseFloat(currentNumber) * parseFloat(storedNumber) 
      currentNumber = "";
    }
    updateDisplay()
    currentNumber= 0
    operator = "*"
  }) 
  $("#divide").click(function() {
    if (storedNumber === 0) {
      storedNumber = currentNumber;
      currentNumber = ""
    } else {
      storedNumber = parseFloat(storedNumber) / parseFloat(currentNumber) 
      currentNumber = "";
    }
    updateDisplay()
    currentNumber= 0
    operator = "/"
  }) 
  
});
  
