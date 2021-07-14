// spread garesi tyo vitra ko value only auxa
// so array spread garesi tyo inside ko values matrai auxa

let people =['ram', 'krishna', 'gopi'] //ram krishna gopi

// console.log(...people)

let x = "Arpit Satyal"
let f = [...x]
// console.log(f)
// console.log(Array.from(x)) //converted in array with each character as an individual element

let x1 = [1,2,3,4,5]
let x2 = [...x1]
x1.push(6)
// console.log(x1, x2) //doesnt mutate x2
let x3 = [7,8,9]
x4 = [...x1, ...x3, 10, 11, 12]
// console.log(x4)

let s = 'Ankit'
// console.log({ ...s }) //spreads as an object

let o = {
	fuck: true,
	gay: false,
	name: 'ram bahadur',
	address: 'antartica'
}
o.gay = true
o.name = f.join('')
let k = {...o}
console.log(k)
