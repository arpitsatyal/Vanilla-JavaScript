function Counter() {
	this.count = 0
	this.increment = function () {
		this.count++
		console.log('AFTER INCREMENT', this.count)
		return this
	}
	this.decrement = function () {
		this.count--
		console.log('AFTER DECREMENT', this.count)
	}
}

let counter1 = new Counter()
counter1.increment().decrement()

//using Class
class Counter2 {
	constructor() {
		this.count = 0
	}
	increment() {
		this.count++
		console.log('AFTER INCREMENT', this.count)
		return this
	}
	decrement() {
		this.count--
		console.log('AFTER DECREMENT', this.count)
	}
}

let counter2 = new Counter2()
counter2.increment().decrement()