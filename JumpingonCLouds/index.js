function jumpingOnClouds(c) {
  let jumpCount = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] === 0) {
      jumpCount++;
      i = i + 2;
    } else if (c[i + 1] !== 1) {
      jumpCount++;
      i++;
    }
  }
  return jumpCount;
}

function jumpingOnClouds2(c) {
  var n = 0;
  for (var i = 0; i < c.length - 1; ) {
    i += c[i + 2] ? 1 : 2;
    n++;
  }
  return n;
}
/*
Sample Input 1
6
0 0 0 0 1 0
Sample Output 1
3
*/

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
console.log(jumpingOnClouds2([0, 0, 0, 0, 1, 0]));
