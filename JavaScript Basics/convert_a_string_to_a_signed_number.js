const lookupInt = (stringNum) => {
  const lookup = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0,
  };
  
  return lookup[stringNum];    
};

const isNegative = function(stringNum) {
  if (stringNum[0] === '-') return true;
  
  return false;  
};

const removeSign = (stringNum) => {
  if (stringNum[0] === '-' || stringNum[0] === '+') {
    return stringNum.slice(1);
  } else {
    return stringNum.slice();
  }
};

const stringToSignedInteger = function(string) {
  const negate = isNegative(string);
  
  const unsignedString = removeSign(string);
  
  const nums = unsignedString.split('').reverse();
  
  let total = nums.reduce((memo, currentNum, currentIndex) => {
    return memo + lookupInt(currentNum) * (10 ** currentIndex);
  }, 0);
  
  if (negate) total = -total;
  
  return total;
};


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
