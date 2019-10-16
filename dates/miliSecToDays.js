let now = new Date()
let bornYear = new Date('July 29 1998')
console.log(bornYear)

let born = now.getTime() - bornYear.getTime()

let toMinutes = Math.round(born / 1000 / 60)
let toHours = Math.round(toMinutes / 60)
let toDays = Math.round(toHours / 24)
let toYears = Math.round(toDays/ 365)
let toDecades = Math.round(toYears / 10)

console.log(`you have been born for: ${toMinutes} minutes, ${toHours} hours, ${toDays} days, ${toYears} years and ${toDecades} decades. pathetic, hope you die soon. `)

 //this can be of great help
 //like ask the user to input their dob
 //pass that dob into the new date 
 //perform the above actions
 //then you can produce certain datas based on that..