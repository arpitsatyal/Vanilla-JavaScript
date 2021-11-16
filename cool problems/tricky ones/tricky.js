let d = {}
let arr = ['zebra', 'horse'].forEach(k => d[k] = undefined)
console.log(d)
// { zebra: undefined, horse: undefined }
// ----------------------------------------------------------------------------------------------

var arr1 = "john".split('')
var arr2 = arr1.reverse()
var arr3 = "jones".split('')
arr2.push(arr3)
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1))
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1))

// array 1: length=5 last=j,o,n,e,s
// array 2: length=5 last=j,o,n,e,s
// ----------------------------------------------------------------------------------------------

console.log(false == '0') //true because it does type coercion
console.log(false === '0') //false because different data type

// ----------------------------------------------------------------------------------------------
var a = {}
b = { key: 'b' }
c = { key: 'c' }
a[b] = 123 // { '[object Object]': 123 }
a[c] = 456 // { '[object Object]': 456 }
console.log(a[b]) //456

console.log(
    (function f(n) {
        return ((n > 1) ? n * f(n - 1) : n)
    })(10)
) //10! ie 3628800

 