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

// Initialize cart
window.addEventListener("load", () => {
  // Update the cart count on page load
  updateCartCount();
});
