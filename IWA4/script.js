let date = 2050; // declared with 'let' instead of 'const' to allow reassign.
const user = "student"; // named variable 'user' because 'status' deprecated
let count = 0; // declared with 'let' instead of 'const' to adding to value

// Changed all single quotes to double quotes, and all equal-to's to triple equal(equality operator)
if (date === 2050) {
  console.log("January", "New Year's Day");
  console.log("March", "Human Rights Day");
  date = "April";
  console.log(date, "Family Day");
  console.log(date, "Freedom Day");
  count += 4; //simplified from "let count = count + 4"

  if (user === "student") {
    console.log("June", "Youth Day");
    count += 1; //simplified from "let count = count + 1"
  }

  console.log("August", "Women's Day");
  console.log("September", "Heritage Day");
  date = "December";
  console.log(date, "Day of Reconciliation");
  count += 3; //simplified from "let count = count + 3"

  if (user === "parent") {
    console.log(date, "Christmas Day");
    count += 1; //simplified from "let count = count + 1"
  }

  console.log(date, "Day of Goodwill");
  count += 1; //simplified from "let count = count + 1"
}

console.log("Your status is:", user);
console.log("The year is:", date);
console.log("The total holidays is:", count);
