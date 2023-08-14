const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// The '^' and '$' mean that the whole string should match the pattern.
// '[0-9]+' means one or more digits (0 to 9).
// 'test' function checks if the variable matches the pattern.
const primaryValid = /^[0-9]+$/.test(primaryPhone);

const secondaryValid = /^[0-9]+$/.test(secondaryPhone);

// 'primaryValid' or 'secondaryValid' is displayed as either 'true' or 'false'.
console.log("Primary phone is valid numerical string:", primaryValid);

console.log("Secondary phone is valid numerical string:", secondaryValid);
