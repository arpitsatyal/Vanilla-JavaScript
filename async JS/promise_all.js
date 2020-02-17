let p1 = new Promise((res, rej) => setTimeout(() => res('done'), 2000))

let p2 = Promise.resolve('hey')
let p3 = 20

Promise.all([p1,p2,p3]).then(data => console.log(data)).catch(e => console.log(e))

// PROMISE'S ORDER DOESNT CHANGE AT RESULT
// TAKES IN AN ARRAY OF PROMISES
// WILL WAIT THE TILL ALL THE PROMISES RESOLVE THEN WILL RETURN A NEW PROMISE
