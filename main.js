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
    // display.innerHTML = input
    console.log(input)
  } else if (obj.className === "cancel") {
    input = ""
    inputsReadyToCalc = []
    display.innerHTML = input
  } else if (obj.className === "operator" && input.length != 0) {
    inputsReadyToCalc.push(input, obj.value)
    input = ""
    console.log(inputsReadyToCalc)
  } else if (obj.className === "evaluate" && input.length != 0) {
    // Equal sign was selected. Show results and then clear memory
    let total = 0
    // let term = input[i].split("/")
    for (var i = 0; i < inputsReadyToCalc.length; i++) {
      console.log(total)
      return total
    }
  }
  display.innerHTML = input

  return input
}

// RETURNS CLASS NAME
// console.log(obj.className)
