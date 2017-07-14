let input = []
let display = document.getElementById("display")

function calc(value) {
  // Convert data type
  if (value == "1") {
    value = parseInt(value)
    input.push(value)
    display.innerHTML = input
  } else if (value === "C") {
    input = []
    display.innerHTML = input
  } else if (value === "/" || value === "-") {
  } else if (value === "=") {
    input = []
    display.innerHTML = "Evaluating..."
  }
  console.log(input)
  input.push(value)
  display.innerHTML = input
  console.log(input, typeof value)
  return input
}
