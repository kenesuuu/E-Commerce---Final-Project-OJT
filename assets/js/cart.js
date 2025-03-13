// DOM Elements
const cartItemsContainer = document.getElementById("cart-items");
const cartBtnModal = document.getElementById("cart-btn-modal");
const itemsTotalElement = document.getElementById("total-item-amount"); // Corrected selector
const totalAmountCart = document.getElementById("total-amount-cart");
// DOM Elements for Shipping Information
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const addressInput = document.getElementById("address");
const address2Input = document.getElementById("address2");
const stateInput = document.getElementById("state");
const cityInput = document.getElementById("city");
const zipCodeInput = document.getElementById("zipCode");
const proceedToCheckoutButton = document.querySelector(
  ".checkout-item input[type='submit']"
);

// Shipping fee (fixed value)
const shippingFee = 50;

// Cart Data (Initialize from localStorage or empty array)
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

/// Function to check if the user is logged in
function isUserLoggedIn() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return loggedInUser !== null;
}

// Function to update the cart count in the header
function updateCartCount() {
  let count = 0;
  for (let x = 0; x < cartItems.length; x++) {
    count++;
  }
  cartBtnModal.innerHTML = `<i class="fa fa-shopping-cart"></i> Cart (${count})`;
}

// Function to validate shipping information
function validateShippingInformation() {
  // Check if required fields are empty
  if (
    !firstNameInput.value.trim() ||
    !lastNameInput.value.trim() ||
    !addressInput.value.trim() ||
    !cityInput.value.trim() ||
    !stateInput.value.trim() ||
    !zipCodeInput.value.trim()
  ) {
    alert("Please fill out all required shipping information fields.");
    return false;
  }

  // Additional validation
  const zipCodePattern = /^\d{4}$/; // Example: 4-digit zip code
  if (!zipCodePattern.test(zipCodeInput.value.trim())) {
    alert("Please enter a valid 4-digit zip code.");
    return false;
  }

  return true;
}

// Function to handle the checkout process
function handleCheckout() {
  if (!isUserLoggedIn()) {
    alert("You must be logged in to proceed to checkout.");
    window.location.href = "login.html";
    return;
  }

  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items to proceed to checkout.");
    return;
  }

  // Validate shipping information
  if (!validateShippingInformation()) {
    return;
  }

  // If validation passes, proceed to checkout
  alert("Proceeding to checkout...");
  // Redirect to a confirmation page or process the order
  window.location.href = "checkout_confirmation.html"; // Example: Redirect to a confirmation page
}

// Add event listener to the Proceed to Checkout button
proceedToCheckoutButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  handleCheckout();
});

cartBtnModal.addEventListener("click", function () {
  location.href = "cart.html";
});

// Function to calculate and render the order summary
function renderOrderSummary() {
  // Calculate the total price of all items in the cart
  const itemsTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate the total amount (items total + shipping fee)
  const totalAmount = itemsTotal + shippingFee;

  // Update the DOM elements with the calculated values
  itemsTotalElement.innerText = `₱${itemsTotal}`;
  totalAmountCart.innerText = `₱${totalAmount}`;
}

// Function to render cart items
function renderCartItems() {
  // Clear the cart items container
  cartItemsContainer.innerHTML = "";

  // Loop through the cart items and create HTML for each item
  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div>
          <h4>${item.title}</h4>
          <p class="price">₱${item.price}</p>
        </div>
        <form class="product-quantity-form" data-index="${index}">
          <label for="product-quantity">Quantity</label>
          <input type="number" name="product-quantity" id="product-quantity" min="1" value="${
            item.quantity
          }">
          <button type="button" class="quantity-minus"><span class="fa-solid fa-minus"></span></button>
          <button type="button" class="quantity-plus"><span class="fa-solid fa-plus"></span></button>
        </form>
        <form class="product-amount-form">
          <label for="total-amount">Total Amount</label>
          <input type="text" name="total-amount" id="total-amount" value="₱${
            item.price * item.quantity
          }" disabled>
        </form>
        <form>
          <button type="button" class="cart-close-button" data-index="${index}"><span class="fa-solid fa-circle-xmark"></span></button>
        </form>
      `;

    // Append the cart item to the container
    cartItemsContainer.appendChild(cartItem);
  });

  // Add event listeners for quantity updates and item removal
  addCartItemEventListeners();

  // Update the order summary
  renderOrderSummary();
}

// Function to add event listeners for quantity updates and item removal
function addCartItemEventListeners() {
  // Quantity minus button
  const minusButtons = document.querySelectorAll(".quantity-minus");
  minusButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.closest("form").dataset.index;
      updateCartItemQuantity(index, -1);
    });
  });

  // Quantity plus button
  const plusButtons = document.querySelectorAll(".quantity-plus");
  plusButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.closest("form").dataset.index;
      updateCartItemQuantity(index, 1);
    });
  });

  // Remove item button
  const removeButtons = document.querySelectorAll(".cart-close-button");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.closest("button").dataset.index;
      removeCartItem(index);
    });
  });
}

// Function to update the quantity of a cart item
function updateCartItemQuantity(index, change) {
  const item = cartItems[index];
  item.quantity += change;

  // Ensure quantity is at least 1
  if (item.quantity < 1) {
    item.quantity = 1;
  }

  // Update the cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Re-render the cart items
  renderCartItems();

  // Update the cart count in the header
  updateCartCount();

  // Update the order summary
  renderOrderSummary();
}

// Function to remove a cart item
function removeCartItem(index) {
  cartItems.splice(index, 1);

  // Update the cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Re-render the cart items
  renderCartItems();

  // Update the cart count in the header
  updateCartCount();

  // Update the order summary
  renderOrderSummary();
}

// Initialize cart rendering on page load
window.addEventListener("load", () => {
  renderCartItems();
  updateCartCount();
  renderOrderSummary();
});
