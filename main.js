// Basic calculator
// Can add, subtract, divide and multiple two numbers (with decimals) at a time
//
//
// Future To Do
// Make text in display smaller if the number displayed is long
// Chain complex operations
// Add a button to calculate the Modulo of 2 numbers
// Add a button to calculate the Square Root of 2 numbers
// Add a decimal button
// Keep track of all the calculations so that you can scroll back through them

// Variable to hold latest input
let input = ""

// Variable to hold inputs ready to calculate
let inputsReadyToCalc = []
let display = document.getElementById("display-text")

// Process input
function calc(obj) {
  // If it's a number, show on display
  if (obj.className === "num") {
    input += obj.value
    updateInputDisplay(input)
    console.log(input)

    // Clear display and clear
  } else if (obj.className === "cancel") {
    clearDisplay()
    clearInputsReadyToCalc()
    updateInputDisplay(input)

    // Whatever is inputed gets pushed into this array once they are seen
    // as "complete." For example, if an input has multiple digits, this is
    // taken into account and is taken as one single input once a user
    // clicks an operator
  } else if (obj.className === "operator" && input.length != 0) {
    // Display operator but doesn't save
    updateInputDisplay(obj.value)
    // Save last input and the operator that was just put in
    inputsReadyToCalc.push(parseFloat(input), obj.value)
    // Reset input
    clearDisplay()
    console.log(inputsReadyToCalc)

    // Clear display, display total, and let users do something with that total.
    // For example, they can continue adding/subtracting/adding digits, etc.
    // from that total
  } else if (obj.className === "evaluate" && input.length != 0) {
    inputsReadyToCalc.push(parseFloat(input, obj.value))
    total = evaluate(inputsReadyToCalc)
    updateInputDisplay(total)
    clearDisplay()
    clearInputsReadyToCalc()
    input += total
  }

  return input
}

// Update display
function updateInputDisplay(displayData) {
  display.innerHTML = displayData
  return
}

// Clear display
function clearDisplay() {
  input = ""
}

// CLear inputs ready to calculate
function clearInputsReadyToCalc() {
  inputsReadyToCalc = []
}

// Evaluate two inputs ready to calculate
function evaluate(inputsReadyToCalc) {
  for (var i = 0; i < inputsReadyToCalc.length; i += 3) {
    let term1 = inputsReadyToCalc[i]
    let op = inputsReadyToCalc[i + 1]
    let term2 = inputsReadyToCalc[i + 2]
    let total = 0

    // Calculate value based on operator
    switch (op) {
      // Addition
      case "+":
        total = term1 + term2
        break
      // Subtraction
      case "-":
        total = term1 - term2
        break
      // Multiplication
      case "*":
        total = term1 * term2
        break
      // Division
      case "/":
        total = term1 / term2
        break
      // Default case
      default:
        null
    }

    // Return the total based on operator
    console.log(total)
    return total
  }
}
