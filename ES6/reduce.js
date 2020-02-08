//to compute an array to a single value

//lets try to add all the elements in the arraylet arr = [10,20,30,40,50]

let result = arr.reduce((sum,el)=>{
	// console.log(sum,el)
	return sum +=el
},0)
console.log(result)

// sum = accumulator, initially 0
// el = array elements


let arr2 = [{
	name: "arpit",
	salary: 50
},{
	name: "laure ",
	salary: 10
},{
	name: "ram bahadur talpade",
	salary: 1
}]


let result2 = arr2.reduce((sum,el)=>sum+= el.salary,0)
console.log(result2)


// pretty simple...