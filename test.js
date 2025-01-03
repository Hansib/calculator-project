const { add } = require('./calculator');

console.log("2 + 3 =", add(2, 3)); // Should print 5
const { add, subtract, multiply } = require('./calculator');

console.log("2 + 3 =", add(2, 3)); // Should print 5
console.log("5 - 3 =", subtract(5, 3)); // Should print 2
console.log("2 * 3 =", multiply(2, 3)); // Should print 6
const { add, subtract } = require('./calculator');

console.log("2 + 3 =", add(2, 3)); // Should print 5
console.log("5 - 3 =", subtract(5, 3)); // Should print 2

