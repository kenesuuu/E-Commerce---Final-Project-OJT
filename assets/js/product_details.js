// DOM Elements
const productImages = document.querySelector(".product-images img");
const productSubImages = document.querySelectorAll(".product-images ul li img");
const productTitle = document.querySelector(".product-body h3");
const productRating = document.querySelector(".product-body .rating");
const productPrice = document.querySelector(".product-body .price");
const productDescription = document.querySelector(".product-body .description");
const productQuantity = document.getElementById("quantity");
const productTotalAmount = document.getElementById("total-amount");
const addToCartButton = document.getElementById("add-to-cart");
const cartBtnModal = document.getElementById("cart-btn-modal");

// Cart Data (Initialize from localStorage or empty array)
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

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

cartBtnModal.addEventListener("click", function () {
  location.href = "cart.html";
});

// Function to display similar products based on category (max 5)
function displaySimilarProducts(category, currentProductId) {
  const similarProductsContainer = document.querySelector(
    ".similar-product-view .products"
  );
  similarProductsContainer.innerHTML = ""; // Clear previous content

  // Filter products by category, excluding the current product
  const similarProducts = Object.values(savorPinoyMenu)
    .filter(
      (product) =>
        product.category === category && product.title !== currentProductId
    )
    .slice(0, 5); // Limit to 5 products

  // Generate similar product items
  similarProducts.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <img src="${product.image[0]}" alt="${product.title}">
        <p class="category">${product.category}</p>
        <p class="rating">⭐⭐⭐⭐⭐ 30 Rating</p>
        <p class="price">₱${product.price}</p>
      `;

    // Add event listener to navigate to the selected similar product
    productElement.addEventListener("click", () => {
      let id = "";
      savorPinoyMenu.forEach((data, index) => {
        if (product.title === data.title) {
          id = index;
        }
      });
      window.location.href = `product_view.html?id=${id}`;
    });

    similarProductsContainer.appendChild(productElement);
  });
}

// Function to display product details
function displayProductDetails(productId) {
  const product = savorPinoyMenu[productId];
  if (product) {
    // Update main product image
    productImages.src = product.image[0];
    productImages.alt = product.title;

    // Update sub-images dynamically
    productSubImages.forEach((img, index) => {
      img.src = product.image[index + 1] || product.image[0]; // Default if not enough images
      img.alt = product.title;
    });

    // Image swapping functionality
    productSubImages.forEach((img) => {
      img.addEventListener("click", function () {
        let tempSrc = productImages.src;
        let tempAlt = productImages.alt;

        productImages.src = this.src;
        productImages.alt = this.alt;

        this.src = tempSrc;
        this.alt = tempAlt;
      });
    });

    // Update product details
    productTitle.textContent = product.title;
    productRating.textContent = "⭐⭐⭐⭐⭐ 30 Rating"; // Static rating for now
    productPrice.textContent = `₱${product.price}`;
    productDescription.textContent = product.description;
    productTotalAmount.value = `₱${
      parseInt(productQuantity.value) * parseInt(product.price)
    }`;

    // Update total amount based on quantity
    productQuantity.addEventListener("input", () => {
      const quantity = parseInt(productQuantity.value);
      const total = quantity * product.price;
      productTotalAmount.value = `₱${total}`;
    });

    // Add to cart functionality
    addToCartButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (!isUserLoggedIn()) {
        alert("You must be logged in to add items to the cart.");
        window.location.href = "login.html";
        return;
      }

      const quantity = parseInt(productQuantity.value);
      if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
      }

      // Check if the product already exists in the cart
      const existingItem = cartItems.find(
        (item) => item.title === product.title
      );

      if (existingItem) {
        existingItem.quantity += quantity; // Update quantity if the product is already in the cart
      } else {
        cartItems.push({
          title: product.title,
          price: product.price,
          quantity: quantity,
          image: product.image[0],
        });
      }

      // Save cart data to localStorage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Update the cart count in the header
      updateCartCount();

      // Show success message
      alert(`${quantity} x ${product.title} added to cart!`);
    });

    // Display similar products based on category
    displaySimilarProducts(product.category, product.title);
  } else {
    // Handle invalid product ID
    alert("Product not found!");
    window.location.href = "index.html"; // Redirect to home page
  }
}

// Get product ID from URL
function getProductIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Initialize product view
window.addEventListener("load", () => {
  const productId = getProductIdFromURL();
  if (productId !== null) {
    displayProductDetails(parseInt(productId));
  } else {
    window.location.href = "index.html"; // Redirect to home page
  }

  // Update the cart count on page load
  updateCartCount();
});
