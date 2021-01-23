function sum(a, b) {
  return a - b // <- this is a bug
}

function subtract(a, b) {
  return a - b
}

module.exports = { sum, subtract }
