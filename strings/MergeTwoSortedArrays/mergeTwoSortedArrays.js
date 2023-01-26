/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let k = 0;
  // loop through both arrays until the end of one of the arrays is reached
  while (i < m && j < n) {
    // compare the elements of both arrays
    if (nums1[i] <= nums2[j]) {
      // if the element in nums1 is smaller, move to the next position
      i++;
    } else {
      // if the element in nums2 is smaller, shift elements in nums1 to the right
      for (let l = m; l > i; l--) {
        nums1[l] = nums1[l - 1];
      }
      // insert the element from nums2 into nums1
      nums1[i] = nums2[j];
      // move to the next position in both arrays
      i++;
      j++;
      // increase the size of nums1
      m++;
    }
  }

  // add any remaining elements from nums2 to the end of nums1
  while (j < n) {
    nums1[i] = nums2[j];
    i++;
    j++;
  }
};
