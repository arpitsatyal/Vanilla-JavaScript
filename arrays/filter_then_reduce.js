let arr = [
{
	a: 300
}, {
	b: 200
}, {
	a: 200
}, {
	c: 50
}, {
	a: 200
}]

let as = arr.filter(e => {
	if(e.hasOwnProperty('a')) {
		return e
	}
})

console.log(as)

let r = as.reduce((sum, el) => sum += el.a, 0)

console.log(r)