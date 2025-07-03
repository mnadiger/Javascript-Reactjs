// 1. Using the reverse() Method:

    let originalArray = [1, 2, 3, 4, 5];
    originalArray.reverse();
    console.log(originalArray); // Output: [5, 4, 3, 2, 1]
    
    // If you need to reverse the array without modifying the original, you can create a shallow copy before applying reverse():
    // Using the Spread Operator and reverse()

    let originalArray = [1, 2, 3, 4, 5];
    let reversedArray = [...originalArray].reverse(); // Using spread syntax to create a copy
    console.log(reversedArray);   // Output: [5, 4, 3, 2, 1]
    console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)


// 2. Using a Loops (Manual Reversal): which involves swapping elements from opposite ends of the array until the middle is reached.


// FOR LOOP:
    
    function reverseArrayManuallyForLoop(arr) {
    
        let len = arr.length -1; // get the array lenght (basically last index)
        
        for (let i = 0; i < arr.length; i++) {
            
            let tmp = arr[i];
            arr[i] = arr[len];
            arr[len] = tmp;
       
        }
    
      return arr;
    }
    
    let myArr = [10, 20, 30, 40, 50];
    console.log("Before Reverse:", myArr)
    reverseArrayManuallyForLoop(myArr);
    console.log("After Reverse:", myArr) // Output: [50, 40, 30, 20, 10]

// WHILE LOOP:

    function reverseArrayManually(arr) {
      let leftIndex = 0;
      let rightIndex = arr.length - 1;
    
    
      while (leftIndex < rightIndex) {
        
        // Swap elements
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    
        // Move pointers towards the middle
        leftIndex++;
        rightIndex--;
      }
      return arr;
    }
    
    let myArr = [10, 20, 30, 40, 50];
    console.log("Before Reverse:", myArr)
    reverseArrayManually(myArr);
    console.log("After Reverse:", myArr) // Output: [50, 40, 30, 20, 10]



// 3. Using a Stack (Last-In-First-Out Approach):  stack follows the Last-In-First-Out (LIFO) principle, 
// which can be used to reverse an array by pushing elements to the stack and then popping them back out.

      const a = [1, 2, 3, 4, 5];
       function reverseArrayByStack(arr) {
          const rev = [];
          while (a.length > 0) {
              rev.push(a.pop());
          }
          return rev
       }
      const reverseArr = reverseArrayByStack(a)
      console.log("Reverse Array: ", reverseArr)



    // or with For loop

      function reverseArrayByStack(arr) {
          const reverse = [];
          const newArr = [...arr] // Need to create immutable object and loop as the pop() method will keep reducing the length of the orignal array as we are using that to pop out the elements.
      
         newArr.forEach((element) => {
             reverse.push(arr.pop())
         })
          return reverse;
      }
      const reverseArr = reverseArrayByStack(a)
      console.log("Reverse Array: ", reverseArr)


// 4. Using the reduce() Method

      const a = [1, 2, 3, 4, 5];
      
      function reverseArrayByReduceMethod(arr) {
         
          let revArr = arr.reduce((acc, current) => 
              [current, ...acc], []);
          
          return revArr
      }
      const reverseArr = reverseArrayByStack(a)
      console.log("Reverse Array: ", reverseArr)
