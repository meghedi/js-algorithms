let arr = [1,3,5,7];
const cumulativeSum = list => {
  let result = [list[0]];
  
  for(let i = 1; i < list.length; i++) {
    result.push(list[i] + result[i-1]);
  } 
  
  return result;
}
console.log(cumulativeSum(arr)); // Returns [1, 4, 9, 16]


const cumulativeSum2 = (arr) =>{
  let result = [arr[0]]

  for(let i=1; i< arr.length ; i++){
     result.push(arr[i] + result[i-1]);
  }

  return result;
}