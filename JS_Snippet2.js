// Find the output:  USAGE of "use-strict"


function sum(num1, num2) {
  return arguments[0] + arguments[1]  
}

console.log(sum(2,2)) //Output: 4

*****************************
  
function sum(num1, num2) {
  num1 = 3;
  num2 = 4;
  return arguments[0] + arguments[1]
}

console.log(sum(2,2))  // Output: 7

***********************

//Even after the new values assigned to passed arguments as show above, it should sprint the result of the passed arguments instead of re-assigned ones.

  // Solution:

function sum(num1, num2) {
  
  "use-strict"  // It will consider the values passed as arguments and not the re-assigned values here
  num1 = 3;
  num2 = 4;
  return arguments[0] + arguments[1]
}

console.log(sum(2,2))  // Output: 4





  






