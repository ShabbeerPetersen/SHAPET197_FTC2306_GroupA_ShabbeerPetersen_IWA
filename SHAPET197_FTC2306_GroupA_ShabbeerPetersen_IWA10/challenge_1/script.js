const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

// Check if the futureId exists in the holidays object
if (futureId > 8) {
  console.log(`ID ${futureId} not created yet`);
} else {
  console.log(holidays[futureId]);
}

// make a copy of Christmas item
copied_id = Object.assign({}, holidays[christmas]);
copied_id.name = "X-mas";

correctDate = new Date(copied_id.date);
correctDate.setHours(0);
correctDate.setMinutes(0);

isEarlier = correctDate.getTime() < copied_id.date.getTime();
console.log("New date is earlier:", isEarlier);
if (isEarlier) copied_id.date = correctDate;

console.log(
  "ID change:",
  holidays[christmas].id !== copied_id.id ? copied_id.id : false
);
console.log(
  "Name change:",
  holidays[christmas].name !== copied_id.name ? copied_id.name : false
);
console.log(
  "Date change:",
  holidays[christmas].date !== copied_id.date
    ? copied_id.date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : false
);

// Find the first and last holiday dates in the year
const holidayDates = Object.values(holidays).map(
  (holiday) => new Date(holiday.date)
);
const firstHoliday = new Date(Math.min(...holidayDates));
const lastHoliday = new Date(Math.max(...holidayDates));

// Function to format a date as DD/MM/YYYY
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Format and output the first, last, and random holiday dates
console.log("First holiday:", formatDate(firstHoliday));
console.log("Last holiday:", formatDate(lastHoliday));

// Generate a random index to select a random holiday
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
console.log("Random holiday:", formatDate(randomHoliday.date));
