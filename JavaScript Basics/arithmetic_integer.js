const rlSync = require('readline-sync');

let firstNum = rlSync.question('Enter the first number: ');

let secondNum = rlSync.question('Enter the second number: ');

let operations = ['+', '-', '*', '/', '%', '**'];

operations.forEach(op => {
  let answer = eval(`${firstNum} ${op} ${secondNum}`)
  console.log(`${firstNum} ${op} ${secondNum} = ${answer}`);
});

