// Task 1 - Business Profit Calculation

function calculateProfit (costPrice, sellingPrice, unitsSold) { // creates function that calculates the profit
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`); // logs the Total Profit to the console
};

calculateProfit(20, 30, 100); // inserts the values into the function --- Output: $1000
calculateProfit(50, 70, 200); // inserts the values into the function --- Output: $4000

// Task 2 - Sales Tax Reputation

const calculateSalesTax = function (amount, taxRate) { // creates function that calculates the Sales Tax
    const salesTax = Math.floor (amount * taxRate) // I used Math.floor here because the Output kept being incorrect and showing as 7.00000001
    console.log(`Sales Tax: $${salesTax}`) // logs the Sales Tax to the console
};

calculateSalesTax (100, .07); // inserts the values into the function --- Output: $7
calculateSalesTax (500, .1); // inserts the values into the function --- Output: $50

// Task 3 - Employee Bonus Calculation

const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = 0 
    if (performanceRating === "Excellent") { // if the performance rating is "Excellent", the bonus percentage is 20%
    bonusPercentage = .2;
}
    if (performanceRating === "Good") { // if the performance rating is "Excellent", the bonus percentage is 10%
    bonusPercentage = .1;
} 
    if (performanceRating === "Average") { // if the performance rating is "Excellent", the bonus percentage is 5%
    bonusPercentage = .05;
}

const bonus = salary * bonusPercentage
return `Bonus: $${bonus}`;
};

console.log(calculateBonus (5000, "Excellent")); // logs the function and the inputs to the console --- Output: $1000
console.log(calculateBonus (7000, "Good")); // logs the function and the inputs to the console --- Output: $700
