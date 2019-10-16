function Arpit(band,film,sport){
    this.band = band
    this.film= film
    this.sport = sport
}
Arpit.prototype.hobby = function(){
    console.log(`${this.band} + walkin + hockey`)
    
}
let a =  new Arpit('rem','taxi driver', 'cricket')
let b = new Arpit('the national','exorcist', 'football')
a.hobby()        
console.log(a.hobby())


///////////////this in a function mainly refers to the global object
///////////////////but with the help of new keyword now this referes to the empty object created by "new"
///////////////////new creates an empty object
////////////////using `prototype` we did inheriteance ie added new method to the functional constructorrrr
