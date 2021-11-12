// The issue here is how the amount variable (which is a function parameter) is being set to default to 1. Because the expression checks for a truthiness value before setting amount to point to 1, invoking the function with an amount of 0 will end up resulting in the value amount points to being updated to 1.

// To fix this, explicitly check for undefined rather than rely on its falsiness.

// Updated code for the updateCart() function below
function updateCart(name, amount) {
  if (amount === undefined) amount = 1;

  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}