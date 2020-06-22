function countSteps(N) {
  
    // just as in our solution explanation above, we know that to climb 1 step
    // there is only 1 solution, and for 2 steps there are 2 solutions
    if (N === 1) { return 1; }
    if (N === 2) { return 2; }
    
    // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
    // an answer recursively

   return  countSteps(N - 1) + countSteps(N - 2) // 3 + (2) ==> 2  + 1 + 2
  }              
  
  // the solution for N = 6 will recursively be solved by calculating
  // the solution for N = 5, N = 4, N = 3, and N = 2 which we know is 2
  console.log(countSteps(4)); 


  function recursiveSteps(steps) {
    var total = 1;
  
    for (var i = 2; i <= steps; i++) {
        
      total += recursiveSteps(steps - i); 

      console.log(total , steps);
    }
  
    return total;
  }

  console.log(recursiveSteps(4)); 