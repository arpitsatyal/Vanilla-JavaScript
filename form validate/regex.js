// always starts with / and end with /

// to match single word => ^<word>$

// for criterias 
// ^[a-z]$ 
// ^[a-z A-Z]$
// ^[a-z A-Z]{6,10}$ => for length of the words
// ^[a-z A-Z 0-9] {6,10}$

// DOT in regex means any character => ^.{6,10}$

const username ='shaunpppp'
const pattern = /^[a-z]{6,}$/

let res = pattern.test(username)
if(!res) {
   console.log('fail')
} else {
console.log('pass')
}

let result = username.search(pattern)
console.log(result)
// no match = -1
// match = match[index]