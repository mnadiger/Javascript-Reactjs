// Basic to advanced polyfills for map and forEach methods in JavaScript

//forEach example
const arr = [1, 2, 3, 4, 5];

// Normal forEach usage
arr.forEach((element, index) =>  console.log(`Without Polyfill: Element at index ${index} is ${element}`))


//Polyfil forEach

function printSomething(element, index, array) {
    console.log(`With Polyfill: Element at index ${index} is ${element} from the the given array ${array}`)
}

Array.prototype.myForEach = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this); // This call is nothing but passed "printSOmthing" function
    }
}

arr.myForEach(printSomething)


//********************************************************** */

const arr1 = [1, 2, 3, 4, 5];

//Normal usage of MAP and it returns new array.
const result = arr.map(element => element * 2);
console.log("Normal Map Usage:",result);


Array.prototype.mapMap = function (callback) {
    const res = [];
    for (let index = 0; index < this.length; index++) {
        res.push(callback(this[index], index, this));
    }
    return res;
}

const mapRes = arr1.mapMap((el) => el * 3);
console.log("MyMap polyfil usage: ", mapRes);
