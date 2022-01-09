/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//log n solution
 var searchInsert = function(nums, target) {
  let index;
  let ogIndex = 0;
  let direction = 1;
  while (true) {
      index = Math.floor(((nums.length)) / 2) ; 
      ogIndex += (index * direction)

      if (target < nums[0]) {
        return ogIndex - index;
      } 

      if (target > nums[nums.length -1]) {
        return ogIndex + nums.length;
      }

      if (nums[index] === target || (target < nums[index] && target > nums[index -1])) {
          console.log('here')
          break;
      } 
      //chop down the array every time you don't find the answer
      if (target > nums[index]) {
        nums = nums.splice(index, nums.length - index);
        direction = 1
      } else { 
        nums.splice(0, index -1);
        direction = - 1
      }
      console.log(nums);
  }
  return ogIndex;
};

console.log(searchInsert([1, 3, 5, 6, 7, 10, 12, 17, 34, 56, 67, 89, 91], 11))