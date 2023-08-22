// Iterate over each order section
for (let orderNumber = 1; orderNumber <= 3; orderNumber++) {
  const orderRoot = document.querySelector(`[data-key="order${orderNumber}"]`);
  const orderBiscuits = orderRoot.querySelector(".biscuits .count");
  const orderDonuts = orderRoot.querySelector(".donuts .count");
  const orderPancakes = orderRoot.querySelector(".pancakes .count");
  const orderStatus = orderRoot.querySelector(".status dd");

  // Updating values for the current order
  orderBiscuits.textContent = orderRoot.getAttribute("data-biscuits");
  orderDonuts.textContent = orderRoot.getAttribute("data-donuts");
  orderPancakes.textContent = orderRoot.getAttribute("data-pancakes");
  orderStatus.textContent =
    orderRoot.getAttribute("data-delivered") === "true"
      ? "Delivered"
      : "Pending";
}
