// To find disappearing numbers in an array where:
// You are given an array of integers nums where 1 ≤ nums[i] ≤ n (n = size of array).
// Some numbers appear once or more.
// Some numbers are missing from the array.


// JavaScript Solution (O(n) Time & O(1) Space — No Extra Data Structures):
// We can mark visited positions by making them negative.

// BEST SOLUTION   

const findDisappearingNumbers = (nums) => {

    // Validate input: ensure nums is an array and contains numbers
    if (!Array.isArray(nums) || !nums.every(Number.isInteger)) {
        throw new Error('Input must be an array of integers');
    }

    // Edge case: if the array is empty, return an empty array
    if (!nums || nums.length === 0) {
        return [];
    }


    // Iterate through the array and mark the indices of the numbers by negating the value at that index.

    for (let i = 0; i < nums.length; i++) {

        const index = Math.abs(nums[i]) - 1; // Get the index for the current number
        
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // Mark as visited by negating the value
            //  or
            // nums[index] = nums[index] * -1; // Another way to mark as visited
        }
    }


    // Collect all indices that are still positive, which means those numbers are missing

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // Convert index back to number
        }
    }

  return result;
}


// Example
const input = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(input)); // Output: [5, 6]

// *************************************************************************

// Alternative (Using Set – Extra Space O(n)):

// This solution uses a Set to track the numbers that appear in the array.
// It then checks which numbers from 1 to n are not in the Set.
// This approach is less efficient in terms of space but is straightforward.


const findDisappearedNumbersUsingSet = (nums) => {

    const numSet = new Set(nums);
    const result = [];

    for (let i = 1; i <= nums.length; i++) {
        // Check if the number i is not in the set. If not, it means it is a missing number
        if (!numSet.has(i)) {
            result.push(i); // Add the missing number to the result
        }
    }
    return result;
}

// Example
console.log(findDisappearedNumbersUsingSet(input)); // Output: [5, 6]
