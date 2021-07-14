var obj = {
    name: 'ram',
    address: 'tinkune',
    phone: 43444,
    email: 'q@c',
    ram:'hi'
};

let arr = [1,2,3,4,5]

// for in loop
// loops over all the keys in the object
for (let key in obj) {
	console.log(key)
	console.log(obj[key])
} 

for (key in arr) {
	console.log(key) //prints all the indexes of the array
}

// for of loop
for (let x of arr) {
	console.log(x) //prints all the values of the array
}

for (let x of obj) {
	console.log(x) 
}
// says obj is not iterable

