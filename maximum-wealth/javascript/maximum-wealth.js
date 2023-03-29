const findMaximumWealth = (wealthArray) => {

    let maximumWealthAmount = Number.MIN_VALUE;
    wealthArray.forEach(cArray => {
        let totalWealth = 0;

        cArray.forEach(wealthAmount => {
            totalWealth += wealthAmount;
        });
        if (totalWealth >= maximumWealthAmount) {
            maximumWealthAmount = totalWealth;
        }
    });

    return maximumWealthAmount;
}

const maximumWealth = findMaximumWealth([
    [1, 5],
    [7, 3],
    [3, 5]
])

console.log(`Maximum Wealth amount is ${maximumWealth}`);