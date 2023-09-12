```sh
cd dillinger
npm i
node app
```

This markdown document provides an overview of how I integrated JavaScript classes, try-catch statements, and switch statements into the calculator project, highlighting their roles in creating a robust and user-friendly calculator.

### JavaScript Classes

In this project, JavaScript classes were instrumental in structuring the code. I introduced the Calculator class to encapsulate the core functionality of the calculator. This class acts as a blueprint for performing arithmetic operations like addition, subtraction, multiplication, and division. It not only promotes code organization but also allows for code reusability. Here's a snippet of the Calculator class:

javascript code

```sh
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
```

By creating this class, I ensured that each operation is neatly encapsulated, making the code more maintainable and extending its capabilities becomes easier.

### Try-Catch Statements

Error handling is a critical aspect of any application. To make the calculator resilient to potential errors, I employed try-catch statements. When a user selects the division operation, for example, the code attempts to execute it. If an exception occurs, such as division by zero, it's caught gracefully in the catch block. This prevents the calculator from crashing and provides meaningful error messages to the user. Here's how try-catch is used:

javascript code

```sh
try {
    result = calculator.divide(number1, number2);
} catch (error) {
    result = "Error: " + error.message;
}
```

This mechanism ensures that users receive informative feedback without disrupting their experience.

### Switch Statements

The calculator's functionality depends on user-selected operations. To determine which operation to perform, I employed switch statements. These statements evaluate the chosen operation and execute the corresponding code block. It simplifies the logic of the calculator and enhances code readability. Here's a simplified example:

javascript code

```sh
switch (operation) {
    case "add":
        result = calculator.add(number1, number2);
        break;
    case "subtract":
        result = calculator.subtract(number1, number2);
        break;
    // Other cases for multiplication and division
    default:
        result = "Invalid operation";
}
```

Switch statements are pivotal in routing user input to the appropriate calculations.

In conclusion, this project effectively demonstrates how JavaScript classes, try-catch statements, and switch statements work in unison to create a calculator that is not only functional but also resilient to errors. By adopting these programming techniques, the calculator becomes a robust and user-friendly tool that maintains code integrity and enhances the user experience. These concepts are transferrable and applicable to more complex applications, ensuring reliable and maintainable software solutions.
