//task 2 ---- finding unique array
var a = ['apple', 'mango', 'kiwi', 'apple', 'mango', 'banana', 'kiwi', 'apple', 'mango', 'pineapple', 'banana', 'kiwi', 'apple', 'mango', 'banana'];
let b = []
for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i])
    }
}
console.log(b)

//using for each loop
a.forEach(function (item) {
    if (b.indexOf(a[item]) === -1)
        b.push(a[item])

})
console.log(b)

//task 3 --- finding no of elements
let count = {}
a.forEach(function (item) { // here item = array element accroding to syntax of foreach

    if (count[item]) {
        count[item] = count[item] + 1

    }
    else {
        count[item] = 1
    }

})
console.log('count is>>', count)

task 1 
function getTime(time) {
    var timeInArr = time.split('m'); //array ma ayo
        var minute = timeInArr[0];
var sec = timeInArr[1].split('s')[0];
    return {
        minute,
        sec
    }
}
console.log('res 1', getTime('33333m22323s'));

let getTime = (time)=>{
	let timeInArr = time.split('h')
	let hour = timeInArr[0]
	console.log(timeInArr)
	let min = timeInArr[1].split('m')[0]
	console.log(min)
return {
	hourIs: hour,
	minIs: min
}

}
// getTime('3h2m5s')
console.log('res is>>', getTime('3h2m'))


