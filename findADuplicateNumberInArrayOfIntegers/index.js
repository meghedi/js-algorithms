const arr = [1,2,3,4,5,6,7,7,8,6,10];
const findDupes = (arr) => {
  const observed = {};
  for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
      return arr[i]
    } else {
      observed[arr[i]] = arr[i];
    }
  }
  
  return false;
}
console.log(findDupes(arr)); // Returns 7

const findDupes2 = (arr) => {
    return arr.filter((item, i)=> arr.indexOf(item)!==i);

}

console.log(findDupes2(arr)); // Returns [7, 6]
