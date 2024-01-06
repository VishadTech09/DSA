/**
 * Title : 1. Two Sum
 * Given a sorted array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumSorted = function(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while(startIndex<endIndex){

        if(num[startIndex]+nums[endIndex] > target){
            endIndex--;
        }else if(num[startIndex]+nums[endIndex] < target){
            startIndex++;
        }else{
            break;
        }

    }

   
    return [startIndex,endIndex]
};

console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([3,2,4],6))
// console.log(twoSum([3,3],6))