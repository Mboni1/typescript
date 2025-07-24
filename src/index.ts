
// Function type annotation
type MathOperation = (a: number, b: number) => number;

// Implementation
const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

// Usage
console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6