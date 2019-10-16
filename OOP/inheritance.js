class User {
	constructor(username, email) {
		this.username = username
		this.email = email
		this.score = 0
	}
	login() {
		console.log(`${this.username} just logged in!`)
		return this

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

class Admin extends User {
		constructor(username, email, role) {
		super(username, email)
		this.role = role
	}
	deleteUser(todelete) {
		for (let i = 0; i < users.length; i++) {
			if (users[i] === todelete)
				users.splice(i, 4)
		}
	}
}

const userOne = new User('max', 'max.com')
const userTwo = new User('john', 'john.com')
const userThree = new User('donald', 'donald')
const userFour = new User('emily', 'emily')
const admin = new Admin('arpit', 'arpited7@gmail.com', 'manager')

console.log(admin.login().incScore().logout())
let users = [userOne, userTwo, userThree, userFour]
admin.deleteUser(userOne)
console.log('remaining users', users)

// if we have a constructor in the child class then its constructor will run not the parent's so we need to define all the properties defined in the child class again 
//super() runs the parent class's constructor to set up properties for child class as well.
