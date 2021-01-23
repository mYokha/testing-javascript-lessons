function sum(a, b) {
  return a - b // <- this is a bug
}

function subtract(a, b) {
  return a - b
}

let result = sum(3, 7)
let expected = 10

if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`)

result = subtract(7, 3)
expected = 4

if (result !== expected)
  throw new Error(`${result} is not equal to ${expected}`)

// running this code should throw an error for sum(a, b)
