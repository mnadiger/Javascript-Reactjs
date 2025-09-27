// Nullish Coalescin Operator(??):

  - The nullish coalescing operator (??) in JavaScript provides a concise way to handle cases where a variable might be null or undefined.
  - It returns the right-hand side operand if the left-hand side is null or undefined; otherwise, it returns the left-hand side value. 

// How it Works:   

  -  The operator is represented by two question marks: ??. 
  -  It evaluates the left-hand side expression. 
  -  If the left-hand side is null or undefined, it returns the right-hand side expression. 
  -  If the left-hand side is not null or undefined (even if it's a falsy value like 0 or an empty string), it returns the left-hand side value. 


// Example:

    let user = null;
    let name = user ?? "Guest";
    console.log(name); // Output: Guest
    
    let count = 0;
    let displayCount = count ?? 10;
    console.log(displayCount); // Output: 0
    
    let message = "";
    let defaultMessage = message ?? "No message";
    console.log(defaultMessage); // Output: ""




// Comparison with logical OR (||):

  -  The nullish coalescing operator is similar to the logical OR (||) operator, but with a key difference. 
  -  The logical OR operator returns the right-hand side operand if the left-hand side is a "falsy" value (e.g., null, undefined, 0, "", false). 
  -  The nullish coalescing operator only returns the right-hand side if the left-hand side is specifically null or undefined.
