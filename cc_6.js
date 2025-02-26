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

// Task 4 - Subscription Pricing Model

function calculateSubsrciptionCost (plan, months, discount = 0) {
    if (plan === "Basic") { // if the plan is Basic, the cost will be $10 per month
        planCost = 10;
    }
    if (plan === "Premium") { // if the plan is Premium, the cost will be $20 per month
        planCost = 20;
    }
    if (plan === "Enterprise") { // if the plan is Enterprise, the cost will be $50 per month
        planCost = 50;
    }
    const totalCost = planCost * months - discount // this is the equation to determine the total cost
    return `Total Cost of Plan: $${totalCost}`

};

console.log (calculateSubsrciptionCost ("Basic", 6, 10)); // log the function and the inputs to the console --- Output: $50
console.log (calculateSubsrciptionCost ("Premium", 12, 0)); // log the function and the inputs to the console --- Output: $240

// Task 5 - Currency Conversion

function convertCurrency (amount, exchangeRate) { // declares function that converts currency
   const convertedAmount = amount * exchangeRate
   return `Converted Amount: $${convertedAmount}`
};

console.log (convertCurrency (100, 1.1)) // logs function and inputs to the console --- Output: $110.00000000001 for unknown reason
console.log (convertCurrency (250, .85)) // logs function and inputs to the console --- OUtput: $212.5

// Task 6 - Higher-Order Function for Bulk Orders

const orders = [450, 350, 600, 300, 600]; // creates an array of multiple orders
const applyBulkDiscount = (orders, discountFunction) => {
    return orders.map(discountFunction);
}; 

let discountedOrders = applyBulkDiscount (orders, amount => {
    if (amount > 500) { // if the amount is greater than 500, multiply it by .9
        return amount * .9;
    } else {
        return amount; // if the amount is not greater than 500, do not apply a discount
    }
});

console.log(`Discounted Orders: ${discountedOrders}`); // logs the discounted orders to the console

// Task 7 - Business Expense Tracker

const createExpenseTracker = () => { // creates a function that tracks the expenses
    let totalExpenses = 0;
    return (amount) => {
        totalExpenses += amount;// adds the total expenses to the next amount
        return `Total Expenses: $${totalExpenses}`; // returns the total expenses
    } 
};

let tracker = createExpenseTracker();

console.log(tracker(200)); // logs the function to the console
console.log(tracker(150)); // logs the function to the console

// Task 8 - Employee Promotion Evaluation

function calculateYearsToPromotion (employeeLevel) { // creates function that says if the employee level is 10 or above, output 0
    if (employeeLevel >= 10) {
        return `Years to Level 10: ${0}`;
    }
   
    let years = (10 - employeeLevel) * 2 // equation that calculates how many more years to reach level 10
   
    return years;
};

console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`) // logs the function to the console --- Output: Years to Level 10: 6
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`) // logs the function to the console --- Output: Years to Level 10: 10