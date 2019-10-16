// ok lets try this weird looking thing out...

// spread operators are used to , 
// 1. copy array
//also copy anything 

let log = console.log
let arr1 = [1,2,3,4,5]
let arr2 = [...arr1] //doesnt mutate og array, just makes a new copy
arr2.shift()
log(arr2)
log(arr1)

// 2. add elements of existing array to a new array
let ars1 = ["a", "b","c"]
let ars2 = ["d", ...ars1, "e", "f"]
log(ars2)

// 3. pass elements of an array as arguments to a function
addNumber= (x,y,z)=> x+y+z
let res = [1,2,3]
log(addNumber(...res))

// 4. concatenate array
let array1 = ["ram", "shyam", "hari"]
let array2 = ["sita", "dropati"]
let result = array1.concat(array2) //old way //cant add elements in between
let result2 = array1=[...array1,'abc', ...array2]
log(result2)

///rest paramters
// looks same as spread ops but is used when passing arguments to the function
//condensed multiple elements into an array
let rest = (multiplier, ...args1) => {
return args1.map((e)=> multiplier * e)
}
log(rest(10,2,3,4))