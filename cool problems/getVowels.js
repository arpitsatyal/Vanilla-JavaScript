let findVowel =(str) => {
	let count = 0
	let vowels = ['a', 'e', 'i', 'o', 'u']
	vowels.forEach(vowel => str.includes(vowel) ? count +=1 : '')
	return count
}

console.log(findVowel('arpit'))