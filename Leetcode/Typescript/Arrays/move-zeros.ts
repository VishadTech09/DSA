/**
 * Title: Move Zeros
 * Description : Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 */
 
const moveZeroes = (nums:Array<number>) => {
  let lastNonZeroElementIndex : number = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0 && nums[lastNonZeroElementIndex + 1] == 0) {
      lastNonZeroElementIndex++;
      const lastIndexElement = nums[lastNonZeroElementIndex];
      const currentElement = nums[i];

      nums[lastNonZeroElementIndex] = currentElement;
      nums[i] = lastIndexElement;
    } else if (nums[i] != 0 && nums[lastNonZeroElementIndex + 1] != 0) {
      lastNonZeroElementIndex++;
    }
  }

  return nums;
};

//Sample Input test cases
console.log(moveZeroes([2, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([1, 0, 1]));
