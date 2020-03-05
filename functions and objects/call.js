function getName() {
	return this.firstName + ' ' + this.lastName
}

let names = {
	firstName: 'arpit',
	lastName: 'satyal'
}

console.log(getName.call(names))

// first argument => what the this keyword is set to
// second and other arguments => arguments to the function

function calc(a,b,c) {
	return a + b + c
}

console.log(calc.call(null, 1, 2, 3))