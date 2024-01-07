/**
 * Title : 713. Subarray Product Less Than K
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Sliding Window problem
 * 
 */
var numSubarrayProductLessThanK = function (nums:Array<number>, k:number) {
    let subArray = 0;
    let left = 0;
    let right = 0;
    let product = 1;

    // This condition is required because product must be less than target
    if (k <= 1) {
        return 0;
    }

    while (right < nums.length) {
        product = product * nums[right];
        //we need to loop until product become less or equal to target
        // in single if condition it won't work in multiple scenario where
        // this required multiple time division from element.
        while (product >= k) {
            product = product / nums[left];
            left++;
        }

        subArray = subArray + (right - left + 1);
        right++;
    }

    return subArray
};


console.log(numSubarrayProductLessThanK([10,9,10,4,3,8,3,3,6,2,10,10,9,3],19));
console.log(numSubarrayProductLessThanK([1,2,3],0));
console.log(numSubarrayProductLessThanK([10,5,2,6],100));