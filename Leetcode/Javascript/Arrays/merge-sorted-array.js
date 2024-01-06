const mergeSortedArray = (nums1, nums2)=>{
    //This pointer is used to loop through num1
    let i = 0;
    //This pointer is used to loop through num2
    let j=0;

    //final array
    let resuls = [];
    
    while (i< nums1.length && j<nums2.length){
        if(nums[i] <= nums2[j]){
            results.push(nums[i]);
            i++;
        }else{
            results.push(nums[j]);
            j++;
        }
    }

    while(i<nums1.length){
        results.push(nums[i]);
        i++;
    }

    while(j<nums2.length){
        results.push(nums[j]);
        j++;
    }
}