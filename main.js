let input = []
let display = document.getElementById("display")

function calc(obj) {
  // Convert data type
  if (obj.className === "num") {
    // obj = parseInt(obj)
    input.push(parseInt(obj.value))
    // display.innerHTML = input
    console.log(obj.value)
  } else if (obj.className === "cancel") {
    input = []
    display.innerHTML = input
  } else if (obj === "/" || obj === "-") {
  } else if (obj === "=") {
    input = []
    display.innerHTML = "Evaluating..."
  }
  // console.log(input)
  // input.push(obj.value)
  display.innerHTML = input
  // console.log(input, typeof obj)
  return input
}

// RETURNS CLASS NAME
// console.log(obj.className)
