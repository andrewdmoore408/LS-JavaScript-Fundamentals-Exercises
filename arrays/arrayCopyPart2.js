// Two ways to copy the values of an array but not a reference to it
const myOtherArray = myArray.slice();

// OR

const myOtherArray = [];

myArray.forEach(item => myOtherArray.push(item));
