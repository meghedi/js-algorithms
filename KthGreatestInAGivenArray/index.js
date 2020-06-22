//Find the kth greatest element of a given array of integers

const nums = [1,2,3,4,5]

const KLargest = (nums, k) =>{
  // nums.sort((a,b)=> a-b);
   for (let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i+1]){
          let temp = nums[i];
          nums[i] = nums[i+1];
          nums[i+1] = temp;
      }
       
   }
   console.log(nums);
   return nums[k-1];
}


console.log(KLargest(nums, 3));
console.log(KLargest([1,2,6,4,5], 3));
console.log(KLargest([-10,-25,-47,-36,0], 1));

