/**
 * Title : 1342. Number of Steps to Reduce a Number to Zero
 * Given an integer num, return the number of steps to reduce it to zero. 
 * In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * @param {*} num 
 * @returns 
 */
const numberOfSteps = function(num) {
    let counter = 0; 
    while(num>0){
        if(num%2==0){
            num = num/2;
        }else{
            num = num-1;            
        }
        counter ++;
    }

    return counter;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));