let lookupInt = (stringNum) => {
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

function stringToInteger(string) {
  const nums = string.split('').reverse();
  
  return nums.reduce((memo, currentNum, currentIndex) => {
    return memo + currentNum * (10 ** currentIndex);
  }, 0);
}


console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
