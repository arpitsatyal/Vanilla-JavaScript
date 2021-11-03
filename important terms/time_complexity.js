function sum (arr) {  
   let result = 0 //1
   for (num of arr) { //1
       result += num //3
   }
   return result //1
}
console.log(sum([1,3,10])) 
// 1 + 1 + n + 1 
//0(n) --> linear TC

let sum = arr => arr.reduce((acc, num) => acc + num , 0) 
// 0+1
// 1+3
// 4+10 = 14
//here we are calling a another fn, that increases more time

console.log(sum([1,3,10]))

//so the first one has better TC