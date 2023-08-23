// Iterate over each order instead of hard coding individual orders.
for (let orderNumber = 1; orderNumber <= 3; orderNumber++) {
  const order_root = document.querySelector(`[data-key="order${orderNumber}"]`);
  const order_biscuits = order_root.querySelector(".biscuits .count");
  const order_donuts = order_root.querySelector(".donuts .count");
  const order_pancakes = order_root.querySelector(".pancakes .count");
  const order_status = order_root.querySelector(".status dd");

  // Updating values for the current order
  order_biscuits.textContent = order_root.getAttribute("data-biscuits");
  order_donuts.textContent = order_root.getAttribute("data-donuts");
  order_pancakes.textContent = order_root.getAttribute("data-pancakes");
  order_status.textContent =
    order_root.getAttribute("data-delivered") === "true"
      ? "Delivered"
      : "Pending"; // shorthand if-else
}
