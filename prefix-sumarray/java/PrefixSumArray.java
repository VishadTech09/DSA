public class PrefixSumArray {
    public static int[] prefixSumArray(int[] nums) {
        int psArray[] = new int[nums.length];
        psArray[0] = nums[0];
        for (int i = 1; i < psArray.length; i++) {
            psArray[i] = psArray[i - 1] + nums[i];
        }
        return psArray;

    }

    /*
     * This alternative method use existing number array to store sum value.
     * You should be aware because you are changing existing array which
     * gives unexpected output.
     */
    public static int[] prefixSumArrayWithoutNewArray(int[] nums) {

        for (int i = 1; i < nums.length; i++) {
            nums[i] = nums[i - 1] + nums[i];
        }
        return nums;

    }

    public static void main(String[] args) {
        int nums[] = { 1, 2, 3, 4, 5 };
        prefixSumArray(nums);
    }
}
