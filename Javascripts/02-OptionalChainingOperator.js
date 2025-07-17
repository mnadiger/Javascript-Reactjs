// The optional chaining operator (?.) :

  -  It allows you to safely access properties of an object, even if some intermediate properties in the chain are null or undefined. 
  -  It prevents the common "cannot read property 'x' of undefined" error. 
  -  If any part of the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error. 


// How it works:

    -  The ?. operator is placed between the object property accesses, like this: object?.property?.anotherProperty.
    -  If object is null or undefined, the expression immediately returns undefined.
    -  If object has a value, the expression proceeds to check property.
    -  If property is also null or undefined, the expression returns undefined.
    -  If property has a value, the expression proceeds to check anotherProperty, and so on. 


// Benefits:

    -  Conciseness: Reduces the need for verbose null/undefined checks, making code cleaner and easier to read. 
    -  Error prevention: Prevents the common "cannot read property of undefined" error, making code more robust. 
    -  Conditional logic: Can be used to conditionally invoke methods or apply conditional logic.  


// Example:

    const user = {
      address: {
        city: "New York"
      }
    };
    
    const city = user?.address?.city; // Returns "New York"
    const zipCode = user?.address?.zipCode; // Returns undefined (no zipCode property)
    const country = user?.address?.country?.name; // Returns undefined (no country property)



    const user2 = null;
    const name = user2?.name; // Returns undefined


