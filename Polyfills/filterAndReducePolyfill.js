// Basic to advanced polyfills for map and forEach methods in JavaScript

//forEach example
const arr = [1, 2, 3, 4, 5]

// Normal filter usage
const res = arr.filter((element, index) => element > 2)
console.log(res)

//Polyfil filter


Array.prototype.myFilter = function (callback) {
    const result = []
    
    for (let index = 0; index < this.length; index++) {
        //Checking if the call returns true for the required condition.
        if (callback(this[index])) {
            result.push(this[index])
        }
    }
    return result
}

const myFilterRes = arr.myFilter(el => el > 2)
console.log("MyFilter method: ", myFilterRes)


//********************************************************** */

const arr1 = [1, 2, 3, 4, 5];

//Normal usage of MAP and it returns new array.
const res1 = arr1.reduce((acc, element) => acc + element, 0);
console.log("Normal Reduce:",res1);


Array.prototype.myReduce = function (callback, initialValue) {
    let accumelatedRes = initialValue

    for (let index = 0; index < this.length; index++) {

        accumelatedRes = accumelatedRes ? callback(accumelatedRes, this[index]) : this[index]      // This callback is called, (acc, el) => acc + el here everytime
    }
    return accumelatedRes;
}

const mapRes = arr1.myReduce((acc, el) => acc + el, 0);
console.log("MyReduce polyfill Result: ", mapRes);
