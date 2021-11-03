function slice(array, begin, end) {
  if (begin > array.length) begin = array.length;
  if (end > array.length) end = array.length;
  
  let newArray = [];
  
  for (let index = begin; index < end; index++) {
    newArray.push(array[index]);
  }
  
  return newArray;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

let adjustArrayLength = function(array, start, lengthDelta) {
  if (lengthDelta > 0) {
    array.length = array.length + lengthDelta;
    
    for (let index = array.length - 1; index >= start; index--) {
      array[index] = array[index - lengthDelta];
    }
  } else {
    for (let index = start; index <= start - lengthDelta; index++) {
      array[index] = array[index - lengthDelta];
    }
    
    array.length = array.length + lengthDelta;
  }
  
  return array;
};

function splice(array, start, deleteCount, ...newElements) {
  if (start > array.length) start = array.length;
  if (deleteCount > (array.length - start)) deleteCount = (array.length - start);
  
  const removed = [];
  
  // copy elements which will be removed
  for (let index = start, remaining = deleteCount; remaining > 0; index++) {
    if (remaining > 0) {
      removed.push(array[index]);
      remaining--;
    }
  }
  
  const lengthDifference = newElements.length - deleteCount;
  if (lengthDifference !== 0) adjustArrayLength(array, start, lengthDifference);
  
  // if newElements were passed in, reassign the relevant indices to their new elements
  for (let index = start; index < start + newElements.length; index++) {
    array[index] = newElements[index - start];
  }
  
  return removed;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
