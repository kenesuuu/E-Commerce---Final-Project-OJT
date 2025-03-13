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
    image: "assets/img/sinigang1.png",
  },
  {
    title: "Adobong Manok at Baboy",
    category: "Ulam at Sabaw",
    price: 160,
    description:
      "Slow-cooked chicken and pork in a rich soy sauce, vinegar, and garlic blend.",
    // image: "https://example.com/adobo.jpg",
  },
  {
    title: "Bulalo",
    category: "Ulam at Sabaw",
    price: 250,
    description:
      "Beef shank soup with bone marrow, corn, and vegetables in a flavorful broth.",
    // image: "https://example.com/bulalo.jpg",
  },
  {
    title: "Kare-Kare",
    category: "Ulam at Sabaw",
    price: 200,
    description:
      "Thick peanut stew with oxtail, tripe, and vegetables, served with bagoong.",
    // image: "https://example.com/karekare.jpg",
  },
  {
    title: "Tinolang Manok",
    category: "Ulam at Sabaw",
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

  // Meryenda (Snacks & Noodles)
  {
    title: "Pancit Canton",
    category: "Meryenda",
    price: 120,
    description:
      "Savory stir-fried egg noodles with pork, shrimp, and vegetables.",
    image: "https://example.com/pancitcanton.jpg",
  },
  {
    title: "Lomi",
    category: "Meryenda",
    price: 130,
    description:
      "Thick egg noodles in a rich, flavorful broth with pork, chicken, and egg.",
    image: "https://example.com/lomi.jpg",
  },
  {
    title: "Arroz Caldo",
    category: "Meryenda",
    price: 110,
    description:
      "Ginger-infused rice porridge with chicken, topped with garlic, egg, and calamansi.",
    image: "https://example.com/arrozcaldo.jpg",
  },

  // Panghimagas (Desserts)
  {
    title: "Halo-Halo",
    category: "Panghimagas",
    price: 140,
    description:
      "A colorful mix of shaved ice, sweetened fruits, beans, leche flan, and ube, topped with ice cream.",
    image: "https://example.com/halohalo.jpg",
  },
  {
    title: "Leche Flan",
    category: "Panghimagas",
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
