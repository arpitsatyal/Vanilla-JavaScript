// let numOne = 22
// let numTwo = 7
// let res = 22/7
// console.log(res.toFixed(2))
// let floatRes = res.toFixed(2)
// console.log(Math.floor(floatRes)) //if 3.99 then floor makes it 3
// console.log(Math.random() * 5 + 1) //gives random no betn 0 and 1

let upper = 6
let lower = 1
let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower
 //OR let myRandom = Math.floor(Math.random() * (upper - lower + 2)) 

console.log(myRandom)