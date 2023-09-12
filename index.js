// Define a class for performing calculations
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

// Handle user input and perform calculations
function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const operation = document.getElementById("operation").value;
  const resultDisplay = document.getElementById("result");

  const calculator = new Calculator();
  let result;

  switch (operation) {
    case "add":
      result = calculator.add(number1, number2);
      break;
    case "subtract":
      result = calculator.subtract(number1, number2);
      break;
    case "multiply":
      result = calculator.multiply(number1, number2);
      break;
    case "divide":
      try {
        result = calculator.divide(number1, number2);
      } catch (error) {
        result = "Error: " + error.message;
      } finally {
        // Cleanup or additional actions (if any)
      }
      break;
    default:
      result = "Invalid operation";
  }

  resultDisplay.textContent = "Result: " + result;
}

// Add an event listener to the "Calculate" button
document.getElementById("calculateBtn").addEventListener("click", calculate);
