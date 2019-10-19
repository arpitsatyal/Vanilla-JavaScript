// no two symbols can ever be the same
// even if they have the same name, symbols are still unique

let symbolOne = Symbol('a generic one')
let symbolTwo = Symbol('a generic one')
console.log(symbolOne, symbolTwo, typeof (symbolOne))
console.log(symbolOne === symbolTwo)

let ninja = {}
ninja.age = 30
ninja['name'] = 'hattori'
ninja[symbolOne] = 'ryu'
ninja[symbolTwo] = 'shawn'
console.log(ninja)