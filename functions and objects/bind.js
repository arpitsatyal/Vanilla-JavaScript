let name = {
	firstName: 'arpit', 
	lastName: 'satyal'
}

function printName (homewtown) {
	return `${this.firstName} ${this.lastName} from ${homewtown}`
}

let NewFnReturnedByBind = printName.bind(name, 'ktm')
console.log(NewFnReturnedByBind())

// BIND IS SAME AS CALL EXCEPT, IT CREATES A NEW COPY OF THE function
// THAT WE BIND, SO THAT WE CAN CALL THE FUNCTION LATER. 

// if the this value of the newly created function is changed it also changes
// the value of this in the og function (ie printName) 

// coz of mutation in reference types