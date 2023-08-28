let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

// function increases value of 'calculated' at every output
const logCalc = () => {
  const isString = typeof calculated === typeof "string";
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  calculated = calculatedAsNumber + 1;
};

//function checks value of 'calculated' and alters variables
const calcUser = () => {
  logCalc();
  if (calculated > 2) user = "John";
  if (calculated > 2) state = "requesting";
  if (calculated > 3) state = "idle";
};

// function checks if user is defined and state is 'requesting'
const checkUser = () => {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};
// Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
