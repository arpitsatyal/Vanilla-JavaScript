let arr1 = [{
	name: 'arpit', age: 21
}, {
	name: 'ram', age: 21
}, {
	name: 'ankit', age: 22
}]

let arr2 = [{
	name: 'arpit2', age: 21
}, {
	name: 'ram2', age: 21
}, {
	name: 'ankit2', age: 22
}]

function check(arr1, arr2) {
	arr1.forEach(el => {
		arr2.forEach(el2 => {
			if(el.age === el2.age) {
				console.log(el)
			} else {
				console.log('no')
			}
		})
	})
}

check(arr1, arr2)