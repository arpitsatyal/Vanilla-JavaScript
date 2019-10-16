function bandConcert(){
	return new Promise((resolve, reject)=>{
		console.log('i want to go to concert')
		console.log('i ask money to dad')
		setTimeout(()=>{
resolve(2000)
		},1000)
	})
}

function goToMovies(){
	return new Promise((resolve, reject)=>{
		console.log('i went to cinema hall')
		console.log('i wait for friend')
		setTimeout(()=>{
resolve()	
		},1000)
	})
}

function goToStadium(){
	return new Promise((resolve, reject)=>{
		console.log(' i wa nna go to stamford bridge')
		setTimeout(()=>{
resolve()
		},1000)
	})
}

bandConcert()
.then((data)=>{
	console.log(' i went to concert yay')
	 return goToMovies()
})
.then((data)=>{
		console.log('friend arrive, lets go to hall')
		 return goToStadium()
	})
.then((dsta)=>{
	console.log('here at stamford bridge')
})

.catch((err)=>{
	console.log('fml')
})

console.log('eat food')