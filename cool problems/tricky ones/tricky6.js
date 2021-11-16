(function () {
    var a = b = 3
})()
console.log("a defined? " + (typeof a !== 'undefined')) //false
console.log("b defined? " + (typeof b !== 'undefined')) //true

// B var a = b = 3; is actually shorthand for:

// b = 3;
// var a = b;

// But how can b be defined outside of the scope of the enclosing function? 
// Well, since the statement var a = b = 3; is shorthand for the statements b = 3;
// and var a = b; b ends up being a global variable (since it is not preceded by the var keyword)
// and is therefore still in scope even outside of the enclosing function.

//when hoisted
// var b  b is defined
// a = b  a is undefined

// -------------------------------------------------------------------------------------------------------
var myObject = {
    foo: "bar",
    func: function () {
        var self = this
        console.log("outer func: this.foo = " + this.foo) //bar
        console.log("outer func: self.foo = " + self.foo); //bar
            (function () {
                console.log("inner func: this.foo = " + this.foo) //undefined
                console.log("inner func: self.foo = " + self.foo) //bar
            }())
    }
}
myObject.func()

// --------------------------------------------------------------------------------------------------------------
console.log("0 || 1 = "+(0 || 1)) //0 
console.log("1 || 2 = "+(1 || 2)) //1
 console.log("0 && 1 = "+(0 && 1)) //0
  console.log("1 && 2 = "+(1 && 2)) //2 