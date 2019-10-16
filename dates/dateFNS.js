const now = new Date()

console.log(dateFns.isToday(now))

//format options
console.log(dateFns.format(now, 'YYYY'))
console.log(dateFns.format(now, 'MMMM'))
console.log(dateFns.format(now, 'dddd'))
console.log(dateFns.format(now, 'Do')) 
console.log(dateFns.format(now, 'dddd: Do: MMMM: YYYY'))

//comparing dates
const before = new Date('January 2 1430')
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}))
