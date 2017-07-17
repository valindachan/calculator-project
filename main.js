// Variable to hold latest input
let input = ""
let inputsReadyToCalc = []
let display = document.getElementById("display-text")

function calc(obj) {
  // Convert data type
  if (obj.className === "num") {
    input += obj.value
    updateInputDisplay(input)
    console.log(input)
  } else if (obj.className === "cancel") {
    clearDisplay()
    clearInputsReadyToCalc()
    updateInputDisplay(input)
  } else if (obj.className === "operator" && input.length != 0) {
    // Display operator but doesn't save
    updateInputDisplay(obj.value)
    // Save last input and the operator that was just put in
    inputsReadyToCalc.push(parseFloat(input), obj.value)
    // Reset input
    clearDisplay()
    console.log(inputsReadyToCalc)
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

function updateInputDisplay(displayData) {
  display.innerHTML = displayData
  return
}

function clearDisplay() {
  input = ""
}

function clearInputsReadyToCalc() {
  inputsReadyToCalc = []
}

function evaluate(inputsReadyToCalc) {
  for (var i = 0; i < inputsReadyToCalc.length; i += 3) {
    let term1 = inputsReadyToCalc[i]
    let op = inputsReadyToCalc[i + 1]
    let term2 = inputsReadyToCalc[i + 2]
    let total = 0

    // Calculate value
    switch (op) {
      case "+":
        total = term1 + term2
        break
      case "-":
        total = term1 - term2
        break
      case "/":
        total = term1 / term2
        break
      case "*":
        total = term1 * term2
        break
      default:
        null
    }

    console.log(total)
    return total
  }
}
