//Dobounce: Debounce is a technique used to limit the rate at which a function can fire. 
// It ensures that a function is only executed after a certain amount of time has passed since the last time it was invoked.
 

export function debounce(func, delay) {
    let timerId;

    return function (...args) {
        // Clear the previous timer if it exists
        clearTimeout(timerId);

        // Set a new timer
        timerId = setTimeout(() => {
            func(...args); // Call the original function with the correct context and arguments
        }, delay);
    };
}


const searchQuery = (message) => {
    console.log(`Debounced message: ${message}`);
}

// Example usage of debounce....
const debouncedResult = debounce(searchQuery, 1000);

// Simulate rapid calls to the debounced function
debouncedResult("Hello");
debouncedResult("World");
debouncedResult("This");
debouncedResult("Is");
debouncedResult("Debouncing");
