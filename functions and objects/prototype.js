//js is prototype based oop
//class based oop ma basic building block ho class
//esma chai basic bulding block ho FUNCTIONAL/OBJECT constructor-- it is basically a function
//constructor -- function that we dont need to call, invokes automatically
//when is it a functional constructor -- when its called with NEW keyword //it will never return
//class bhitra ko object = THIS -- in class based oop
//our this depends on the context where it is used //this is object

console.log(this)
function fruits(){
    this.taste = 'bad' 
    this.price = 'expensive'
    //this ma assign garnu vaneko constructor ma aunu ho -- why constructor tho? -- cos we put in constructor to initialize / provide default values!
    console.log(this) //this is a constructor
    

}
fruits.prototype.origin = 'china'
fruits.prototype.sayHi = function(){
    return 'helo from prototype'
}
let apple = new fruits(); //instance created //functional constructor
let banana = new fruits();
console.log('apple is >>' ,apple.origin) //why dot notation? -- cos this = object
console.log('banana is', banana.sayHi())

 //prototype keyword use --  to add property and method for functional constructor