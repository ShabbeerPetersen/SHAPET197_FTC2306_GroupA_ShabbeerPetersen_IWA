import {
  TABLES,
  COLUMNS,
  state,
  createOrderData,
  updateDragging,
} from "./data.js";
import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";

// Event handler for when a user drags over an element inside a column
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  // Loop through path to find column hovered
  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

let beingDragged;
let id;

const handleDragStart = (event) => {
  // Get the element being dragged
  beingDragged = event.target.closest(".order");
  state.dragging.source = state.dragging.over;
  id = beingDragged.dataset.id;
};

const handleDragEnd = (event) => {
  event.preventDefault();
  const move = state.dragging.over;

  // Move the dragged element to the new column
  moveToColumn(id, move);
  updateDraggingHtml({ over: move }); // changed 'column' to 'move'
};

// Bring up help window
const handleHelpToggle = (event) => {
  const { target } = event;
  if (target == html.other.help) {
    html.help.overlay.showModal();
  }
  if (target == html.help.cancel) {
    html.help.overlay.close();
  }
};

// Brings up add order window
const handleAddToggle = (event) => {
  const { target } = event;
  if (target == html.other.add) {
    html.add.overlay.showModal();
  }
  if (target == html.add.cancel) {
    html.add.overlay.close();
  }
};

const handleAddSubmit = (event) => {
  event.preventDefault();
  const title = event.target.elements.title.value;
  const table = event.target.elements.table.value;

  // Create order data and add it to the state
  const order = createOrderData({ title, table, column: COLUMNS[0] });
  state.orders[order.id] = order;

  // Create HTML for the order and append it to the column container
  const element = createOrderHtml(order);
  const columnContainer = document.querySelector(
    `[data-column="${COLUMNS[0]}"]`
  );
  columnContainer.appendChild(element);

  html.add.overlay.close();
};

// Bring up edit order window
const handleEditToggle = (event) => {
  const { target } = event;
  const editOpen = document.querySelector(".order");
  console.log(target);
  if (target == editOpen) {
    html.edit.overlay.showModal();
  }
  if (target == html.edit.cancel) {
    html.edit.overlay.close();
  }
};
// Edit existing order
const handleEditSubmit = (event) => {
  event.preventDefault();
  const order = document.querySelector(".order");
  order.remove();
  const data = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    column: html.edit.column.value,
  };

  // Create order data and HTML, then append to column
  const orderData = createOrderData(data);
  const orderHtml = createOrderHtml(orderData);
  const area = document.querySelector(`[data-area="${data.column}"]`);
  const column = area.querySelector(`[data-column="${data.column}"]`);
  column.appendChild(orderHtml);

  html.edit.overlay.close();
};

// for deleting order
const handleDelete = (event) => {
  const { target } = event;
  if (target == html.edit.delete) {
    document.querySelector(".order").remove();
  }
  html.edit.overlay.close();
};

// Event listeners for all actions

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

// Event listeners for dragging

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
