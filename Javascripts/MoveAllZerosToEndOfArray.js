// Move all zeros to the end of an array
// Example: [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]

const arr = [0, 1, 0, 3, 12];

const moveZerosToEndWithForLoops = (arr) => {

    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }   
    if (arr.length === 0) {
            return arr;
    }   

    
    // Initialize a pointer for the position of the next non-zero element   
    let nonZeroIndex = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
        arr[nonZeroIndex] = arr[i];
        nonZeroIndex++;
        }
    }

    // Fill the rest of the array with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

const result = moveZerosToEndWithForLoops(arr)
console.log(arr)


// *******************************


// JavaScript Program to move all zeros to end using one traversal

// Function which pushes all zeros to end of array
function pushZerosToEnd(arr) {
    
    // Pointer to track the position for next non-zero element
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        // If the current element is non-zero
        if (arr[i] !== 0) {
            
            // Swap the current element with the 0 at index 'count'

            let tmp = arr[i];
            arr[i] = arr[count];
            arr[count] = tmp; 


            // Alternatively, you can use destructuring assignment to swap without a temporary variable:
            // [arr[i], arr[count]] = [arr[count], arr[i]];
            
            // Move 'count' pointer to the next position
            count++;
        }
    }
}

const arr1 = [1, 2, 0, 4, 0, 5, 0];
pushZerosToEnd(arr1);
console.log(arr1);
