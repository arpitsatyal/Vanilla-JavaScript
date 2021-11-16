console.log(getName('arpit'))
// console.log(printName('arpit2'))
console.log(x)

//gets hoisted
function getName(name) {
	return name
}

// doesnt get hoisted
let printName =  function(name) {
	return name
}

var x = 23 
//if we use let we get error
// We get a new kind of error, its not a ReferenceError, 
// the engine knows about x but doesn't allow us to use it before its initialized. 
// The JS engine doesn't allow us to access the variables declared with let and const before they are declared. 
// This is called Temporal Dead Zone.

// even before first line is executed memory is allocated
// for all the variables

// x will be undefined and getName will be the function body
// since it has the function body, so when we invoke it we ge the result

// in function expression, printName acts like a variable, so printName will be undefined
// so when we try invoke undefined we get error