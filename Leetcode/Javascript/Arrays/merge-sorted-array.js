/**
 * Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
 * 
 * @param {*} nums1 
 * @param {*} nums2 
 * @returns 
 */
const mergeSortedArray = (nums1, nums2)=>{
    //This pointer is used to loop through num1
    let i = 0;
    //This pointer is used to loop through num2
    let j=0;

    //final array
    let results = [];
    
    while (i< nums1.length && j<nums2.length){
        if(nums1[i] <= nums2[j]){
            results.push(nums1[i]);
            i++;
        }else{
            results.push(nums2[j]);
            j++;
        }
    }

    while(i<nums1.length){
        results.push(nums1[i]);
        i++;
    }

    while(j<nums2.length){
        results.push(nums2[j]);
        j++;
    }

    return results;
}

console.log(mergeSortedArray([1,4,7,20],[3,5,6]))
