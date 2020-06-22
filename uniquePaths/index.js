var uniquePaths = function(m, n) {
const dp = Array(n).fill(1);
 // console.log(dp + '\n');
for(let i = 1; i < m; i++) {
  for(let j = 1; j < n; j++) {

    dp[j] = dp[j] + dp[j - 1];
   // console.log(j , dp);
  } 
}

return dp[n - 1];

}

console.log(uniquePaths(3,2));