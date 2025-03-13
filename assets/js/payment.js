// DOM Elements
const paymentForm = document.getElementById("paymentForm");
const totalAmountPay = document.getElementById("total-amount-pay");

// Retrieve cart data from localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const shippingFee = 50;

// Function to calculate the total amount
function calculateTotalAmount() {
  const itemsTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return itemsTotal + shippingFee;
}

// Function to update the total amount on the payment page
function updateTotalAmount() {
  const totalAmount = calculateTotalAmount();
  totalAmountPay.textContent = `₱${totalAmount}`;
}

// Function to validate the payment form
function validatePaymentForm() {
  const cardName = document.getElementById("card-name").value.trim();
  const cardNumber = document.getElementById("card-number").value.trim();
  const expiration = document.getElementById("expiration").value.trim();
  const cvc = document.getElementById("cvc").value.trim();

  // Check if all fields are filled
  if (!cardName || !cardNumber || !expiration || !cvc) {
    alert("Please fill out all payment details.");
    return false;
  }

  // Validate card number (16 digits)
  const cardNumberPattern = /^\d{16}$/;
  if (!cardNumberPattern.test(cardNumber)) {
    alert("Please enter a valid 16-digit card number.");
    return false;
  }

  // Validate expiration date (MM/YY format)
  const expirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expirationPattern.test(expiration)) {
    alert("Please enter a valid expiration date (MM/YY).");
    return false;
  }

  // Validate CVC (3 digits)
  const cvcPattern = /^\d{3}$/;
  if (!cvcPattern.test(cvc)) {
    alert("Please enter a valid 3-digit CVC.");
    return false;
  }

  return true;
}

// Function to handle payment submission
function handlePayment(event) {
  event.preventDefault(); // Prevent form submission

  // Validate the payment form
  if (!validatePaymentForm()) {
    return;
  }

  // If validation passes, process the payment
  alert("Payment successful! Redirecting to confirmation page...");

  // Clear the cart
  localStorage.removeItem("cart");

  // Redirect to the confirmation page
  window.location.href = "payment_confirmation.html";
}

// Initialize the payment page
function initializePaymentPage() {
  // Update the total amount on the payment page
  updateTotalAmount();

  // Add event listener to the payment form
  paymentForm.addEventListener("submit", handlePayment);
}

// Initialize the payment page on load
window.addEventListener("load", initializePaymentPage);
