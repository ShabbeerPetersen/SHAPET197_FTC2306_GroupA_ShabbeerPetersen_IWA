const nickname = "Timmy";
const firstname = "Timothy";

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
