/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/
let x = nums1.concat(nums2);
x.sort(function (a,b) {
  return a - b;
});
let len = x.length;

return len%2 === 0 ? (x[(len/2)] + x[(len/2)-1])/2 : x[Math.floor(len/2)];