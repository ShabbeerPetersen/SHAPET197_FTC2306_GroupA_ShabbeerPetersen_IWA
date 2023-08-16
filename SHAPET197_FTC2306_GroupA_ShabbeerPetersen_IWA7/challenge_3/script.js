const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const leo_owed = parseFloat(leoBalance * -1).toFixed(2);
const sarah_owed = parseFloat(sarahBalance * -1).toFixed(2);
const leo = `${leoName} ${leoSurname.trimEnd()} (Owed R${leo_owed})`;
const sarah = `${sarahName.trimEnd()} ${sarahSurname} (Owed R${sarah_owed})`;
const total = `Total amount owed: ${parseFloat(leo_owed + sarah_owed).toFixed(
  2
)}`;

const result = `${leo}
${sarah}

${divider}
    ${total}
${divider}`;

console.log(result);
