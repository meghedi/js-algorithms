//find all subsets

// [1,2,3]

//output [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const nums = [1,2,3];

const subsets = nums =>{
let sets = [[]];
for (var i = 0; i < nums.length; i++) {
  for (var j = 0, len = sets.length; j < len; j++) {
    var temp = sets[j].concat(nums[i]);
    sets.push(temp);
}
}
return sets;
}
//recrusive
function subsets2(nums){
const powerset = [];
generatePowerset([], 0);

function generatePowerset(path, index) {
  powerset.push(path);
  for (let i = index; i < nums.length; i++) {
    generatePowerset([...path, nums[i]], i + 1);
  }
}

return powerset;
}

console.log(subsets(nums));