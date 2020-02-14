function findLongestWord(word) {
	let splitWord = word.split(' ')
	let longestWord = ''
	let longestWordLength = 0
	splitWord.forEach((word,i) => {
		if(word.length > longestWordLength) {
			longestWordLength = word.length
			longestWord = word
		}
	})
		return longestWord
}

console.log(findLongestWord('hey how are you fuck arpitsatyal haha'))


function findLongestWord2(str) {
	let longestWord = str.split(' ').reduce((longest, currentword) => currentword.length > longest.length ? currentword : longest, "")
  	return longestWord
}
console.log(findLongestWord2('hey how are you fuck arpitsatyal haha'))