const nickname = "Timmy";
const firstname = "Timothy";

// using if else to output depending on condition.
if (
  (nickname != "" && firstname != "") ||
  (nickname != "" && firstname == "")
) {
  console.log(`Good Morning, ${nickname} !`);
} else if (nickname == "" && firstname != "") {
  console.log(`Good Morning, ${firstname} !`);
} else {
  console.log("Good Morning!");
}
