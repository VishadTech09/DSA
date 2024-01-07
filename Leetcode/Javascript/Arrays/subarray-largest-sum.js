const largestSubArrayWithSum = (nums, k)=>{

    let largetSum = 0;
    let sum = 0; 
    let right = 0;

    //Fixed size subarray sliding window first create window

    for(right=0; right < k ; right++){
        sum = sum + nums[right];
    }

    largetSum = sum;
    
    while(right < nums.length){
        sum = sum - nums[right-k] + nums[right];
        largetSum = Math.max(largetSum, sum)
        right++; 
    }
    
    return largetSum;
}

console.log(largestSubArrayWithSum([3,-1,4,12,-8,5,6],4))