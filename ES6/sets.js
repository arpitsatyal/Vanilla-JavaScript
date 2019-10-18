// doesnt accept duplicate values
const names = ['arpit', 'arpit', 'arpit', 'arpit', 'ram', 'hari']

const namesSet = new Set(names)
console.log(namesSet) 
console.log(typeof (namesSet))

const setToArr = [...namesSet]
console.log(setToArr)

// in one line
const oneLine = [...new Set(names)]
console.log(oneLine)

const ages = new Set()
ages.add(20).add(30)
ages.delete(30)
console.log(ages)
console.log(ages.size)
console.log(ages.has(44))
ages.clear()
console.log(ages)

// for each loop can be used in sets.
