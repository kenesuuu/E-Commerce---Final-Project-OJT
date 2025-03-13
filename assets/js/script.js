// Redirection Code (Place this at the TOP)
document.querySelector('.signup-btn').addEventListener('click', function () {
  window.location.href = 'signup.html'; // Redirect to Signup Page
});

document.querySelector('.login-btn').addEventListener('click', function () {
  window.location.href = 'login.html'; // Redirect to Login Page
});

const allProducts = document.querySelectorAll(".products-main li");
const productQuantity = document.getElementById("product-quantity");
const totalAmount = document.getElementById("product-total-amount");
const addToCart = document.getElementById("add-to-cart");
const cartList = document.querySelector(".cart-list ul");
const cartBtnModal = document.getElementById("cart-btn-modal");
const productImages = document.querySelectorAll(".product-images li");
const returnToProductView = document.getElementById("return-product-view");
const cart = document.querySelector(".cart-section");
const category = document.querySelectorAll(".categories .category");

/* Category section */
const categories = [
  { name: "All Products", icon: "fa-solid fa-basket-shopping" },
  { name: "Main Dishes & Soups", icon: "fa-solid fa-utensils" },
  { name: "Sizzling Plates", icon: "fa-solid fa-fire" },
  { name: "Silog Meals", icon: "fa-solid fa-egg" },
  { name: "Snacks & Noodles", icon: "fa-solid fa-bowl-rice" },
  { name: "Desserts", icon: "fa-solid fa-ice-cream" },
];

/* Change all produccts as objects or arrrays */
let productLi = Object.values(allProducts);
/* This section are used for the images to change */
let productItems = Object.values(productImages);

/* Default menu savorPinoyMenu  */
const savorPinoyMenu = [
  // (Main Dishes & Soups)
  {
    title: "Sinigang na Baboy",
    category: "Main Dishes & Soups",
    price: 180,
    description:
      "Tangy and savory pork soup with fresh vegetables and tamarind-based broth.",
    image: "assets/img/sinigang1.png",
  },
  {
    title: "Adobong Manok at Baboy",
    category: "Main Dishes & Soups",
    price: 160,
    description:
      "Slow-cooked chicken and pork in a rich soy sauce, vinegar, and garlic blend.",
    // image: "https://example.com/adobo.jpg",
  },
  {
    title: "Bulalo",
    category: "Main Dishes & Soups",
    price: 250,
    description:
      "Beef shank soup with bone marrow, corn, and vegetables in a flavorful broth.",
    // image: "https://example.com/bulalo.jpg",
  },
  {
    title: "Kare-Kare",
    category: "Main Dishes & Soups",
    price: 200,
    description:
      "Thick peanut stew with oxtail, tripe, and vegetables, served with bagoong.",
    // image: "https://example.com/karekare.jpg",
  },
  {
    title: "Tinolang Manok",
    category: "Main Dishes & Soups",
    price: 150,
    description:
      "Chicken soup with ginger, papaya, and malunggay leaves for a comforting taste.",
    // image: "https://example.com/tinola.jpg",
  },

  // Sizzling Plates
  {
    title: "Sizzling Sisig",
    category: "Sizzling Plates",
    price: 180,
    description:
      "Crispy and flavorful chopped pork cheeks with onions, chili, and egg on a sizzling plate.",
    image: "https://example.com/sisig.jpg",
  },
  {
    title: "Sizzling Tofu",
    category: "Sizzling Plates",
    price: 140,
    description:
      "Crispy tofu cubes cooked in a creamy, slightly spicy sauce with onions and bell peppers.",
    image: "https://example.com/sizzlingtofu.jpg",
  },
  {
    title: "Sizzling Bangus",
    category: "Sizzling Plates",
    price: 200,
    description:
      "Grilled milkfish served with a special soy sauce and calamansi mix.",
    image: "https://example.com/bangus.jpg",
  },

  // Silog Meals
  {
    title: "Tapsilog",
    category: "Silog Meals",
    price: 140,
    description:
      "Marinated beef tapa with garlic rice and a sunny-side-up egg.",
    image: "https://example.com/tapsilog.jpg",
  },
  {
    title: "Longsilog",
    category: "Silog Meals",
    price: 130,
    description: "Sweet and garlicky longganisa with garlic rice and egg.",
    image: "https://example.com/longsilog.jpg",
  },
  {
    title: "Bangsilog",
    category: "Silog Meals",
    price: 150,
    description: "Fried boneless bangus served with garlic rice and egg.",
    image: "https://example.com/bangsilog.jpg",
  },

  // Snacks & Noodles (Snacks & Noodles)
  {
    title: "Pancit Canton",
    category: "Snacks & Noodles",
    price: 120,
    description:
      "Savory stir-fried egg noodles with pork, shrimp, and vegetables.",
    image: "https://example.com/pancitcanton.jpg",
  },
  {
    title: "Lomi",
    category: "Snacks & Noodles",
    price: 130,
    description:
      "Thick egg noodles in a rich, flavorful broth with pork, chicken, and egg.",
    image: "https://example.com/lomi.jpg",
  },
  {
    title: "Arroz Caldo",
    category: "Snacks & Noodles",
    price: 110,
    description:
      "Ginger-infused rice porridge with chicken, topped with garlic, egg, and calamansi.",
    image: "https://example.com/arrozcaldo.jpg",
  },

  // Desserts (Desserts)
  {
    title: "Halo-Halo",
    category: "Desserts",
    price: 140,
    description:
      "A colorful mix of shaved ice, sweetened fruits, beans, leche flan, and ube, topped with ice cream.",
    image: "https://example.com/halohalo.jpg",
  },
  {
    title: "Leche Flan",
    category: "Desserts",
    price: 100,
    description:
      "Creamy caramel custard dessert with a silky texture and rich flavor.",
    image: "https://example.com/lecheflan.jpg",
  },
];

/* This is for the cart section of the user*/
let userCart = [
  {
    title: "Sinigang na Baboy",
    price: 105,
    category: "Main Dishes & Soups",
    quantity: 2,
    description:
      "Tangy and savory pork soup with fresh vegetables and tamarind-based broth.",
    image: "",
  },
  {
    title: "Halo-halo",
    category: "Desserts",
    price: 99,
    quantity: 1,
    description:
      "A colorful mix of shaved ice, sweetened fruits, beans, leche flan, and ube, topped with ice cream.",
    image: "",
  },
];

let product = {
  title: "Example Name",
  price: 0,
  category: "Sample Category",
  quantity: 0,
  description: "Sample Description",
  image: "Image Source",
};

category.forEach((val, index) => {
  val.children[1].innerText = categories[index].name;

  val.addEventListener("click", function (e) {
    e.preventDefault();
    category.forEach((val) => {
      val.classList.remove("selected");
    });
    val.classList.add("selected");

    // Filter products based on the selected category
    const selectedCategory = categories[index].name;
    filterProducts(selectedCategory);
  });
});

/* Function to filter and display products */
function filterProducts(category) {
  const productsMain = document.querySelector(".products-main");
  productsMain.innerHTML = ""; // Clear the current products

  let filteredProducts = [];
  if (category === "All Products") {
    filteredProducts = savorPinoyMenu; // Show all products
  } else {
    filteredProducts = savorPinoyMenu.filter(
      (product) => product.category === category
    );
  }

  // Display the filtered products
  filteredProducts.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList.add("product");

    productItem.innerHTML = `
      <img src="${product.image}" alt="Product Image" />
      <p class="category">${product.title}</p>
      <p class="rating">⭐⭐⭐⭐⭐ 36 Rating</p>
      <p class="price">₱${product.price}</p>
    `;

    productsMain.appendChild(productItem);
  });

  // Update the product count
  const productCount = document.querySelector(".product-grid h2");
  productCount.textContent = `${category} (${filteredProducts.length})`;
}

/* Change Location to product view */
productLi.forEach((li, index) => {
  li.addEventListener("click", function () {
    location.href = "product_view.html?id=" + index;
  });
});

function changeProductView(url) {
  if (!url) {
    return;
  } else {
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get("id");
    const product = document.querySelector(".product-body");
    const productTotalAmount = document.querySelector("#product-total-amount");

    product.children[0].innerText = savorPinoyMenu[parseInt(id)].title;
    product.children[2].innerText = "₱" + savorPinoyMenu[parseInt(id)].price;
    product.children[3].innerText = savorPinoyMenu[parseInt(id)].description;
    productTotalAmount.children[0].value =
      "₱" + savorPinoyMenu[parseInt(id)].price;
  }
}

changeProductView(window.location.search);

/* Make the image change when click in the product view page */
productItems.forEach((li) => {
  li.addEventListener("click", () => {
    let tempSrc = document.querySelector(".product-images img");
    tempSrc.src = li.firstChild.src;
    li.src = tempSrc.src;
  });
});

productQuantity.firstElementChild.addEventListener("input", function () {
  const searchQuery = window.location.search;
  const urlParams = new URLSearchParams(searchQuery);
  const id = urlParams.get("id");

  if (productQuantity.firstElementChild.value <= 0) {
    return;
  }
  totalAmount.firstElementChild.value =
    "₱" +
    productQuantity.firstElementChild.value *
      savorPinoyMenu[parseInt(id)].price;
});

/* This section use to create or add items to cart */
addToCart.addEventListener("click", function (e) {
  e.preventDefault();
  const addItem = { ...product };
  const searchQuery = window.location.search;
  const urlParams = new URLSearchParams(searchQuery);
  const id = urlParams.get("id");
  let handler = false;

  addItem.title = savorPinoyMenu[parseInt(id)].title;
  addItem.price = savorPinoyMenu[parseInt(id)].price;
  addItem.description = savorPinoyMenu[parseInt(id)].description;
  addItem.quantity = productQuantity.firstElementChild.value;
  addItem.image = savorPinoyMenu[parseInt(id)].image;

  /* Hanling Errors or Cathing data if already exist */
  userCart.forEach((li) => {
    if (addItem.title == li.title) {
      handler = true;
    }
  });

  /* Update Cart total items */
  if (handler) {
    userCart[userCart.length - 1].quantity =
      parseInt(userCart[userCart.length - 1].quantity) +
      parseInt(productQuantity.firstElementChild.value);
  } else {
    userCart.push(addItem);
    cartBtnModal.innerHTML =
      "<i class='fa-solid fa-shopping-cart'></i> Cart (" +
      userCart.length +
      ")";
  }

  createNotification("Added to Cart Successfully!", "text-green");
});

/* This function is used to create notification with a parameter text and color */
function createNotification(text, color) {
  const ul = document.getElementById("notification");
  const notification = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");

  notification.className = color;
  notification.innerText = text;
  button.style.marginLeft = "1em";
  button.style.border = "none";
  button.style.cursor = "pointer";
  span.style.fontSize = "1.2rem";
  span.classList = "fa-solid fa-circle-xmark";
  span.style.color = "gray";

  button.appendChild(span);
  notification.appendChild(button);

  button.addEventListener("click", function () {
    notification.remove();
  });

  if (ul.firstChild) {
    ul.insertBefore(notification, ul.firstChild);
  } else {
    ul.appendChild(notification);
  }
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

/* Display Cart Modal */
cartBtnModal.addEventListener("click", function () {
  cart.style.display = "block";

  if (userCart.length == 0) {
    const li = document.createElement("li");
    li.innerText = "No Items in Cart";
    li.style.justifyContent = "center";
    li.style.fontSize = "1.3em";
    li.style.padding = "1em";
    li.style.color = "red";
    cartList.appendChild(li);
  } else {
    if (cartList.childElementCount) {
      return;
    } else {
      userCart.forEach((li, index) => {
        const addLi = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const h4 = document.createElement("h4");
        const price = document.createElement("p");
        const quantityForm = document.createElement("form");
        const quantityLabel = document.createElement("label");
        const quantityInput = document.createElement("input");
        const minusButton = document.createElement("button");
        const minusIcon = document.createElement("span");
        const plusButton = document.createElement("button");
        const plusIcon = document.createElement("span");
        const amountLabel = document.createElement("label");
        const amountInput = document.createElement("input");
        const amountForm = document.createElement("form");
        const closeForm = document.createElement("form");
        const closeButton = document.createElement("button");
        const closeIcon = document.createElement("span");

        //<img> element
        img.src = "assets/img/pork-sinigang.jpg";
        img.alt = "Product Main Image";

        //<h4> element
        h4.textContent = li.title;

        addLi.setAttribute("data-index", index);

        //<p> element with class "price"
        price.className = "price";
        price.textContent = "₱" + li.price;

        //first <form> element with class "product-quantity-form"
        quantityForm.className = "product-quantity-form";

        //<label> for quantity
        quantityLabel.htmlFor = "product-quantity-2";
        quantityLabel.textContent = "Quantity";

        //<input> for quantity
        quantityInput.type = "number";
        quantityInput.name = "product-quantity-2";
        quantityInput.id = "product-quantity-" + index;
        quantityInput.min = "1";
        quantityInput.value = li.quantity;

        //minus button
        minusButton.type = "submit";
        minusButton.id = "min-product-" + index;
        minusIcon.className = "fa-solid fa-minus";
        minusButton.appendChild(minusIcon);

        //plus button
        plusButton.type = "submit";
        plusButton.id = "min-product-" + index;
        plusIcon.className = "fa-solid fa-plus";
        plusButton.appendChild(plusIcon);

        // Append <h4> and <p> to <div>
        div.appendChild(h4);
        div.appendChild(price);

        // Append <label>, <input>, and buttons to the quantity form
        quantityForm.appendChild(quantityLabel);
        quantityForm.appendChild(quantityInput);
        quantityForm.appendChild(minusButton);
        quantityForm.appendChild(plusButton);

        //second <form> element with class "product-amount-form"
        amountForm.className = "product-amount-form";

        //<label> for total amount
        amountLabel.htmlFor = "total-amount-2";
        amountLabel.textContent = "Total Amount";

        //<input> for total amount
        amountInput.type = "text";
        amountInput.name = "total-amount-2";
        amountInput.id = "total-amount-" + index;
        amountInput.value = "₱" + parseInt(li.price) * parseInt(li.quantity);
        amountInput.disabled = true;

        //Add event of minus button
        minusButton.addEventListener("click", function (e) {
          e.preventDefault();
          if (quantityInput.value <= 1) {
            return;
          }
          quantityInput.value -= 1;
          amountInput.value = parseInt(quantityInput.value) * li.price;
        });

        //Add event of minus button
        plusButton.addEventListener("click", function (e) {
          e.preventDefault();
          if (quantityInput.value <= 1) {
            return;
          }
          quantityInput.value = parseInt(quantityInput.value) + 1;
          amountInput.value = parseInt(quantityInput.value) * li.price;
        });

        // Append <label> and <input> to the amount form
        amountForm.appendChild(amountLabel);
        amountForm.appendChild(amountInput);

        //third <form> element for the close button

        //close button
        closeButton.type = "submit";
        closeButton.className = "cart-close-button";
        closeIcon.className = "fa-solid fa-circle-xmark";
        closeButton.appendChild(closeIcon);

        closeButton.addEventListener("click", function () {
          userCart.forEach((cart, index) => {
            if (index == addLi.getAttribute("data-index")) {
              const title = cart.title;
              const price = cart.price;
              const quantity = cart.quantity;
              const description = cart.description;
              const image = cart.image;

              userCart[index].title = userCart[userCart.length - 1].title;
              userCart[index].price = userCart[userCart.length - 1].price;
              userCart[index].quantity = userCart[userCart.length - 1].quantity;
              userCart[index].description =
                userCart[userCart.length - 1].description;
              userCart[index].image = userCart[userCart.length - 1].image;

              userCart[userCart.length - 1].title = title;
              userCart[userCart.length - 1].price = price;
              userCart[userCart.length - 1].quantity = quantity;
              userCart[userCart.length - 1].description = description;
              userCart[userCart.length - 1].image = image;

              userCart.pop();
            }
          });
          if (userCart.length <= 0) {
            const li = document.createElement("li");
            li.innerText = "No Items in Cart";
            li.style.justifyContent = "center";
            li.style.fontSize = "1.3em";
            li.style.padding = "1em";
            li.style.color = "red";
            cartList.appendChild(li);
          }
          addLi.remove();
          cartBtnModal.innerHTML =
            "<i class='fa-solid fa-shopping-cart'></i> Cart (" +
            userCart.length +
            ")";
        });

        // Append the close button to the form
        closeForm.appendChild(closeButton);

        // Append all elements to the <li>
        addLi.appendChild(img);
        addLi.appendChild(div);
        addLi.appendChild(quantityForm);
        addLi.appendChild(amountForm);
        addLi.appendChild(closeForm);
        cartList.appendChild(addLi);
      });
    }
  }
});

returnToProductView.addEventListener("click", function (e) {
  e.preventDefault();
  cart.style.display = "none";
});

/* Display Cart Quantity */
if (!userCart.length == 0) {
  cartBtnModal.innerHTML =
    "<i class='fa-solid fa-shopping-cart'></i> Cart (" + userCart.length + ")";
}

/* For Authentication */
// Get modal elements
const signupModal = document.getElementById("signupModal");

// Get buttons to open modals
const signupBtn = document.querySelector(".signup-btn");

// Get links to switch between modals
const showLogin = document.getElementById("showLogin");

// Get close buttons
const closeModals = document.querySelectorAll(".close-modal");

// Open signup modal
signupBtn.addEventListener("click", () => {
  signupModal.style.display = "flex";
});

// Switch to login modal
showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupModal.style.display = "none";
  // Add logic to open the login modal if it exists
});

// Close modals
closeModals.forEach((btn) => {
  btn.addEventListener("click", () => {
    signupModal.style.display = "none";
  });
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === signupModal) {
    signupModal.style.display = "none";
  }
});

// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("signupFirstName").value;
  const lastName = document.getElementById("signupLastName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById(
    "signupConfirmPassword"
  ).value;

  // Basic validation
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Simulate signup logic (replace with actual API call)
  console.log("Signup with:", { firstName, lastName, email, password });
  alert("Signup successful!");
  signupModal.style.display = "none";
});
