function calcMax(arr,arr2, arr3) {
	return [arr,arr2,arr3].length
}

// function calcMax(arr) {
// 	return arr // output = 1
// }



console.log(calcMax.apply(null, [1,2,3,4,5]))

// array's each element is treated as individual argument to the function. so if I pass only one argument to the function,
// I will get the output "1"