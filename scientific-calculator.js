const readline = require("readline-sync");

function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "Factorial needs a positive integer";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

while (true) {
    console.log("\n===== SCIENTIFIC CALCULATOR =====");
    console.log("1. Addition (+)");
    console.log("2. Subtraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Power (x^y)");
    console.log("6. Square Root (√)");
    console.log("7. Percentage (%)");
    console.log("8. Sin");
    console.log("9. Cos");
    console.log("10. Tan");
    console.log("11. Log");
    console.log("12. Factorial (!)");
    console.log("0. Exit");

    const choice = Number(readline.question("Choose an option: "));

    if (choice === 0) {
        console.log("Calculator closed.");
        break;
    }

    let num1;
    let num2;
    let result;

    switch (choice) {

        case 1:
            num1 = Number(readline.question("Enter first number: "));
            num2 = Number(readline.question("Enter second number: "));
            result = num1 + num2;
            break;

        case 2:
            num1 = Number(readline.question("Enter first number: "));
            num2 = Number(readline.question("Enter second number: "));
            result = num1 - num2;
            break;

        case 3:
            num1 = Number(readline.question("Enter first number: "));
            num2 = Number(readline.question("Enter second number: "));
            result = num1 * num2;
            break;

        case 4:
            num1 = Number(readline.question("Enter first number: "));
            num2 = Number(readline.question("Enter second number: "));

            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;

        case 5:
            num1 = Number(readline.question("Enter base: "));
            num2 = Number(readline.question("Enter power: "));
            result = num1 ** num2;
            break;

        case 6:
            num1 = Number(readline.question("Enter number: "));
            result = Math.sqrt(num1);
            break;

        case 7:
            num1 = Number(readline.question("Enter number: "));
            result = num1 / 100;
            break;

        case 8:
            num1 = Number(readline.question("Enter angle in degrees: "));
            result = Math.sin(num1 * Math.PI / 180);
            break;

        case 9:
            num1 = Number(readline.question("Enter angle in degrees: "));
            result = Math.cos(num1 * Math.PI / 180);
            break;

        case 10:
            num1 = Number(readline.question("Enter angle in degrees: "));
            result = Math.tan(num1 * Math.PI / 180);
            break;

        case 11:
            num1 = Number(readline.question("Enter number: "));

            if (num1 <= 0) {
                result = "Log is only defined for positive numbers";
            } else {
                result = Math.log10(num1);
            }
            break;

        case 12:
            num1 = Number(readline.question("Enter number: "));
            result = factorial(num1);
            break;

        default:
            result = "Invalid option";
    }

    console.log(`Result: ${result}`);
}