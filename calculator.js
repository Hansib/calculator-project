// calculator.js
function add(a, b) {
    return a + b;
}

module.exports = { add };
<<<<<<< HEAD
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

module.exports = { add, subtract, divide };
=======
function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
>>>>>>> 5558a696d52d9d17a8ac5dd631c299dc8ea146d4
