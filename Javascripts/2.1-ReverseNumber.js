const reverse = (value) => {
    let reverse= typeof(value) === 'string' ? value.split("").reverse().join('') : value.toString().split('').reverse().join('') 
    let result = typeof(value) === 'string' ? reverse : parseInt(reverse)
    return result
};

console.log(reverse(123)) // 321
console.log(reverse('123')) // 321
console.log(reverse('abc')) // cba
