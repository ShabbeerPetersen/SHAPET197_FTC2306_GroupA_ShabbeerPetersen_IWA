// scripts.js
const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

// Access the lists of numbers directly
const firstNumbers = data.lists[0][1];
const secondNumbers = data.lists[1][1];
const thirdNumbers = data.lists[2][1];

const result = [];
const extractBiggest = () => {
  // Get last elements from each array
  const firstLast = firstNumbers[firstNumbers.length - 1];
  const secondLast = secondNumbers[secondNumbers.length - 1];
  const thirdLast = thirdNumbers[thirdNumbers.length - 1];

  // Compare last elements and get biggest
  if (firstLast >= secondLast && firstLast >= thirdLast) {
    firstNumbers.pop();
    return firstLast;
  } else if (secondLast >= thirdLast) {
    secondNumbers.pop();
    return secondLast;
  } else {
    thirdNumbers.pop();
    return thirdLast;
  }
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
console.log(result);
