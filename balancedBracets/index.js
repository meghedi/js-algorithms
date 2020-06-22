/*
N = 2
(()), ()()

N = 3
((())), (()()), (())(), ()(()), ()()()
*/
var all = [];

function parens(left, right, str) {
  
  // if no more brackets can be added then add the final balanced string
  if (left === 0 && right === 0) {
    all.push(str);
  }
  
  // if we have a left bracket left we add it
  if (left > 0) {
    console.log(str + "left \n" );
    parens(left-1, right+1, str+"("); // 2, 1, ( ==> 1, 2 , ((  ==> 0, 3, (((
  }
  
  // if we have a right bracket left we add it
  if (right > 0) {
    console.log(str + "right \n" );
    parens(left, right-1, str+")"); // 0, 2, ) ===> 0, 1, )) 

  }
  return all;
}

// the parameters parens(x, y, z) specify:
// x: left brackets to start adding
// y: right brackets we can add only after adding a left bracket
// z: the string so far
console.log(parens(3, 0, ""));
//all; 


//runtime
 