let name = {
	firstName: 'arpit', 
	lastName: 'satyal'
}

function printName (homewtown) {
	return `${this.firstName} ${this.lastName} from ${homewtown}`
}

// console.log(printName('ktm')) here, this = undefined because there is no window.firstName

//bind
// bind returns a function
//here this = names
let returnedFn = printName.bind(name, 'ktm')
console.log(returnedFn())

//call
// call directly assigns the this to the function
console.log(printName.call(name, 'ktm'))

function calc(a,b,c) {
	return a + b + c
}

console.log(calc.call(null, 1, 2, 3))
// apply
// array's each element is treated as individual argument to the function
console.log(calc.apply(null, [1,2,3]))

//reduce
calc2 = (...args) => args.reduce((acc, val) => acc + val, 2) 
//1st iteration: 2+1=3, now acc = 3
//2nd iteration: 3+2=5 now acc = 5
//3rd iteration: 5+3=8 final val = 8

console.log(calc2(1,2,3))
