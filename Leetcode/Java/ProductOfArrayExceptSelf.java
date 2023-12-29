/**
 * Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. 
 * Note: Solve it without the division operator in O(n) time.
 */
public class ProductOfArrayExceptSelf {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int outputArray[] = new int[nums.length];

        int prefix[] = new int[nums.length];
        prefix[0] = 1;

        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        int suffix[] = new int[nums.length];
        suffix[n - 1] = 1;

        for (int j = n - 2; j >= 0; j--) {
            suffix[j] = suffix[j + 1] * nums[j + 1];
        }

        for (int i = 0; i < n; i++) {
            outputArray[i] = prefix[i] * suffix[i];
        }

        return outputArray;
    }
}