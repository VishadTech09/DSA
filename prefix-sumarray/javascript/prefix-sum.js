const buildPrefixSumArray = (nums) => {
    let psArray = new Array();
    psArray.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        psArray[i] = psArray[i - 1] + nums[i];
    }
    return psArray;
}

/*
* This alternate solution doesn't create new array to store prefix sum value
* However we should be careful because changing existing array data which
* gives unexpected output in our program.
*/
const buildPrefixSumArrayAlternate = (nums) => {

    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
}

// Check program output
console.log(buildPrefixSumArray([1, 2, 3, 4, 5]));