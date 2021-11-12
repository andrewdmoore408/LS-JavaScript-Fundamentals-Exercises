// The last invocation wasn't working properly because the comparison on line 5 uses coercion, so 0 and false are considered equal.

// Adding a third equals to the comparison fixes the functionality.

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
  
