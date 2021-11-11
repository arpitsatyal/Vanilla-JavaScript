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

var x = 23 //if we use let we get error


// even before first line is executed memory is allocated
// for all the variables

// x will be undefined and getName will be the function body
// since it has the function body, so when we invoke it we ge the result

// in function expression, printName acts like a variable, so printName will be undefined
// so when we try invoke undefined we get error