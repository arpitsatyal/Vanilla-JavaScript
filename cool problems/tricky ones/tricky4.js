var a = [1, 2, 3]
a[10] = 99
console.log(a)
console.log(a[6]) //undefined

typeof undefined == typeof NULL //true
// The expression will be evaluated to true, since NULL will be treated as any other undefined variable.
// Note: JavaScript is case-sensitive and here we are using NULL instead of null.

console.log(typeof typeof 1) //string

for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), i * 1000)
}
// 5,5,5,5,5 every 5 secs
// The reason for this is that each function executed within the loop will be executed after the entire loop has completed 
// and will therefore reference the last value stored in i, which was 5. all iterations reference to the same memory location of i.

// Closures can be used to prevent this problem by creating a unique scope for each iteration, 
// storing each unique value of the variable within its scope, as follows:

for (var i = 0; i < 5; i++) {
    function close(x) {
        setTimeout(() => console.log(x), x * 1000)
    }
    close(i)
}
//0,1,2,3,4 every 5 secs
// or we can simply use let which is block scoped 
// so for each iteration i is a vairable, new copy of i
// callback fn forms a closure with a new variable unlike in var

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), i * 1000)
}
//0,1,2,3,4 every 5 secs