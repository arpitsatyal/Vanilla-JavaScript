for(let i=0; i<3; i++){
	setTimeout(()=>console.log(i) ,1000)
}

// output = 0 1 2
// beacuse let is block scoped
// once its out of the block of the for loop, the varaible cant be accesssed anymore
// so in next iteration there will be new variable with a diffrent value



// lets try that out with var
// and now some magic happens....
for( var i=0; i<3;i++){
	setTimeout(()=> console.log(i) ,1000)
} 

//////// output = 3 3 3 
// WHY? 
// because var is function scoped
// that means a variable declared with var is available throughtout the function
// here in our case the function is setTimeout 
// so variable doesnt really change in next iteration of the for loop
//in every iteration the value of i gets updated
//so eventually it reaches to 3 and all three vaues get updated to 3.
// only the values does
// hence, 3 3 3 

