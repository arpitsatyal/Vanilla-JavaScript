let a = 'arpit'
let c = Array.from(a)
console.log('using array from',c)

let f = [...a]
console.log('using spread ops',f)


let g = {...a}
console.log('using spread ops on objs',g)

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