/**
 * Given an array of positive integers nums and an integer k, find the length of the longest 
 * subarray whose sum is less than or equal to k. 
 * This is the problem we have been talking about above. We will now formally solve it.
 * 
 * Dynamic Sliding Window size problem
 */

const longestSubArray = (nums : Array<number>, target:number) => {

    let left=0;
    let right=0;
    let longestSize=0;
    let sum = 0;
    for(right=0;right<nums.length;right++){
        sum = sum+nums[right];
        if(sum <= target){
            longestSize = Math.max(longestSize, right-left+1);        
        }else{
            sum = sum - nums[left];
            left++;
        }
    }
    return longestSize;
}

console.log(longestSubArray([3, 1, 2, 7, 4, 2, 1, 1, 5], 8))