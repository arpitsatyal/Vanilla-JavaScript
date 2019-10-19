function search(arr, details) {
	let objToArr = Object.values(details)
	let match = []

objToArr.forEach(e => {
	arr.forEach(e2 => {
		if(e === e2) {
			match.push(e)
		}
	})
})

let newObj = {...match}
return newObj
}
console.log(search([7,8],{a: 2, b: 1,e: 3, c: 7, d: 8}))