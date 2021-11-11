function integerToString(number) {
  if (number === 0) return '0';
  
  const resultNums = [];
  
  while (number > 0) {
    resultNums.unshift(number % 10);
    
    number /= 10;
    number = parseInt(number, 10);
  }
  
  const stringInt = resultNums.join('');
  return stringInt;
}

function signedIntegerToString(number) {
  let stringNum = integerToString(Math.abs(number));
  
  if (number > 0) {
    stringNum = '+' + stringNum;
  } else if (number < 0) {
    stringNum = '-' + stringNum;
  }
  
  return stringNum;
}

console.log(signedIntegerToString(4321) === '+4321');      // "+4321"
console.log(signedIntegerToString(-123) === '-123');      // "-123"
console.log(signedIntegerToString(0) === '0');         // "0"
