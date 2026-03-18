/*

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy
before you sell.
*/


//onsole.log(StockPrice([[7,6,4,3,1]]));

let price: number[] = [7, 1, 5, 3, 6, 4];
console.log("stock purchased at price :" +price );
stock(price);

price = [7,6,4,3,1];
console.log("stock purchased at price :" +price );
stock(price);


function stock(stockPrice: number[]): void {

    for (let i = 0; i < stockPrice.length; i++) {
        let todaysPrice: number = stockPrice[i];
        let maxgain: number = stockPrice[i];
        let gainDay: number = i;

        for (let j = i + 1; j < stockPrice.length; j++) {

            if (maxgain < stockPrice[j]) {
                maxgain = stockPrice[j];
            }

        }
        if (maxgain > stockPrice[i])
            console.log(`Stock purchesed at day ${i + 1} with price : ${stockPrice[i]}  can get max profile if sell at price ${maxgain} with max gain ${maxgain - stockPrice[i]}`);
        else
            console.log(`Stock purchesed at day ${i + 1} with price : ${stockPrice[i]}  can not get max profile`);
    }
}
