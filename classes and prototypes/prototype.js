function User(username, email) {
    this.username = username
    this.email = email
    this.score = 0
}
User.prototype.login = function () {
    console.log(`${this.username} just logged in!`)
    return this
}
User.prototype.logout = function () {
    console.log(`${this.username} just logged out!`)
    return this
}
User.prototype.score = function () {
    this.score += 1
    console.log(`${this.username} has score of ${this.score}`)
    return this
}

const userOne = new User('arpit', 'arpted7@gmail.com')
const userTwo = new User('ram bahadur', 'ram@bahadur')
userTwo.login().logout()