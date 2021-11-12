In the randomGreeting() function, the array element from words wasn't being returned. Adding return on line 7 fixes that.

In the greet() function, parentheses need to be added to invoke randomGreeting()--otherwise, the local variable greeting points to the function itself rather than what it's returned.

If these two changes are made, the code will run as intended.
