// Messages displayed to users upon certain conditions
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";

// User info
const _area = "RSA"; // Country, 'RSA' for South Africa
const currency = "R"; // Currency, 'R' for South African Rand
const customers = 1; // Number of customers

let shipping = 0; // defining shipping

// Check where the user is located
if (_area === "RSA") {
  shipping = 400; // RSA shipping cost
} else if (_area === "NAM") {
  shipping = 600; // NAM shipping cost
} else {
  shipping = 800; // Other countries' shipping cost
}

// Items you want to buy
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0; // No shirts chosen
const batteries = 35 * 2;
const pens = 5 * 0; // No pens chosen

// Calculate the total cost of items
const totalCost = shoes + toys + shirts + batteries + pens;

// Apply free shipping if conditions are met
if (totalCost >= 1000 && customers === 1) {
  if (_area === "RSA" || _area === "NAM") {
    shipping = 0;
  }
}

// Check if you need to show any warnings or prices
if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
} else if (_area === "NK") {
  console.log(BANNED_WARNING);
} else {
  console.log("Price:", currency, totalCost + shipping);
}
