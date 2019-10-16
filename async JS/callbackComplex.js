let years = [1990,1988,1955,2011,1974]

function arrCalc(arr, cb){
	let arrRes = []
	for(let i=0;i<arr.length;i++){
		arrRes.unshift(cb(arr[i]))
		
}
		return arrRes
	
}

let ages =  arrCalc(years, function calcAge(el){
	return 2019 - el
})
let full = arrCalc(years, function isFullAge(el){
	return el >=18
})
console.log(ages)
console.log(full)


