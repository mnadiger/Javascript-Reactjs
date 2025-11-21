const reverse = (value) => {
    let reverse= typeof(value) === 'string' ? value.split("").reverse().join('') : value.toString().split('').reverse().join('') 
    let result = typeof(value) === 'string' ? reverse : parseInt(reverse)
    return result
};

console.log(reverse(123)) // 321
console.log(reverse('123')) // 321
console.log(reverse('abc')) // cba


//JavaScript program to reverse a number without using any inbuilt methods like split(), reverse(), 
//or converting it to an array or string functions:


function reverseNumber(num) {
    let reversed = 0;

    while (num !== 0) {
        let digit = num % 10;        // get last digit
        reversed = reversed * 10 + digit; // append digit
        num = Math.floor(num / 10);  // remove last digit
    }

    return reversed;
}

// Example:
console.log(reverseNumber(12345)); // Output: 54321

