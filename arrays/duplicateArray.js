let a = [1,2,3,1,2,3,1,2,3]
let b = []

a.forEach((i)=>{
	if(b.indexOf(a[i]) === -1)
		b.push(a[i])
})
console.log(b)