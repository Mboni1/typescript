// Type for a function that takes a number and returns a string
type NumberFormatter = (num: number) => string;

function formatNumbers(
  numbers: number[],
  formatter: NumberFormatter
): string[] {
  return numbers.map(formatter);
}


// Usage

const currencyFormatter: NumberFormatter = (n) => `$${n.toFixed(2)}`;
const numbers = [1.99, 2.50, 3.75];

console.log(formatNumbers(numbers, currencyFormatter));
// ["$1.99", "$2.50", "$3.75"]


