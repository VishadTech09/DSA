/*
 * Title : Product of Array Except Self 
 * Problem Statement : Given an integer array numbers, return an array such that
 * answer[i] is equal to the product of all the element of numbers except numbers[i]
 */

const productExceptSelf = (nums : Array<number>) => {
  const n : number = nums.length;  
  const outputArray = new Array<number>(); 
 
  const prefix = new Array<number>(); 
  prefix[0] = 1;

  for(let i=1;i<n;i++){
    prefix[i] = prefix[i-1] * nums[i-1];
  }
  
  const suffix = new Array<number>(); 
  suffix[n-1] = 1;

  for(let j=n-2;j>=0;j--){
    suffix[j] = suffix[j+1] * nums[j+1];
  }

  for(let i=0;i<n;i++){
    outputArray[i] = prefix[i]*suffix[i];
  }

  return outputArray;
};

const inputArray = [10, 3, 5, 6, 2]; 
console.log(productExceptSelf(inputArray));
