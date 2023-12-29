/**
 * Title: Move Zeros
 * Description : Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 */
public class MoveZeros {
    public void moveZeroes(int[] nums) {
        int lastNonZeroElementIndex = -1;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0 && nums[lastNonZeroElementIndex + 1] == 0) {
                lastNonZeroElementIndex++;
                int lastIndexElement = nums[lastNonZeroElementIndex];
                int currentElement = nums[i];

                nums[lastNonZeroElementIndex] = currentElement;
                nums[i] = lastIndexElement;
            } else if (nums[i] != 0 && nums[lastNonZeroElementIndex + 1] != 0) {
                lastNonZeroElementIndex++;
            }

        }
    }
}