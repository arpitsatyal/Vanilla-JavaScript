 
//convert the values into an array
let arrz = {
	a:"1",
	b:"2",
	c:"3"
}

let arr2 = []
for(key in arrz){
	arr2.push(arrz[key])
}
console.log(arr2)
 
 //convert only the values into an array
let arr = [{
	a:"1",
	b:"2",
	c:"3"
},{
	a:"1",
	b:"2",
	c:"3"
}]

let result = Object.values(arr[0])
let result2 = Object.values(arr[1])
let result3 = result = [...result,...result2]
console.log(result3)

 

