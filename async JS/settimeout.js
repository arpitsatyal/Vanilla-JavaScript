function task (cb) {
	console.log('hello')
	setTimeout(() => cb('goodbye'), 2000)
}

// console.log(task(data => console.log(data)))

function task2 (cb) {
	setTimeout(() => cb(1+1), 2000)
	return 5
}

console.log(task2(result => console.log(result)))