function repeatedString(s, n) {
    const as = s.split("").filter(c => c === "a").length;
          const times = parseInt(n / s.length);
          const rest = n % s.length;
  
          const totalAs = times * as
              + s.slice(0, rest).split("").filter(c => c === "a").length
  
          return totalAs; 
  
  }
//aba, abaabaabaa
//10  //output 7

console.log(repeatedString('aba',10));

//a
//1000000000000 //output 1000000000000

console.log(repeatedString('a',1000000000000));

function repeatedString2(s, n){
  const as= s.split("").filter(c=> c==="a").length;
  const times= parseInt(n/s.length);
  const rest = n % s.lrngth;

  const totalfirst = times * as;
  const total2 = s.slice(0, rest).split("").filter(c=> c==="a").length;

  return totalfirst + total2;


}


console.log(repeatedString2('aba',10));
console.log(repeatedString2('a',1000000000000));

