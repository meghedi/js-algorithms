//Giving you an array, you need to find the subarray which the sum is maximum
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxInsubsets = (nums) => {
  let sets = [[]];
  let max= 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      var temp = sets[j].concat(nums[i]);
      let s = temp.reduce((acc, curr)=> acc + curr, 0);
      if(s > max){
          max = s;
      }
      sets.push(temp);
    }
  }
 return max;
};

console.log(maxInsubsets(nums));



function findMaxSubArrayBruteForce(arr) {
	var max_so_far = Number.NEGATIVE_INFINITY;
	var leftIndex = 0,
		rightIndex = arr.length - 1,
		len = arr.length;

	for (var i = 0; i < len; i++) {
		maxSum = 0;

		for (var j = i; j < len; j++) {
			maxSum += arr[j];

			if (max_so_far < maxSum) {
				leftIndex = i;
				max_so_far = maxSum;
				rightIndex = j;
			}
		}
	}
	return {
		left: leftIndex,
		right: rightIndex,
		final_max_sum_subArray: max_so_far
	};
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(findMaxSubArrayBruteForce(array));
