// reverse string elements in javascript

// Solution 1: With inbuilt methods like split, reverse and join
  function reverseString(str) {
    // Split the string into an array of characters
    const charArray = str.split('');
  
    // Reverse the array
    const reversedArray = charArray.reverse();
  
    // Join the reversed array back into a string
    const reversedStr = reversedArray.join('');
  
    return reversedStr;

    // or in Single line as 
    // return str.split('').reverse().join('');
  }
  
  const originalString = "hello";
  const reversedResult = reverseString(originalString);
console.log(reversedResult); // Output: olleh


// 2. Using the Spread operator 

let s = "GeeksforGeeks";
const ans = [...s].reverse().join("");
console.log(ans);



// 3. Using without Built-In functions:
// Using a for loop: This method iterates through the original string from the last character to the first, appending each character to a new, empty string.

function reverseStringWithLoop(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const originalString = "hello";
const reversedResult = reverseStringWithLoop(originalString);
console.log(reversedResult); // Output: olleh



// or With While loop

      var string = 'hello';
      function reverse(str) {
        if(!str.trim() || 'string' !== typeof str) {
          return;
        }
        var length=str.length;
        s='';
        
        while(length > 0) {
          length--;
          s+= str[length];
        }
        return s;
      }
      
      console.log(reverse(string));



// 4. Using  Recursion:

    function reverseStringRecursive(str) {
      if (str === "") {
        return ""; // Base case: an empty string is already reversed
      } else {
        // Recursively reverse the substring starting from the second character,
        // then append the first character to the end.
        
     
        const revStr = reverseStringRecursive(str.substring(1)) + str.charAt(0);
        
        console.log("reversed string till now", revStr)
        return revStr
      }
    }
    
    // Example usage:
    const originalString = "world";
    const reversedResult = reverseStringRecursive(originalString);
    console.log("Reversed String is : ", reversedResult); // Output: dlrow
