// Welcome to our online store!

// Messages displayed to users upon certain conditions
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";

// User information
const location = "RSA"; // Country, 'RSA' for South Africa
const currency = "R"; // Currency, 'R' for South African Rand
const customers = 1; // Number of customers

let shipping = 0; // defining shipping

// Check where the user is located
if (location === "RSA") {
  shipping = 400; // South African shipping cost
} else if (location === "NAM") {
  shipping = 600; // Namibian shipping cost
} else {
  shipping = 800; // Other countries' shipping cost
}

// Items you want to buy
const shoes = 300 * 1;
const toys = 100 * 5; //
const shirts = 150 * 0; // You didn't choose any shirts
const batteries = 35 * 2;
const pens = 5 * 0; // You didn't choose any pens

// Calculate the total cost of your items
const totalCost = shoes + toys + shirts + batteries + pens;

// Apply free shipping if conditions are met
if (totalCost >= 1000 && customers === 1) {
  if (location === "RSA" || location === "NAM") {
    shipping = 0;
  }
}

// Check if you need to show any warnings or prices
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
} else if (location === "NK") {
  console.log(BANNED_WARNING);
} else {
  console.log("Price:", currency, totalCost + shipping);
}
