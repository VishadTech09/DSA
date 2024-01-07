public class NumSubarrayProductLessThanK {
    public static int numSubarrayProductLessThanK(int[] nums, int k) {
        int subArray = 0;
        int left = 0;
        int right = 0;
        int product = 1;

        // This condition is required because product must be less than target
        if (k <= 1) {
            return 0;
        }

        while (right < nums.length) {
            product = product * nums[right];
            // we need to loop until product become less or equal to target
            // in single if condition it won't work in multiple scenario where
            // this required multiple time division from element.
            while (product >= k) {
                product = product / nums[left];
                left++;
            }

            subArray = subArray + (right - left + 1);
            right++;
        }

        return subArray;
    }

    public static void main(String[] args) {
        int arr[] = {10,9,10,4,3,8,3,3,6,2,10,10,9,3};
        int arr1[] = {1,2,3};
        int arr2[] = {10,5,2,6};
        System.out.println(numSubarrayProductLessThanK(arr,19));
        System.out.println(numSubarrayProductLessThanK(arr1,0));
        System.out.println(numSubarrayProductLessThanK(arr2,100));
    }
}