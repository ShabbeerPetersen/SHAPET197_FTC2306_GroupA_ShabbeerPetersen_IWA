// expenses:
const rent = 400;
const tax = "8%";
const food = 51.7501;
const transport = 10.2;

// salary:
const salary = 800;

// time of the day:
const hourOfDay = 0;
const minuteOfDay = 0;

// if the time (both hourOfDay and minuteOfDay are defined) and it's midnight:
if (
  hourOfDay !== undefined &&
  minuteOfDay !== undefined &&
  hourOfDay === 0 &&
  minuteOfDay === 0
) {
  const taxAsDecimal = parseFloat(tax) / 100; // Convert percentage to a decimal number

  // calculate salary after deducting the tax:
  const startingAfterTax = salary * (1 - taxAsDecimal);

  // calculate remaining balance after expenses:
  const balance = startingAfterTax - transport - food - rent;

  // display balance, rounded to 2 decimal places, with the 'R' symbol:
  console.log("Your balance for the day is: R", balance.toFixed(2));
} else {
  // If it's not midnight or the time is unknown, no calculations are done.
  console.log("It's not the right time to calculate your balance.");
}
