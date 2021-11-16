(function () {
    // var x, y (outer and hoisted)
    try {
        throw new Error()
    } catch (x /* inner */) {
        var x = 1 // inner x, not the outer one
        var y = 2 // there is only one y, which is in the outer scope
        console.log('inner', x /* inner */) //1
    }
    console.log('outer', x) //undefined
    console.log('outer', y) //2
})();

// ---------------------------------------------------------------------------------------
var length = 10
function fn() {
    console.log('LENGTH', this.length)
}
var obj = {
    length: 5,
    method: function (fn) {
        fn() //undefined
        arguments[0]() // agruments[0] is the fn
        // o/p is 2 because arguments length is 2 and this refers to the arguments array
    }
};
obj.method(fn, 1)

var x = 21
var girl = function () {
    console.log('X is', x) //undefined
    var x = 20
}
girl()

