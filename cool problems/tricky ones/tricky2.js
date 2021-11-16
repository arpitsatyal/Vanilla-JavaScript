(function (x) {
    return (function (y) {
        console.log(x) //1
        console.log(y) //2
    })(2)
})(1)

// ----------------------------------------------------------------------------------------------
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name
    }
}
var stoleSecretIdentity = hero.getSecretIdentity
console.log(stoleSecretIdentity()) 
//undefined because its being executed in the global context, to fix that use bind
let fnFromBind = stoleSecretIdentity.bind(hero)
console.log(fnFromBind()) //john doe
console.log(hero.getSecretIdentity()) // john doe, this refers to the object

// ----------------------------------------------------------------------------------------------
let o = {
    a: 1,
    b: () => {
        return this.a
    }
}
console.log(o.b()) //undefined, this refers to afno scope ko parent, so window

// ----------------------------------------------------------------------------------------------
//use of arrow functions
const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        let splitName = n => {
            let nameArr = n.split(' ')
            this.firstName = nameArr[0]
            this.lastName = nameArr[1]
        }
        splitName(name)
    }
}

profile.setName('arpit satyal')
console.log(profile.firstName)
//because splitName's this is his parent (setName) whose this is the profile object