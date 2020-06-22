
const maxFunc = function (arr) {
    let maxnumber = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > maxnumber) {
            maxnumber = arr[index];
        }

    }
    console.log(maxnumber + ' = maxNumber');
    return maxnumber;
};

maxFunc([1, 8, 3]);

/*const numOfVowls = function (input) {
    var count = 0;
    var vowlArray = ['a', 'e', 'i', 'o', 'u'];
    var stringArray = input.split("");
    for (let i = 0; i < stringArray.length; i++) {
        if (vowlArray.indexOf(stringArray[i]) > -1) {
            count++;
        }
    }
    console.log(count);
    return count;

}*/




const numOfVowls = function(input){
    let count = 0;
    let vowlStrings = ['a', 'e', 'i', 'o', 'u'];
    let inputStrings = input.split("");
    inputStrings.forEach(item =>(vowlStrings.indexOf(item)> -1)? count++ : '');
    console.log(count);
    return count;
};
//Input: "hello"
numOfVowls("helloeeeiiii");


/***working
const palindromFunc = function (word) {
    const wordLength = word.length - 1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[wordLength - i]) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
}*/

const palindromFunc = function(word){
   const newStr = word.split("").reverse().join("");
   return word === newStr;
}

palindromFunc("noon"); //true
palindromFunc("horse"); //false
palindromFunc("racecar"); //true

/*Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).
Ex:
Input: "noon"
Output: true
Input: "horse"
Output: false
Input: "racecar"
Output: true
*/

/* working 
const noREapeat = function (strs) { 
    for (let i = 0; i < strs.length; i++) {
        let c = strs.charAt(i);
        if(strs.indexOf(c) === i && strs.indexOf(c, i+1)===-1){
            console.log(c);
            return c;
        }
    }
    return null;
}
noREapeat("this hat is the greatest!");
*/
const noREapeat = function (strs) { 
    const charNewObj = {};
    for (let i = 0; i < strs.length; i++) {
       let char = strs[i];
       if(charNewObj[char]){
           charNewObj[char]++;
       }else{
           charNewObj[char] = 1;
       }
    }

   console.log(JSON.stringify(charNewObj) + 'charNewObj');

    for (const j in charNewObj) {
       if(charNewObj[j] ===1){
           return j;
       }
    }
}


console.log(noREapeat("the quick brown fox jumps over the calm kitten quietly"));

const noREapeat2 = (str) => {
const accurance = str.split("").reduce((acc, curr)=>({ ...acc, [curr]: acc[curr] ? acc[curr] + 1 :  1 }), {});
console.log(JSON.stringify(accurance) + 'accurance');

for (const j in accurance) {
    if(accurance[j] ===1){
        return j;
    }
 }

}

console.log(noREapeat2("the quick brown fox jumps over the calm kitten quietly"));


/*
Write a function that takes in a string and outputs the *first* occurrence of a character that does not repeat itself in that string.
Ex:
Input: "the quick brown fox jumps over the calm kitten quietly"
Output: "b"
Input: "this hat is the greatest!"
Output: "g"
Input: "what a wonderful day it has been!"
Output: "o"
*/
/*
Write a function that takes in an array of numbers and outputs the average of all the numbers.*/
 const getAverage = function(arr){
     let sum = 0;
     for (let index = 0; index < arr.length; index++) {
         const element = arr[index];
         sum = sum + element;   
     }
     return sum / arr.length;
 };

 console.log(getAverage([1, 4, 7]));

/*
Ex:
Input: [ 1 , 4 , 7 ]
Output: 4
Input: [ 10, 5 ]
Output: 7.5
Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
*/

/*
Write a function that takes in an input and returns true if it's an integer and false otherwise.
*/
const isInteger = function(str){
    return parseInt(str) === str;
} 
/*
Ex:
Input: "7"
Output: false
Input: 7
Output: true
Input: 4.3
Output: false
*/
const recursive = function(number){
    if(number <1){
        return ;
    }
    console.log(number);
   recursive(number-1);
}


var srcArr = [0, 1, 2, 3]
var destArr = []
srcArr.reduce(function(preVal, curr, dd, ff){
    destArr.push(preVal + curr);
});

/*
Write a function that takes an array of integers as an input and outputs the first duplicate.
Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5
Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1
Input: [ 2, 4, 5 ]
Output: undefined*/

const firstDuplicate = function(arr){
    for(let i= 0; i< arr.length; i++){
        if(arr.indexOf(arr[i]) === i && arr.indexOf(arr[i], i+1)> -1 ){
            
            return arr[i];

        } 
    }
  return null;
}

console.log('first Duplicate ' + firstDuplicate([ 2, 5, 6, 3, 5 ]));


function fibonacci(number) {

	if (number < 1)
		return 0;

	if (number <= 2)
		return 1;

   return fibonacci(number - 1) + fibonacci(number - 2);
}
//112358
  console.log('herer = '+ fibonacci(6));

  var rotate = function(nums, k) {
      let nums2 = [...nums];
     // return nums2.slice(0,k+1);
     return nums.slice(k).concat(nums2.slice(0,k+1));
};

console.log(rotate([-1,-100,3,99], 3));

rotateLeft = function(num, k){
    for (let i = 0; i < num.length-k; i++) {
        num.unshift(num.pop());
    }
    return num;
}
console.log(rotateLeft([-1,-100,3,99], 3));



/*Return the total number of matching pairs of socks that John can sell.
Sample Input
9
10 20 20 10 10 30 50 10 20
Sample Output :3
*/
function sockMerchant(n, ar) {
    let pairs = 0; 
    let newar = ar.sort((a,b)=> a-b);
for(let i=0; i< n-1 ; i++){
    console.log(i , "i count pairs");
  if(newar[i] === newar[i+1]){
      pairs++;
      i++;
  }
}

 return pairs;
}

//10, 10, 10, 20, 20 , 20, 30, 50 , 10
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20] ));


//https://medium.com/front-end-weekly/big-o-in-js-the-basic-that-you-need-to-know-a5abb45570fa


// Write a function that takes an input parameter, 'str', and returns a new string with the vowels removed. Any special characters such as !@#$%^&*() should be left intact.

// loseTheVowels("this is a test sentence");
// loseTheVowels("coffee is a necessary way to start the day");


function loseTheVowels(str) {

    // YOUR CODE HERE
    let newArr = [];
    let newStr='';
    let vowelArray = ['a', 'e', 'i' , 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    str.split('').forEach(function(item){
      if(vowelArray.indexOf(item)  > -1){
       newStr = str.replace(item, '');
       str = newStr;
      }
    })
 return newStr;
}

// Test cases
console.log(loseTheVowels("this is a test sentence"));
console.log(loseTheVowels("coffee is a necessary way to start the day"));


// Write a function that takes in a string of words and returns the length of the shortest word(s). Make the assumption that the string will never be empty,
// and you do not need to account for differing datatypes.


function findShortest(str) {
 
    // YOUR CODE HERE
    let newArr = [];
    str.split(' ').forEach(element => {
      newArr.push(element.length);      
    });
    let sortedArr = newArr.sort((a,b)=> a-b);
    return sortedArr[0];

}

// TEST CASES
console.log(findShortest("For writers, a random sentence can help them get their creative juices flowing.")); // 1
console.log(findShortest("Joe made the sugar cookies; Susan decorated them.")); // 3
console.log(findShortest("We have never been to Asia, nor have we visited Africa.")); // 2


// Write a function that takes in a Roman numeral as an argument and returns the value as a numeric integer. 

// Roman numerals are written by using letters in place of integers.
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// For example:
// "MCMXC" = 1990
// "MDCLXVI" = 1666

function decodeRomanNumeral(roman) {

    // YOUR CODE HERE
    let romanObj = { 
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    
    let romanArray = roman.split('');
    let sum = 0;
    for (let i = 0; i < romanArray.length; i++) {
        if(romanObj[romanArray[i]] < romanObj[romanArray[i+1]]){
         sum = sum  + romanObj[romanArray[i+1]]- romanObj[romanArray[i]];
         i++;
        }else{
         sum = sum + romanObj[romanArray[i]];
        }
    }

    return sum;

    // set up all the  roman values in an  object that  can be access via key

    // take the input  roman numeral and split into an array so that each char is by itself

    // initialize a var to hold the numeric value

    // loop through the array of roman char numbers

    //  check to see if the value of the current roman char is less than the previous value

    // if true, minus that value and add it to sum 

    // otherwise just add the total value to  sum

    // return the sum

}

// TEST CASES
console.log(decodeRomanNumeral("MCMXC")); // 1990
console.log(decodeRomanNumeral("MDCLXVI")); // 1666



function palindromeDetector(s) {
    let sArray= s.split(" ");
    let reversedArray = [];
  
    sArray.forEach(word => {
     //   return word;
     word.replace(/[^a-zA-Z]+/g, "");
     reversedArray.push(word.split("").reverse().join(""));
    });
  
    return reversedArray.reverse().join("").toLocaleLowerCase()===sArray.join("").toLocaleLowerCase() ;
  
  }
  
  var sentence4 = "Was it a car or a cat I saw";
  
  console.log(palindromeDetector(sentence4));
  
  
  function primeChecker(n){
  
      for(i=2; i <n ; i++){
          if (n%i === 0)
          return false;
      }
  
      return n>1 ? true : false;
  
  }