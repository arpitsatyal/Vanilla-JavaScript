function reverseString(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]

    }
    return newStr
}
console.log(reverseString('arpit'))


//using inbuilt methods

let name = 'arpit'
console.log(name.split('').reverse().join(''))