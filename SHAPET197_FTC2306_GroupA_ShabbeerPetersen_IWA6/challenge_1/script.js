// Let's say you have two phone numbers.
const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// The '^' and '$' mean that the whole string should match the pattern.
// '[0-9]+' means one or more digits (0 to 9).
// 'test(primaryPhone)' checks if the primaryPhone matches the pattern.
const primaryValid = /^[0-9]+$/.test(primaryPhone);

// We use the same regular expression pattern to check the secondaryPhone.
const secondaryValid = /^[0-9]+$/.test(secondaryPhone);

// 'primaryValid' or 'secondaryValid' is displayed as either 'true' or 'false'.
console.log("Primary phone is valid numerical string:", primaryValid);

// Similarly, we show the result for the secondary phone.
console.log("Secondary phone is valid numerical string:", secondaryValid);
