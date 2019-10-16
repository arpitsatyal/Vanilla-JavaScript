function goToConcert(ok, cb){
console.log('i wanna go to concert')
console.log(' i ask mom for money')
	console.log(ok)

setTimeout(()=>{
	cb(null, 5000)
})
}

goToConcert('abc', (err, done)=>{
	if(err){
		console.log('fml')
	}
	else{
	console.log(' yay i am in concert')

	}
})
console.log('listening to music right now')