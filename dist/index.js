"use strict";
function formatNumbers(numbers, formatter) {
    return numbers.map(formatter);
}
const currencyFormatter = (n) => `$${n.toFixed(2)}`;
const numbers = [1.99, 2.50, 3.75];
console.log(formatNumbers(numbers, currencyFormatter));
//# sourceMappingURL=index.js.map