const readline = require("readline-sync");

let result = 0;

const count = Number(readline.question("How many numbers? "));

for (let i = 1; i <= count; i++) {
    const num = Number(readline.question(`Enter number ${i}: `));
    result = result + num;
}

console.log(`Result: ${result}`);