let arr = [1,5,6,1,0,1];
const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];
  
  for(let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];
    console.log(sumsLookup[targetVal] , i);


    if(sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }  

    console.log(output , i);
    sumsLookup[arr[i]] = true;
  }
  
  return output;
}
console.log(findSumPairs(arr, 6));