function palindrome(input){
	let str2 = ""
	let arr = []
	for(let i=0;i<input.length;i++){
     arr.push(input[i])
}
for(let i=0;i<input.length;i++){
	str2 = str2 + arr.pop()
}
return input === str2 ? console.log(`${input} is palindrome`) : console.log(`${input} is not a palindrome`)
}
// palindrome(121)

function palindrome2(text) {
let charArray = text.split('');
console.log(charArray)
let result = charArray.every((letter, index) => {
return letter === charArray[charArray.length - index - 1];
});


return result
}
// console.log(palindrome2("racecar"))
//every check every element of the array and returns a boolean value


