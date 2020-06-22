//Assume we are dealing with an environment which could only store integers within 
//the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, 
//assume that your function returns 0 when the reversed integer

var reverse = function(x) {
    let reversed= parseInt(x.toString().split("").reverse().join(""));
      if(reversed > Math.pow(2,31)){
        return 0;
      }
    return reversed* Math.sign(x)
  };

  /*Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/