/**
 * MaximumWealthFinder
 */
public class MaximumWealthFinder {

    public static int maximumWealth(int[][] accounts) {
        int maxWealth = Integer.MIN_VALUE;

        for (int[] customerWealth : accounts) {
            int totalWealth = 0;
            for (int wealthAmount : customerWealth) {
                totalWealth += wealthAmount;
            }

            if (totalWealth >= maxWealth) {
                maxWealth = totalWealth;
            }
        }

        return maxWealth;
    }

    public static void main(String[] args) {

        int wealthArray[][] = { { 1, 2, 3 }, { 3, 2, 1 } };
        int maxWealth = maximumWealth(wealthArray);
        System.out.println("Maximum Wealth Amount is : " + maxWealth);
    }
}