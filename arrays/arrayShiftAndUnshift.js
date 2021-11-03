function shift(array) {
  if (array.length === 0) return undefined;
  
  let shifted = array[0];
  
  array.copyWithin(0, 1);
  
  array.length -= 1;
  
  return shifted;
}

function unshift(array, ...newItems) {
  // extend the array length so that it has the necessary space for the new elements
  array.length = array.length + newItems.length;
  
  array.copyWithin(newItems.length, 0);
  
  for (let index = 0; index < newItems.length; index++) {
    array[index] = newItems[index];
  }
  
  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
