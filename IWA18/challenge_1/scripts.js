import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";
import { createOrderData, updateDragging } from "./data.js";

let editedColumn = null;

/**
 * A handler that fires when a user drags over any element inside a column.
 * It determines which column the user is dragging over based on the
 * "data-area" attribute of the elements in the event's path.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  // Loop through path to find the column hovered over.
  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;

  // Update the dragging state and HTML to reflect the new column.
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
  editedColumn = column;
};

/**
 * A handler that fires when a drag operation starts.
 *
 * @param {Event} event
 */
/**
 * A handler that fires when a drag operation ends. It moves an order to
 * a new column if applicable.
 *
 * @param {Event} event
 */
const handleDragEnd = (event) => {
  event.preventDefault();
  const currentOrderId = event.target.closest(".order").getAttribute("data-id");
  const targetColumn = editedColumn;
  const orderedColumn = document.querySelector(
    `section[data-area="${targetColumn}"]`
  );

  if (currentOrderId && targetColumn) {
    // Move the order to the new column.
    moveToColumn(currentOrderId, targetColumn);
  }

  orderedColumn.style = "";
};

/**
 * A handler that toggles the help dialog's visibility.
 *
 * @param {Event} event
 */
const handleHelpToggle = (event) => {
  const isHelpOpen = html.help.overlay;
  isHelpOpen.open ? (isHelpOpen.open = false) : (isHelpOpen.open = true);
  html.other.add.focus();
};

/**
 * A handler that toggles the add order dialog's visibility and resets
 * the form if canceled.
 *
 * @param {Event} event
 */
const handleAddToggle = (event) => {
  const isAddOpen = html.add.overlay;
  if (isAddOpen.open) {
    isAddOpen.open = false;
    html.add.form.reset();
    html.other.add.focus();
  } else isAddOpen.open = true;
};

/**
 * A handler for the submission of the add order form.
 *
 * @param {Event} event
 */
const handleAddSubmit = (event) => {
  event.preventDefault();
  const table = html.add.table.value;
  const title = html.add.title.value;
  const column = "ordered";

  const orderData = createOrderData({ table, title, column });
  const orderElement = html.columns.ordered;

  // Append the new order HTML to the ordered column.
  orderElement.appendChild(createOrderHtml(orderData));
  html.add.overlay.open = false;
  html.add.form.reset();
};

/**
 * A handler that toggles the edit order dialog's visibility and populates
 * it with the order's data.
 *
 * @param {Event} event
 */
const handleEditToggle = (event) => {
  const targetOrder = event.target.closest(".order");
  const isEditOpen = html.edit.overlay;

  if (isEditOpen.open) {
    isEditOpen.open = false;
  }

  if (targetOrder) {
    isEditOpen.open = true;
    const orderId = targetOrder.getAttribute("data-id");
    const orderTitle = targetOrder.querySelector(".order__title").textContent;
    const orderTable = targetOrder.querySelector(
      ".order__value[data-order-table]"
    ).textContent;
    const orderedColumn = targetOrder.parentNode.getAttribute("data-column");

    // Populate the edit form with order data.
    html.edit.title.value = orderTitle;
    html.edit.table.value = orderTable;
    html.edit.id.value = orderId;
    html.edit.column.value = orderedColumn;
  }
};

/**
 * A handler that handles the submission of the edit order form.
 *
 * @param {Event} event
 */
const handleEditSubmit = (event) => {
  event.preventDefault();
  const currentOrderId = html.edit.id.value;
  const currentTitleElement = document.querySelector(
    `[data-id="${currentOrderId}"] .order__title`
  );
  const currentTableElement = document.querySelector(
    `[data-id="${currentOrderId}"] .order__value[data-order-table]`
  );

  const editedTitle = html.edit.title.value;
  const editedTable = html.edit.table.value;
  const editedColumn = html.edit.column.value;

  // Update the order, then move it to the new column.
  currentTitleElement.innerText = editedTitle;
  currentTableElement.innerText = editedTable;
  moveToColumn(currentOrderId, editedColumn);

  html.edit.overlay.open = false;
};

/**
 * A handler for the deletion of an order.
 *
 * @param {Event} event
 */
const handleDelete = (event) => {
  const currentOrderId = html.edit.id.value;
  const currentOrderElement = document.querySelector(
    `[data-id="${currentOrderId}"]`
  );

  // Remove the order element.
  currentOrderElement.remove();

  html.edit.overlay.open = false;
};

// Event listeners for different functions.

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

// Event listeners for drag-and-drop functionality.

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
