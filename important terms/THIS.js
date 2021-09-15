if a function is a method (in an object), THIS refers to the object itself
if not a method, if pure function, THIS refers to the global object (window in browsers)

in functional constructors:
//we dont get a window object like in pure function
//instead get object that is referred
//new operator creates an empty object
//now this will reference the empty object
//this adds the property to that object


//just for update