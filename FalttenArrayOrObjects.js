
/**

NEXTPOINT Company:

Given Input:
var arr = [[1,2], [3,4], [4,5]] 
// output: [1,2,3,4,5] Note: Remove duplicate elements.
*********************/

//Solutio1: WITHOUT ANY INBUILT methods


function flattenArray(arr) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);

      // To remove duplicates, you can check if the element is already in the result before pushing it.
      // if (!result.includes(arr[i][j])) {
      //   result.push(arr[i][j]);
      // }  
      // or 
      // Using Set to remove duplicates
      // const uniqueElements = new Set(result);
      // result = [...uniqueElements];  

      // or     
      // Using filter to remove duplicates
      let uniqueArr = result.filter((item, index) => result.indexOf(item) === index); 
      result = [...uniqueArr];
    }
  }
  return result;
}
console.log(flattenArray(mainArr)); // Output: [1, 2, 3, 4, 5] 

// OR



const mainArr = [[1, 2], [3, 4], [4, 5]];


const flattenedArr = [];
for (const subArray of mainArr) {
  for (const element of subArray) {
    
    flattenedArr.push(element);

    //To remove duplicates, you can check if the element is already in the flattenedArr before pushing it.
    // if (!flattenedArr.includes(element)) {
    //   flattenedArr.push(element);
    // }

    // OR: Using Set to remove duplicates
    // const uniqueElements = new Set(flattenedArr);
    // flattenedArr = [...uniqueElements];
  }
}
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5]




//Solutio2: WITH INBUILT methods

// 1. Using Array.prototype.flat():
// This is the most straightforward and modern approach for flattening arrays.

const flattenedArr1 = mainArr.flat();
console.log(flattenedArr1); // Output: [1, 2, 3, 4, 5]



// 2. Using Array.prototype.reduce() and Array.prototype.concat():
const flattenedArr2 = mainArr.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattenedArr2); // Output: [1, 2, 3, 4, 5]


// 3. Using the Spread Syntax (...) with Array.prototype.concat():

const flattenedArr3 = [].concat(...mainArr);
console.log(flattenedArr3); // Output: [1, 2, 3, 4, 5]




// ARRAY OF OBJECTS:


/**

ValueLabs:

Given:
let arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}]

Write Javascript function to print as below:
Output: {a: 1, b: 2, c:3, d:4}
*********************/

//Solutio1: WITHOUT ANY INBUILT methods


// Example usage
let flattenedArr4 = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];


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


let output = mergeObjects(flattenedArr4);
console.log(output); // { a: 1, b: 2, c: 3, d: 4 }







//Solutio2: WITH INBUILT methods

function mergeObjects(arr) {
  return arr.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}


// Example usage
let flattenArrResult = mergeObjects(flattenedArr4);
console.log(flattenArrResult); // { a: 1, b: 2, c: 3, d: 4 }



//Solutio3: WITH INBUILT methods: Alternate way using Object.assign:

let arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];
let result = Object.assign({}, ...arr);
console.log(result); // { a: 1, b: 2, c: 3, d: 4 }




