function search(arr, details) {
	let objToArr = Object.values(details)
	let match = []

objToArr.forEach(e => {
	arr.forEach(e2 => {
		if(e === e2) {
			console.log(e2)
			match.push(e)
		}
	})
})

return match
}
console.log(search([3,55,96],{a: 2, b: 55,e: 3, c: 7, d: 8}))



