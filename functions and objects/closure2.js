function welcome(name) {
    var inner = "  to   "
    function innerF(location) { // yo ra let inner F = function innerF(location) eutai ho
        var hi = "helo"
        var text = hi + " " + name + " " + "welcome" + inner + location
        return text
    }
    function sayHi() {
        return 'helllllllllllllo'
    }
    function setName(newName) {
        return inner = newName;
    }
    return {
        first: innerF,
        second: sayHi,
        third: setName
    }

}
var result = welcome('arpit')
console.log('>>', result.first('ktm'))
console.log('>>', result.third('hari'))



