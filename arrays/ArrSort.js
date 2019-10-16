let arr = [1,5,7,3,9,4]


// x=== first element to compare
// y=== second element to compare


console.log(arr.sort((x,y) => {
	// console.log(y)
	// console.log(x)
	return x > y 
}))



let yrs = [1990,2010,2000,2006,1992,1996,1994,2009]

// function check() {
// 	for(let i in yrs) {
// 		return 2019 - yrs[i]
// 	}
// }
// console.log(check())

let legalYrs = []
let legal = (barsha, callback) => {
	for(let i in barsha) {
legalYrs.push(callback(barsha[i]))
	}
	return legalYrs
}

console.log(legal(yrs, el => el < 2005))

