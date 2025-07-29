// Export individual declarations
export const pi = 3.14;
export function calculateCircumference(diameter: number): number {
  return diameter * pi;
}

// Export list
const name = "Utils";
function log(message: string) {
  console.log(message);
}
export { name, log };

// Rename during export
export { name as utilsName, log as logMessage };

