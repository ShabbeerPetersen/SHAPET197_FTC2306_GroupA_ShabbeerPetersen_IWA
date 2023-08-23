const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Loop through books and get DOM elements

for (let i = 1; i <= 3; i++) {
  const bookStatus = document.querySelector(`#book${i} .status`);
  const reserveButton = document.querySelector(`#book${i} .reserve`);
  const checkoutButton = document.querySelector(`#book${i} .checkout`);
  const checkinButton = document.querySelector(`#book${i} .checkin`);

  const statusText = bookStatus.textContent.toLowerCase();
  const statusInfo = STATUS_MAP[statusText];

  if (statusInfo) {
    // Enable/Disable buttons based on STATUS_MAP properties
    reserveButton.disabled = !statusInfo.canReserve;
    checkoutButton.disabled = !statusInfo.canCheckout;
    checkinButton.disabled = !statusInfo.canCheckIn;

    // Apply grayscale filter to buttons based on availability
    reserveButton.style.filter = statusInfo.canReserve
      ? "none"
      : "grayscale(100%)";
    checkoutButton.style.filter = statusInfo.canCheckout
      ? "none"
      : "grayscale(100%)";
    checkinButton.style.filter = statusInfo.canCheckIn
      ? "none"
      : "grayscale(100%)";

    bookStatus.style.color = statusInfo.color;
  }
}
