<<<<<<< HEAD
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
=======
// DOM Elements
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
const productsMain = document.querySelector(".products-main");
const searchInput = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button");
const headerButtons = document.getElementById("header-buttons");
const welcomeMessage = document.getElementById("welcome-message");
const loggedInUserSpan = document.getElementById("logged-in-user");

// Cart Data (Initialize from localStorage or empty array)
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Category Data
const categories = [
  { name: "All Products", icon: "fa-solid fa-basket-shopping" },
  { name: "Main Dishes & Soups", icon: "fa-solid fa-utensils" },
  { name: "Sizzling Plates", icon: "fa-solid fa-fire" },
  { name: "Silog Meals", icon: "fa-solid fa-egg" },
  { name: "Snacks & Noodles", icon: "fa-solid fa-bowl-rice" },
  { name: "Desserts", icon: "fa-solid fa-ice-cream" },
];

// Product Data
const savorPinoyMenu = [
  // (Main Dishes & Soups)
  {
    title: "Sinigang na Baboy",
    category: "Main Dishes & Soups",
    price: 180,
    description:
      "Tangy and savory pork soup with fresh vegetables and tamarind-based broth.",
    image: [
      "assets/img/sinigang1.png",
      "assets/img/sinigang2.png",
      "assets/img/sinigang3.png",
      "assets/img/sinigang4.png",
      "assets/img/sinigang5.png",
    ],
  },
  {
    title: "Adobong Manok at Baboy",
    category: "Main Dishes & Soups",
    price: 160,
    description:
      "Slow-cooked chicken and pork in a rich soy sauce, vinegar, and garlic blend.",
    image: [
      "assets/img/ad_manok1.png",
      "assets/img/ad_baboy2.png",
      "assets/img/ad_manok3.png",
      "assets/img/ad_baboy4.png",
      "assets/img/ad_manok5.png",
    ],
  },
  {
    title: "Bulalo",
    category: "Main Dishes & Soups",
    price: 250,
    description:
      "Beef shank soup with bone marrow, corn, and vegetables in a flavorful broth.",
    image: [
      "assets/img/bulalo1.png",
      "assets/img/bulalo2.png",
      "assets/img/bulalo3.png",
      "assets/img/bulalo4.png",
      "assets/img/bulalo5.png",
    ],
  },
  {
    title: "Kare-Kare",
    category: "Main Dishes & Soups",
    price: 200,
    description:
      "Thick peanut stew with oxtail, tripe, and vegetables, served with bagoong.",
    image: [
      "assets/img/karekare1.png",
      "assets/img/karekare2.png",
      "assets/img/karekare3.png",
      "assets/img/karekare4.png",
      "assets/img/karekare5.png",
    ],
  },
  {
    title: "Tinolang Manok",
    category: "Main Dishes & Soups",
    price: 150,
    description:
      "Chicken soup with ginger, papaya, and malunggay leaves for a comforting taste.",
    image: [
      "assets/img/tinola1.png",
      "assets/img/tinola2.png",
      "assets/img/tinola3.png",
      "assets/img/tinola4.png",
      "assets/img/tinola5.png",
    ],
  },

  // Sizzling Plates
  {
    title: "Sizzling Sisig",
    category: "Sizzling Plates",
    price: 180,
    description:
      "Crispy and flavorful chopped pork cheeks with onions, chili, and egg on a sizzling plate.",
    image: [
      "assets/img/sisig1.png",
      "assets/img/sisig2.png",
      "assets/img/sisig3.png",
      "assets/img/sisig4.png",
      "assets/img/sisig5.png",
    ],
  },
  {
    title: "Sizzling Tofu",
    category: "Sizzling Plates",
    price: 140,
    description:
      "Crispy tofu cubes cooked in a creamy, slightly spicy sauce with onions and bell peppers.",
    image: [
      "assets/img/tofu1.png",
      "assets/img/tofu2.png",
      "assets/img/tofu3.png",
      "assets/img/tofu4.png",
      "assets/img/tofu5.png",
    ],
  },
  {
    title: "Sizzling Bangus",
    category: "Sizzling Plates",
    price: 200,
    description:
      "Grilled milkfish served with a special soy sauce and calamansi mix.",
    image: [
      "assets/img/bangus1.png",
      "assets/img/bangus2.png",
      "assets/img/bangus3.png",
      "assets/img/bangus4.png",
      "assets/img/bangus5.png",
    ],
  },

  // Silog Meals
  {
    title: "Tapsilog",
    category: "Silog Meals",
    price: 140,
    description:
      "Marinated beef tapa with garlic rice and a sunny-side-up egg.",
    image: [
      "assets/img/tapsilog1.png",
      "assets/img/tapsilog2.png",
      "assets/img/tapsilog3.png",
      "assets/img/tapsilog4.png",
      "assets/img/tapsilog5.png",
    ],
  },
  {
    title: "Longsilog",
    category: "Silog Meals",
    price: 130,
    description: "Sweet and garlicky longganisa with garlic rice and egg.",
    image: [
      "assets/img/longsilog1.png",
      "assets/img/longsilog2.png",
      "assets/img/longsilog3.png",
      "assets/img/longsilog4.png",
      "assets/img/longsilog5.png",
    ],
  },
  {
    title: "Bangsilog",
    category: "Silog Meals",
    price: 150,
    description: "Fried boneless bangus served with garlic rice and egg.",
    image: [
      "assets/img/bangsilog1.png",
      "assets/img/bangsilog2.png",
      "assets/img/bangsilog3.png",
      "assets/img/bangsilog4.png",
      "assets/img/bangsilog5.png",
    ],
  },

  // Snacks & Noodles (Snacks & Noodles)
  {
    title: "Pancit Canton",
    category: "Snacks & Noodles",
    price: 120,
    description:
      "Savory stir-fried egg noodles with pork, shrimp, and vegetables.",
    image: [
      "assets/img/canton1.png",
      "assets/img/canton2.png",
      "assets/img/canton3.png",
      "assets/img/canton4.png",
      "assets/img/canton5.png",
    ],
  },
  {
    title: "Lomi",
    category: "Snacks & Noodles",
    price: 130,
    description:
      "Thick egg noodles in a rich, flavorful broth with pork, chicken, and egg.",
    image: [
      "assets/img/lomi1.png",
      "assets/img/lomi2.png",
      "assets/img/lomi3.png",
      "assets/img/lomi4.png",
      "assets/img/lomi5.png",
    ],
  },
  {
    title: "Arroz Caldo",
    category: "Snacks & Noodles",
    price: 110,
    description:
      "Ginger-infused rice porridge with chicken, topped with garlic, egg, and calamansi.",
    image: [
      "assets/img/arrozcaldo1.png",
      "assets/img/arrozcaldo2.png",
      "assets/img/arrozcaldo3.png",
      "assets/img/arrozcaldo4.png",
      "assets/img/arrozcaldo5.png",
    ],
  },

  // Desserts (Desserts)
  {
    title: "Halo-Halo",
    category: "Desserts",
    price: 140,
    description:
      "A colorful mix of shaved ice, sweetened fruits, beans, leche flan, and ube, topped with ice cream.",
    image: [
      "assets/img/halo-halo1.png",
      "assets/img/halo-halo2.png",
      "assets/img/halo-halo3.png",
      "assets/img/halo-halo4.png",
      "assets/img/halo-halo5.png",
    ],
  },
  {
    title: "Leche Flan",
    category: "Desserts",
    price: 100,
    description:
      "Creamy caramel custard dessert with a silky texture and rich flavor.",
    image: [
      "assets/img/lecheflan1.png",
      "assets/img/lecheflan2.png",
      "assets/img/lecheflan3.png",
      "assets/img/lecheflan4.png",
      "assets/img/lecheflan5.png",
    ],
  },
];

// Initialize the product grid with all products
window.addEventListener("load", () => {
  filterProducts("All Products");
  updateHeaderButtons();
  updateCartCount();
});

// Function to update the cart count in the header
function updateCartCount() {
  let count = 0;
  for (let x = 0; x < cartItems.length; x++) {
    count++;
  }
  cartBtnModal.innerHTML = `<i class="fa fa-shopping-cart"></i> Cart (${count})`;
}

// Filter and display products based on category or search query
function filterProducts(category, searchQuery = "") {
  productsMain.innerHTML = ""; // Clear the current products

  let filteredProducts = [];
  if (category === "All Products") {
    filteredProducts = savorPinoyMenu; // Show all products
  } else {
    filteredProducts = savorPinoyMenu.filter(
      (product) => product.category === category
    );
  }

  // Apply search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Display the filtered products
  filteredProducts.forEach((product, index) => {
    const productItem = document.createElement("li");
    productItem.classList.add("product");
    productItem.innerHTML = `
      <img src="${product.image[0]}" alt="Product Image" />
      <p class="category">${product.title}</p>
      <p class="rating">⭐⭐⭐⭐⭐ 36 Rating</p>
      <p class="price">₱${product.price}</p>
    `;

    // Add click event to each product
    productItem.addEventListener("click", () => {
      // Redirect to product view page with the product's index as the ID
      let id = "";
      savorPinoyMenu.forEach((data, index) => {
        if (product.title == data.title) {
          id = index;
        }
      });
      location.href = `product_view.html?id=${id}`;
    });

    productsMain.appendChild(productItem);
  });

  // Update the product count
  const productCount = document.querySelector(".product-grid h2");
  productCount.textContent = `${category} (${filteredProducts.length})`;
}

cartBtnModal.addEventListener("click", function () {
  location.href = "cart.html";
});

// Category click event
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
    filterProducts(selectedCategory, searchInput.value);
  });
});

// Search Functionality
searchInput.addEventListener("input", () => {
  const selectedCategory = document.querySelector(
    ".categories .category.selected"
  ).children[1].innerText;
  filterProducts(selectedCategory, searchInput.value);
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedCategory = document.querySelector(
    ".categories .category.selected"
  ).children[1].innerText;
  filterProducts(selectedCategory, searchInput.value);
});

// Change product view
function changeProductView(url) {
  if (!url) {
    return;
  } else {
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get("id");
    const product = document.querySelector(".product-body");
    const productTotalAmount = document.querySelector("#product-total-amount");

    const selectedProduct = savorPinoyMenu[parseInt(id)];

    product.children[0].innerText = selectedProduct.title;
    product.children[2].innerText = "₱" + selectedProduct.price;
    product.children[3].innerText = selectedProduct.description;
    productTotalAmount.children[0].value = "₱" + selectedProduct.price;
  }
}

changeProductView(window.location.search);

// Update header buttons based on authentication status
function updateHeaderButtons() {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    // User is logged in
    headerButtons.innerHTML = `
      <button class="logout-btn" onclick="logout()">Logout</button>
    `;
    welcomeMessage.style.display = "block";
    loggedInUserSpan.textContent = loggedInUser.firstName;
  } else {
    // User is not logged in
    headerButtons.innerHTML = `
      <a href="login.html" class="login-btn">Login</a>
      <a href="sign-up.html" class="signup-btn">Signup</a>
    `;
    welcomeMessage.style.display = "none";
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out.");
  updateHeaderButtons(); // Update the header buttons after logout
  window.location.href = "index.html"; // Refresh the page
>>>>>>> 6d160b7 (payment)
}
