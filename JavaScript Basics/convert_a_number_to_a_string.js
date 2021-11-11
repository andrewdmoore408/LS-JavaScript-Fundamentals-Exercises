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

console.log(integerToString(4321) === '4321');      // "4321"
console.log(integerToString(0) === '0');         // "0"
console.log(integerToString(5000) === '5000');      // "5000"
