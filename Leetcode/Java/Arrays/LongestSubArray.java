public class LongestSubArray {
    public int longestSubArray(int[] nums, int target) {
        int left = 0;
        int right = 0;
        int longestSize = 0;
        int sum = 0;
        for (right = 0; right < nums.length; right++) {
            sum = sum + nums[right];
            if (sum <= target) {
                longestSize = Math.max(longestSize, right - left + 1);
            } else {
                sum = sum - nums[left];
                left++;
            }
        }
        return longestSize;
    }

    public static void main(String[] args) {
        LongestSubArray obj = new LongestSubArray();
        int array[]= {3, 1, 2, 7, 4, 2, 1, 1, 5 };
        System.out.println(obj.longestSubArray(array, 8));
    }
}
