// Variable to hold latest input
let input = ""
let inputsReadyToCalc = []
let display = document.getElementById("display")

// console.log(inputsReadyToCalc)

function calc(obj) {
  // Convert data type
  if (obj.className === "num") {
    // obj = parseInt(obj)
    input += obj.value
    // input.push(parseInt(obj.value))
    display.innerHTML = input
    console.log(input)
  } else if (obj.className === "cancel") {
    input = ""
    inputsReadyToCalc = []
    display.innerHTML = input
  } else if (obj.className === "operator" && input.length != 0) {
    // Display operator but doesn't save
    display.innerHTML = obj.value
    // Save last input and the operator that was just put in
    inputsReadyToCalc.push(parseInt(input), obj.value)
    // Reset input
    input = ""
    console.log(inputsReadyToCalc)
  } else if (obj.className === "evaluate" && input.length != 0) {
    inputsReadyToCalc.push(parseInt(input, obj.value))
    total = evaluate(inputsReadyToCalc)
    display.innerHTML = total
    input = ""
    inputsReadyToCalc = []
    input += total
    // inputsReadyToCalc.push(total)
    // console.log(inputsReadyToCalc)
    // console.log(inputsReadyToCalc)
    // _calculate(100, "+", 300)
    // Equal sign was selected. Show results and then clear memory

    // let term = input[i].split("/")
  }
  // display.innerHTML = input

  return input
}

function evaluate(inputsReadyToCalc) {
  // for (var i = 0; i < inputsReadyToCalc.length; i++) {
  //   console.log(total)
  //   return total
  // }
  // let pieces = inputsReadyToCalc.split(",")

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

  // input.push(total)
}

// RETURNS CLASS NAME
// console.log(obj.className)
