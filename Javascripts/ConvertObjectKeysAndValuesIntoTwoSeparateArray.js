// convert object keys and values in two separate arrays for the given below object. 

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
//Output:  ['a', 'b', 'c', 'd', 'e'] and [1, 2, 3, 4, 5]


// 1. To separate the keys and values of the object into two arrays, you can use Object.keys() and Object.values(). 
// This will return an array of the object's keys and an array of the object's values, respectively. 

let keys = Object.keys(obj);
let values = Object.values(obj);

console.log(keys);   // Output: ['a', 'b', 'c', 'd', 'e']
console.log(values); // Output: [1, 2, 3, 4, 5]

// 2. With Manual using for loops

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arr1=[];
let arr2=[];

for(let key in obj) {
    arr1.push(key)
    arr2.push(obj[key])
}

console.log("ARR1", arr1) // Output: ['a', 'b', 'c', 'd', 'e']
console.log("ARR2", arr2) // Output: [1, 2, 3, 4, 5]
