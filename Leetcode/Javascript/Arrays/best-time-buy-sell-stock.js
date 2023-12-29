/**
 * Title : 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Solution Explaination Link : https://www.youtube.com/watch?v=ioFPBdChabY&t=9s 
*/

const maxProfitV1 = (prices)=>{

    let buyingPrice = prices[0];
    let maxProfit = 0;
    
    for(i=1;i<prices.length;i++){        

            if((prices[i]-buyingPrice) > maxProfit){
                maxProfit = (prices[i]-buyingPrice);
            }else if(prices[i]<buyingPrice){
                buyingPrice = prices[i];
            }         
        
    }
    return maxProfit;
}

 
console.log(maxProfitV1([1, 2])); // Expected output 1
console.log(maxProfitV1([7, 5, 1, 3, 6, 4])); // Expected output 5
console.log(maxProfitV1([7, 1, 5, 3, 6, 4])); // Expected output 5
console.log(maxProfitV1([7, 6, 4, 3, 1])); // Expected output 0
console.log(maxProfitV1([2, 4, 1])); // Expected output 2
console.log(maxProfitV1([3, 2, 6, 5, 0, 3])); // Expected output 4 WRONG TEST RESULT
console.log(maxProfitV1([2,1,2,1,0,1,2])); // Expected output 2
