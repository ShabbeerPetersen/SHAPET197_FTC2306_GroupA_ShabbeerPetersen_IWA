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

// Check if the futureId exists using if else.
if (futureId > 8) {
  console.log(`ID ${futureId} not created yet`);
} else {
  console.log(holidays[futureId]);
}

// make a copy of Christmas item using object.assign
copied_id = Object.assign({}, holidays[christmas]);
copied_id.name = "X-mas";

// new variable containing christmas date.
correct_date = new Date(copied_id.date);
correct_date.setHours(0); // set hours to 0
correct_date.setMinutes(0); // set minutes to 0

is_earlier = correct_date.getTime() < copied_id.date.getTime(); // Boolean
console.log("New date is earlier:", is_earlier);

if (is_earlier) copied_id.date = correct_date;

console.log(
  "ID change:",
  holidays[christmas].id !== copied_id.id ? copied_id.id : false // shorthand if-else
);
console.log(
  "Name change:",
  holidays[christmas].name !== copied_id.name ? copied_id.name : false // shorthand if-else
);
// below is shorthand if-else and toLocaleDateString() function to format date
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

// target values in 'holidays' then .map() to iterate items
const holiday_dates = Object.values(holidays).map(
  (holiday) => new Date(holiday.date)
);

// Find the first(Math.min) and last(Math.max) dates
const first_holiday = new Date(Math.min(...holiday_dates));
const last_holiday = new Date(Math.max(...holiday_dates));

// Function to format a date as DD/MM/YYYY
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // adds 0 to dates
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Generate a random number to select a random holiday
const random_num = Math.floor(Math.random() * Object.keys(holidays).length);
const random_holiday = holidays[random_num];

// Format and output the first, last, and random holiday dates
console.log("First holiday:", formatDate(first_holiday));
console.log("Last holiday:", formatDate(last_holiday));
console.log("Random holiday:", formatDate(random_holiday.date));
