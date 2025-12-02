// What is the output of the below snippet

const arr = [5, 45, 2, 11, 30];
console.log(arr.sort());

// Output: [ 11, 2, 30, 45, 5 ]

// Why?

Because Array.prototype.sort() in JavaScript, 
by default, converts elements to strings and sorts them lexicographically (dictionary order), not numerically.


🧠 Explanation:
'11' comes before '2' in dictionary (string) comparison.

So the numbers are sorted as strings:

'11', '2', '30', '45', '5'

That’s why the result looks “wrong” if you're expecting numerical order.


✅ How to sort numerically:
    -  To sort the array numerically in ascending order, pass a compare function:

  arr.sort((a, b) => a - b);

  🔁 This will output:

  [ 2, 5, 11, 30, 45 ]



📌 Summary:
     -   arr.sort() = string sort (lexicographical)
  
     -  arr.sort((a, b) => a - b) = correct numerical sort


// ****************************************************************



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





  






