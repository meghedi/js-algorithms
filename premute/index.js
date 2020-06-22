var permute = function(nums) {
    let ret = [];

    for (let i = 0; i < nums.length; i = i + 1) {
      let rest = permute(nums.slice(0, i).concat(nums.slice(i + 1)));
      if(!rest.length) {
        ret.push([nums[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([nums[i]].concat(rest[j]))
        }
      }
    }
      return ret;

};

console.log(permute([1,2,3]));