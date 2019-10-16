//key = property keys:value
let obj = {
    name: "ars",
    age: 22,
    phone: 27387283
};
console.log("has own property?>>" ,obj.hasOwnProperty("age"));
console.log('props only>>', Object.keys(obj)); //to get object keys as arrays
console.log('value only>>', Object.values(obj)) //to get object values as arrays


//serialize and deserialize used for communicating bten 2 programs 
//first serialize then reverse
// JSON = JAVSCRIPT OBJECT NOTATION basically an object also could be called arrays for holding multiple values
let asString = JSON.stringify(obj)
console.log('original',obj)
console.log('as string', asString)
console.log('deserialize', JSON.parse(asString))


//FOR IN LOOP: USED ONLY IN OBJECTS
for( let key in obj){ //variable refers to the key in the object
    //console.log('called')
    //values can be accessed in 2 ways 1. dot 2. bracket notations bracket used for reference
    //even if that prop isnt in actual object we can access it using bracket notation using reference
    console.log('values in obj>>', obj[key])
    //console.log('values in obj>>', obj.age)
}

