const arr = [1, 1, 2, 3, 3, 1, 1];
const removeDupes = (arr) => {
  let result = [];
  let sortedArr = arr.sort((a,b)=> a-b);
  let previous = sortedArr[0];
  result[0] = previous;
  
  for(let i = 0; i < sortedArr.length; i++) {
    
    if (sortedArr[i] != previous) {
      result.push(sortedArr[i]);
    }
    
    previous = sortedArr[i];
  }
  
  return result;
}
console.log(removeDupes(arr)); // prints [1, 2, 3]

const removeDupes2 = (arr) => {
   return arr.filter((item, i)=>arr.indexOf(item)===i);

}

console.log(removeDupes2(arr)); // prints [1, 2, 3]