function sum(a, b) {
  return a - b // <- this is a bug
}

function subtract(a, b) {
  return a - b
}

const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

module.exports = { sum, subtract, sumAsync, subtractAsync }
