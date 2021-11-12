// The code as written does not log the expected result because testing objects for equality in JavaScript checks whether or not the objects are both the exact same object--that is, that they're in the same space in memory.

// Since this code is checking whether the property values for the name property is the same in both objects, that could be checked explicitly as shown below.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person['name'] === otherPerson['name']); 
// NOTE: Another option would be to have the two variables (person and otherPerson) both point to the same object in memory.
