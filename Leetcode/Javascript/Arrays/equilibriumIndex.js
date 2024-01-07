/**
 * Title : Equilibrium index of an array 
 * You are given an array A of integers of size N.
 * Your task is to find the equilibrium index of the given array
 * The equilibrium index of an array is an index such that the sum of elements at lower indexes 
 * is equal to the sum of elements at higher indexes.
 * If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.
 */

const equilibriumIndex = (nums)=>{
    let higherIndexSum = 0;

    for (let i = 0; i < nums.length; i++) {
        higherIndexSum += nums[i];
    }
    let lowerSum = 0;

    for (let i = 0; i < nums.length; i++) {

        higherIndexSum = higherIndexSum - nums[i];
        if (lowerSum == higherIndexSum) {
            return i;
        }
        lowerSum = lowerSum + nums[i];
    }

    return -1;
}

console.log(equilibriumIndex([ 1, 2, 3, 7, 1, 2, 3]))
console.log(equilibriumIndex([ -7, 1, 5, 2, -4, 3, 0 ]))

console.log(equilibriumIndex([ 1, 2, 3]))