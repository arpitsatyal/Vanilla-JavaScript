function commonPrefix(arr) {
    let longest = ''
    if (!arr.length) return longest
    // first, get the first word and comparision index
    let comparisionWord = arr[0]
    let comparisionIndex = 0
    //compare every element in the first word to every element in the remaining words
    // loop over each char of first word
    for (let comparisionLetter of comparisionWord) {
        // loop over remaining words
        for (let i = 1; i < arr.length; i++) {
            // get the current word and the current letter
            let currentWord = arr[i]
            let currentLetter = currentWord[comparisionIndex]
            // compare them and see at which case to return longest
            if (comparisionLetter !== currentLetter ||
                comparisionIndex > currentWord.length) {
                return longest
            }
        }
        // increment the index after one character is finished comparing.
        comparisionIndex++
        longest += comparisionLetter
    }
    return longest
}

console.log(commonPrefix(["flower", "flow", "flight"]))