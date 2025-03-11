const productQuantity = document.getElementById("product-quantity");
const totalAmount = document.getElementById("product-total-amount");
const addToCart = document.getElementById("add-to-cart");
let userCart = [];

let product = {
  index: 0,
  price: 0,
  quantity: 0,
  name: "Example Name",
  description: "Sample Description",
  mainImage: "Image Source",
};

productQuantity.firstElementChild.addEventListener("input", function () {
  if (productQuantity.firstElementChild.value <= 0) {
    return;
  }
  totalAmount.firstElementChild.value =
    "₱" + productQuantity.firstElementChild.value * 10;
});

addToCart.addEventListener("click", function (e) {
  e.preventDefault();

  productQuantity.firstElementChild.value;

  createNotification("Added to Cart Successfully!", "text-green");
});

function createNotification(text, color) {
  const ul = document.getElementById("notification");
  const notification = document.createElement("li");

  notification.className = color;
  notification.innerText = text;

  if (ul.firstChild) {
    ul.insertBefore(notification, ul.firstChild);
  } else {
    ul.appendChild(notification);
  }
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
