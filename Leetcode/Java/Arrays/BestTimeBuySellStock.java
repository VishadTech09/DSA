/**
 * Title : 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock
 * on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 * https://www.youtube.com/watch?v=ioFPBdChabY&t=9s
 */
public class BestTimeBuySellStock {
    public static int maxProfit(int[] prices) {
        int buyingPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {

            if ((prices[i] - buyingPrice) > maxProfit) {
                maxProfit = (prices[i] - buyingPrice);
            } else if (prices[i] < buyingPrice) {
                buyingPrice = prices[i];
            }

        }
        return maxProfit;
    }

    public static void main(String args[]) {
        System.out.println("Output success");
    }
}