/**

ValueLabs:

Given:
let arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}]

Write Javascript function to print as below:
Output: {a: 1, b: 2, c:3, d:4}
*********************/

//Solutio1: WITHOUT ANY INBUILT methods

function mergeObjects(arr) {

  const result = {};

  for (let i = 0; i < arr.length; i++) {

    const obj = arr[i];

    for (let key in obj) {

      if (obj.hasOwnProperty(key)) {

        result[key] = obj[key];

      }
    }
  }

  return result;
}

// Example usage
let arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];

let output = mergeObjects(arr);
console.log(output); // { a: 1, b: 2, c: 3, d: 4 }







//Solutio2: WITH INBUILT methods

function mergeObjects(arr) {
  return arr.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}


// Example usage
let arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];

let result = mergeObjects(arr);
console.log(result); // { a: 1, b: 2, c: 3, d: 4 }



//Solutio3: WITH INBUILT methods: Alternate way using Object.assign:

let arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];
let result = Object.assign({}, ...arr);
console.log(result); // { a: 1, b: 2, c: 3, d: 4 }




