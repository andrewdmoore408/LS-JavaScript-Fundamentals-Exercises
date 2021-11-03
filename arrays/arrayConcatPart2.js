let pushArray = (currentArray, arrToPush) => arrToPush.forEach(item => currentArray.push(item));

function concat(...items) {
  let result = [];
  
  items.forEach(item => {
    if (Array.isArray(item)) {
      pushArray(result, item);
    } else {
      result.push(item);
    }
  });
  
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4] }
