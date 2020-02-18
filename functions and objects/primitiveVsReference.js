let a = 'arpit'
let b = a
a = 'haha'
console.log(`a: ${a}, b: ${b}`)


let o1 = {name: 'arpit'}
let o2 = o1
o1.name = 'haha'
console.log(`o1: ${o1.name}, o2: ${o2.name}`)

function sayHello(details) {
	return details.name = 'haha'
}
console.log(sayHello({name: 'arpit'}))

// ABOVE CODE OUTPUT:
// $ node primitiveVsReference.js
// a: haha, b: arpit
// o1: haha, o2: haha
// haha

// PRIMITIVE => STORED IN STACK; EACH NEW VARIABLE HAS A DIFFERENT PLACE IN THE STACK EVEN IF THEY HAVE THE SAME VALUE

// REFERENCE => STORED IN HEAP; THE VARIABLE NAME IN THE STACK POINTS A POINTER TO THE HEAP SO IF OG CHANGES, THE REFERENCED ALSO CHANGES...
// COZ THEY BOTH POINT TO THE SAME DATA IN THE HEAP
