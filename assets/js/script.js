const allProducts = document.querySelectorAll(".products-main li");
const productQuantity = document.getElementById("product-quantity");
const totalAmount = document.getElementById("product-total-amount");
const addToCart = document.getElementById("add-to-cart");
const cartList = document.querySelector(".cart-list ul");
const cartBtnModal = document.getElementById("cart-btn-modal");
const productImages = document.querySelectorAll(".product-images li");

/* Change all produccts as objects or arrrays */
let productLi = Object.values(allProducts);
/* This section are used for the images to change */
let productItems = Object.values(productImages);

/* Default menu savorPinoyMenu  */
const savorPinoyMenu = [
  // Ulam at Sabaw (Main Dishes & Soups)
  {
    title: "Sinigang na Baboy",
    category: "Ulam at Sabaw",
    price: 180,
    description:
      "Tangy and savory pork soup with fresh vegetables and tamarind-based broth.",
    image: ["assets/img/sinigang1.png", "assets/img/sinigang2.png", "assets/img/sinigang3.png", "assets/img/sinigang4.png", "assets/img/sinigang5.png"],
  },
  {
    title: "Adobong Manok at Baboy",
    category: "Ulam at Sabaw",
    price: 160,
    description:
      "Slow-cooked chicken and pork in a rich soy sauce, vinegar, and garlic blend.",
    image: ["assets/img/ad_manok1.png", "assets/img/ad_baboy2.png", "assets/img/ad_manok3.png", "assets/img/ad_baboy4.png", "assets/img/ad_manok5.png"],
  },
  {
    title: "Bulalo",
    category: "Ulam at Sabaw",
    price: 250,
    description:
      "Beef shank soup with bone marrow, corn, and vegetables in a flavorful broth.",
    image: ["assets/img/bulalo1.png", "assets/img/bulalo2.png", "assets/img/bulalo3.png", "assets/img/bulalo4.png", "assets/img/bulalo5.png"],
  },
  {
    title: "Kare-Kare",
    category: "Ulam at Sabaw",
    price: 200,
    description:
      "Thick peanut stew with oxtail, tripe, and vegetables, served with bagoong.",
    image: ["assets/img/karekare1.png", "assets/img/karekare2.png", "assets/img/karekare3.png", "assets/img/karekare4.png", "assets/img/karekare5.png"],
  },
  {
    title: "Tinolang Manok",
    category: "Ulam at Sabaw",
    price: 150,
    description:
      "Chicken soup with ginger, papaya, and malunggay leaves for a comforting taste.",
    image: ["assets/img/tinola1.png", "assets/img/tinola2.png", "assets/img/tinola3.png", "assets/img/tinola4.png", "assets/img/tinola5.png"],
  },

  // Sizzling Plates
  {
    title: "Sizzling Sisig",
    category: "Sizzling Plates",
    price: 180,
    description:
      "Crispy and flavorful chopped pork cheeks with onions, chili, and egg on a sizzling plate.",
    image: ["assets/img/sisig1.png", "assets/img/sisig2.png", "assets/img/sisig3.png", "assets/img/sisig4.png", "assets/img/sisig5.png"],
  },
  {
    title: "Sizzling Tofu",
    category: "Sizzling Plates",
    price: 140,
    description:
      "Crispy tofu cubes cooked in a creamy, slightly spicy sauce with onions and bell peppers.",
    image: ["assets/img/tofu1.png", "assets/img/tofu2.png", "assets/img/tofu3.png", "assets/img/tofu4.png", "assets/img/tofu5.png"],
  },
  {
    title: "Sizzling Bangus",
    category: "Sizzling Plates",
    price: 200,
    description:
      "Grilled milkfish served with a special soy sauce and calamansi mix.",
    image: ["assets/img/bangus1.png", "assets/img/bangus2.png", "assets/img/bangus3.png", "assets/img/bangus4.png", "assets/img/bangus5.png"],
  },

  // Silog Meals
  {
    title: "Tapsilog",
    category: "Silog Meals",
    price: 140,
    description:
      "Marinated beef tapa with garlic rice and a sunny-side-up egg.",
    image: ["assets/img/tapsilog1.png", "assets/img/tapsilog2.png", "assets/img/tapsilog3.png", "assets/img/tapsilog4.png", "assets/img/tapsilog5.png"],
  },
  {
    title: "Longsilog",
    category: "Silog Meals",
    price: 130,
    description: "Sweet and garlicky longganisa with garlic rice and egg.",
    image: ["assets/img/longsilog1.png", "assets/img/longsilog2.png", "assets/img/longsilog3.png", "assets/img/longsilog4.png", "assets/img/longsilog5.png"],
  },
  {
    title: "Bangsilog",
    category: "Silog Meals",
    price: 150,
    description: "Fried boneless bangus served with garlic rice and egg.",
    image: ["assets/img/bangsilog1.png", "assets/img/bangsilog2.png", "assets/img/bangsilog3.png", "assets/img/bangsilog4.png", "assets/img/bangsilog5.png"],
  },

  // Meryenda (Snacks & Noodles)
  {
    title: "Pancit Canton",
    category: "Meryenda",
    price: 120,
    description:
      "Savory stir-fried egg noodles with pork, shrimp, and vegetables.",
    image: ["assets/img/canton1.png", "assets/img/canton2.png", "assets/img/canton3.png", "assets/img/canton4.png", "assets/img/canton5.png"],
  },
  {
    title: "Lomi",
    category: "Meryenda",
    price: 130,
    description:
      "Thick egg noodles in a rich, flavorful broth with pork, chicken, and egg.",
    image: ["assets/img/lomi1.png", "assets/img/lomi2.png", "assets/img/lomi3.png", "assets/img/lomi4.png", "assets/img/lomi5.png"],
  },
  {
    title: "Arroz Caldo",
    category: "Meryenda",
    price: 110,
    description:
      "Ginger-infused rice porridge with chicken, topped with garlic, egg, and calamansi.",
    image: ["assets/img/arrozcaldo1.png", "assets/img/arrozcaldo2.png", "assets/img/arrozcaldo3.png", "assets/img/arrozcaldo4.png", "assets/img/arrozcaldo5.png"],
  },

  // Panghimagas (Desserts)
  {
    title: "Halo-Halo",
    category: "Panghimagas",
    price: 140,
    description:
      "A colorful mix of shaved ice, sweetened fruits, beans, leche flan, and ube, topped with ice cream.",
    image: ["assets/img/halo-halo1.png", "assets/img/halo-halo2.png", "assets/img/halo-halo3.png", "assets/img/halo-halo4.png", "assets/img/halo-halo5.png"],
  },
  {
    title: "Leche Flan",
    category: "Panghimagas",
    price: 100,
    description:
      "Creamy caramel custard dessert with a silky texture and rich flavor.",
    image: ["assets/img/lecheflan1.png", "assets/img/lecheflan2.png", "assets/img/lecheflan3.png", "assets/img/lecheflan4.png", "assets/img/lecheflan5.png"],
  },
];

/* This is for the cart section of the user*/
let userCart = [
  {
    title: "Sinigang na Baboy",
    price: 105,
    category: "Ulam at Sabaw",
    quantity: 2,
    description:
      "Tangy and savory pork soup with fresh vegetables and tamarind-based broth.",
    image: "",
  },
  {
    title: "Halo-halo",
    category: "Panghimagas",
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
  const mainContainer = document.querySelector(".main-container");
  const section = document.createElement("section");
  section.style.position = "absolute";
  section.style.height = "100vh";
  section.style.alignContent = "center";
  section.style.textAlign = "center";
  section.style.zIndex = "99";
  section.style.filter = "blur(3em)";
  mainContainer.appendChild(section);
});

/* Display Cart Quantity */
if (!userCart.length == 0) {
  cartBtnModal.innerHTML =
    "<i class='fa-solid fa-shopping-cart'></i> Cart (" + userCart.length + ")";
}

// if (cartList.childElementCount == 0) {
//   const li = document.createElement("li");
//   li.innerText = "No Items in Cart";
//   li.style.justifyContent = "center";
//   li.style.fontSize = "1.3em";
//   li.style.padding = "1em";
//   li.style.color = "red";
//   cartList.appendChild(li);
// }
