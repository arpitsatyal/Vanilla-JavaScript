var b = 1
function outer() {
    var b = 2
    function inner() {
        b++
        var b = 3
        console.log(b)  //3
    }
    inner()
}
outer()

//above's working
function inner() {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b) // output "3"
}

function isInteger(x) {
    return typeof (x) === 'number'
}
console.log(isInteger(2))

//or do this

function isIntegerr(x) {
    return (x ^ 0) === x
}
console.log(isIntegerr('2'))

 