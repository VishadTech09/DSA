/**
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects
 * of the same color are adjacent, with the colors in the order red, white, and
 * blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and
 * blue, respectively.
 * You must solve this problem without using the library's sort function.
 */

// Write better version of this program using left pointer & right pointer

public class SortColors {
    public void sortColors(int[] nums) {
        for (int i = 0; i < nums.length - 1; i++) {

            if (nums[i] > nums[i + 1]) {
                int temp = nums[i];
                int temp1 = nums[i + 1];

                nums[i] = temp1;
                nums[i + 1] = temp;
            }

            for (int j = 0; j < nums.length - 1; j++) {
                if (nums[j] > nums[j + 1]) {
                    int temp = nums[j];
                    int temp1 = nums[j + 1];

                    nums[j] = temp1;
                    nums[j + 1] = temp;
                }
            }

        }

    }
}
