function canJump(nums) {
  let position = 0
  
  while (position < (nums.length -1)) {
    if (nums[position] === 0) {
      return false;
    }
    position += nums[position];
  }
  return true;
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([2,3,1,0,4]));