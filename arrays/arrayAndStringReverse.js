function reverse(inputForReversal) {
  let reversed = [];
  
   for (let inputIndex = inputForReversal.length - 1; inputIndex >= 0; inputIndex--) {
    reversed[inputForReversal.length - inputIndex - 1] = inputForReversal[inputIndex];
  }
 
  if (typeof inputForReversal === 'string') {
    reversed = reversed.join('');
  }
  
  return reversed;    
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
