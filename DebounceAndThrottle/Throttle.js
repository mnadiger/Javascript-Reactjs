function throttle(func, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// Example usage of throttle
const logMessage = (message) => {
  console.log(`Throttled message: ${message}`);
}

// Create a throttled version of the logMessage function
const throttledLog = throttle(logMessage, 5000);

// Simulate rapid calls to the throttled function
throttledLog("Hello");
throttledLog("World");
throttledLog("This");
throttledLog("Is");
throttledLog("Throttling");