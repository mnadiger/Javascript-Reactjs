// Array.prototype.flat() :

  -  Array.prototype.flat() is a JavaScript method that creates a new array with all sub-array elements concatenated into it recursively up to a specified depth. 
  -  It is a copying method, meaning it does not modify the original array but instead returns a new, flattened array. 

// Flattening Nested Arrays:
    -  Its primary purpose is to flatten nested arrays, bringing elements from sub-arrays into a single, "flat" array.

// Exmaple:

    const arr1 = [1, 2, [3, 4]];
    console.log(arr1.flat()); // Output: [1, 2, 3, 4]
    
    const arr2 = [1, 2, [3, 4, [5, 6]]];
    console.log(arr2.flat()); // Output: [1, 2, 3, 4, [5, 6]] (default depth of 1)
    console.log(arr2.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
    
    const arr3 = [1, 2, , 4, [5, , 7]]; // A sparse array
    console.log(arr3.flat()); // Output: [1, 2, 4, 5, 7] (empty slots removed)
    
    const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    console.log(arr4.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
