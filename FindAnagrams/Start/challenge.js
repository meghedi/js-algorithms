const words = require('an-array-of-english-words');
const occurences = (wordStr) =>{
   return wordStr.split("").reduce((acc, curr)=>({
       ...acc,
       [curr] : acc[curr] ? acc[curr] +1 :1
   }),{});
}

const hasSameletters = (word1, word2) =>{
    let word1letterCount = occurences(word1);
    let word2letterCount = occurences(word2);
    return Object.keys(word1letterCount).length === Object.keys(word2letterCount).length && 
           Object.keys(word1letterCount).every(letter=>word1letterCount[letter] === word2letterCount[letter])
}

const findAnagrams = (word, allWords) => {
   // const letters = word.split('');

     return  allWords.filter(currword => hasSameletters(word, currword)).filter(anagram=> anagram!=word);
    // Your code here
}

console.log(findAnagrams('cinema', words));

/*
    Expected output: ['iceman', 'anemic']
*/