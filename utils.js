// utils.js

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

// Exporting all functions
module.exports = { add, multiply, greet };
