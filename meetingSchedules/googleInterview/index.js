//Please use this Google doc during your interview (your interviewer will see what you write here). To free your hands for typing, we recommend using a headset or speakerphone.
/*
[[0,100], *[90,130], [200,300], [180,400]]

const arr = [[0,100], *[90,130],[180,400] , [200,300]]
mergedArr= [[0,130], [180, 400]]

[ [0,130],   [200,300]]

[[0,100],[90,130]]
s    e     s    e
*/
//loop through the whole array , and check to see if the first array’s end is less than second array’s end, then we will merge to one array, with the largest end.

//O(O(N*lgN) + O(N)) = ?

function mergeRanges(arr){
  let sortedArray = arr.slice().sort((a,b)=> a[0] > b[0]? 1 :-1)
  let meregedArray = [sortedArray[0]];
  
   for(let i=1; i< sortedArray ; i++){
      let currentRaneg = sortedArray[i];

      let lastmergedArray = meregedArray[meregedArray.length -1];

       mergeTwo(currentRaneg, meregedArray,lastmergedArray, meregedArray);
   }
  return meregedArray;
};

function mergeTwo(a, b , c , d){ 
    if(a[0] <= b[1]){
        c[1] =  Math.max(c[1],a[1]) 
      }else{
         d.push(a); 
     }
    return d;
}


