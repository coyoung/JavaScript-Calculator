// Array to store calculation history
const calculationHistory = [];

// Adds a calculation record to the history
function addToHistory(num1, operator, num2, result) {
  calculationHistory.push({
    operand1: num1,
    operator: operator,
    operand2: num2,
    result: result,
  });
}

// Displays all stored calculations or informs the user if none exist
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations stored yet.");
    return;
  }

  calculationHistory.forEach((entry, index) => {
    console.log(
      `${index + 1}. ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`
    );
  });
}

// Returns the sum of num1 and num2
function add(num1, num2) {
  const result = num1 + num2;
  addToHistory(num1, "+", num2, result);
  return result;
}

// Returns the difference of num1 and num2
function subtract(num1, num2) {
  const result = num1 - num2;
  addToHistory(num1, "-", num2, result);
  return result;
}

// Returns the product of num1 and num2
function multiply(num1, num2) {
  const result = num1 * num2;
  addToHistory(num1, "*", num2, result);
  return result;
}

// Returns the quotient of num1 divided by num2
// Returns null and a warning if division by zero is attempted
function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Error: Division by zero is not allowed.");
    return null;
  }
  const result = num1 / num2;
  addToHistory(num1, "/", num2, result);
  return result;
}

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
console.log(divide(10, 0));
displayHistory();