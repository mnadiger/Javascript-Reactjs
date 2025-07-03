// How to Convert an Object into Array of Objects in JavaScript?


const obj = {
    java: {
        id: 1,
        title: "Java Programming",
    },
    python: {
        id: 2,
        title: "Python for Beginners",
    },
};

// Output: [  { id: 1, title: 'Java Programming' }, { id: 2, title: 'Python for Beginners' } ]  // Only with values as objects

// 1. Using Object.values() method:  Object.values() method extracts the property values of an object and returns them as an array.

    const res = Object.values(obj);
    console.log(res);

// 2. Using Object.keys() method

    const res = Object.keys(obj); // [ 'java', 'python' ]
    console.log(res.map(el => a[el]));




// 3. Using Object.entries() method: The Object.entries() method returns an array of key-value pairs from the object, 
// and map() is then utilized to extract the values, resulting in an array of objects.


    const res = Object.entries(a)  // [     [ 'java', { id: 1, title:'Java Programming' } ],    [ 'python', { id: 2, title: 'Python for Beginners' } ]   ]
    
    console.log(res.map((entry) => entry[1]));



// 4. Using for..of loop:

    const res = [];

    for (let key in obj) {
        if (a.hasOwnProperty(key)) {
            res.push(obj[key]);
        }
    }
    console.log(res);
