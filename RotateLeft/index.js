function rotLeft(a, d) {
    let len = a.length - d;
  for(let i= 0 ; i< len ; i++){
      a.unshift(a.pop());
  }

  return a;
}

/*
Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
*/

console.log(rotLeft([1,2,3,4,5], 4));

