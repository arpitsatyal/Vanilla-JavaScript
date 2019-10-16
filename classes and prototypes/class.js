//this inside a class refers to the object created by new keyword.
class User {
    constructor(username, email) {
        this.username = username
        this.email = email
        this.score = 0
    }
    login() {
        console.log(`${this.username} just logged in!`)
        return this
        //this here refers to the current instance executing. or the current user.
        // console.log('this inside login', this)
    }
    logout() {
        console.log(`${this.username} just logged out!`)
        return this
    }
    incScore() {
        this.score += 1
        console.log(`${this.username} has a score of ${this.score}`)
        return this
    }
}

const userOne = new User('arpit', 'arpted7@gmail.com')
const userTwo = new User('ram bahadur', 'ram@bahadur')
// console.log(userOne, userTwo)
setTimeout(() => {
    userTwo.login().incScore().logout()
}, 5000)


userOne.login().incScore().incScore().logout()
console.log('---------------------------------')

// new keyword
// 1) creates a new empty object {}
// 2) it binds the value of this to the object
// 3) it calls the constructor to build the object
