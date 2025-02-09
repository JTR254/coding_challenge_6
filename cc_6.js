// Task 1 - Business Profit Calculation

function calculateProfit (costPrice, sellingPrice, unitsSold) { // creates function that calculates the profit
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`); // logs the Total Profit to the console
};

calculateProfit(20, 30, 100); // inserts the values into the function --- Output: $1000
calculateProfit(50, 70, 200); // inserts the values into the function --- Output: $4000

