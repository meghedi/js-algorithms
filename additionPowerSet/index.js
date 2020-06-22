/*
arr = [1, 2, 3] 
sum = 5
sets = [[]]

Step 1: Add 1 to the power set
[[], [1]]

Step 2: Add 2 to the power set
[[], [1], [1, 2], [2]]

Step 3: Add 3 to the power set
[[], [1], [1, 2], [2], [1, 3], [2, 3], [1, 2, 3], [3]]
*/

function ArrayAdditionI(arr) {
  
    // get largest number and remove it from array
    var sum = Math.max.apply(null, arr);


   console.log('sum first=' + sum);

    arr.splice(arr.indexOf(sum), 1);
    
    // power set
    var sets = [[]];
  
    // generate the power set and for each new set
    // check if the temporary sum equals our sum above
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0, len = sets.length; j < len; j++) {
        var temp = sets[j].concat(arr[i]);
        sets.push(temp);
        console.log(sets);
        var s = temp.reduce(function(p, c) { return p + c; });
        if (s === sum) { return "true"; 
    }
      }
    }
    
    return "false";
           
  }
     
 console.log(ArrayAdditionI([1,2,3]));  

 //This algorithm runs in O(2n) time because in the worse case, we need to create every possible subset of the array to check if any of them equal the goal sum, and there are 2n possible sets.