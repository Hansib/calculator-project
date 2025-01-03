// calculator.js
function add(a, b) {
    return a + b;
}

module.exports = { add };
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

module.exports = { add, subtract, divide };
