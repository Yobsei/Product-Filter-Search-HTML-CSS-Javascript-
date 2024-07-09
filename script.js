let products = {
  data: [
    {
      productName: "Bycicle White",
      category: "Bycicle",
      price: "3000",
      image: "img/Bycicle.jpg",
    },
    {
      productName: "Yellow Ferrari",
      category: "Ferrari",
      price: "150000",
      image: "img/Ferrari1.jpg",
    },
    {
      productName: "Red Ferrari",
      category: "Ferrari",
      price: "150000",
      image: "img/Ferrari2.jpg",
    },
    {
      productName: "Harley Davidson Black",
      category: "Harley",
      price: "70000",
      image: "img/Harley_Davidson1.jpg",
    },
    {
      productName: "Harley Davidson Brown Black",
      category: "Harley",
      price: "70000",
      image: "img/Harley_Davidson2.jpg",
    },
    {
      productName: "Ninja Green",
      category: "Ninja",
      price: "40000",
      image: "img/Ninja1.jpg",
    },
    {
      productName: "Ninja Black Green",
      category: "Ninja",
      price: "45000",
      image: "img/Ninja2.jpg",
    },
    {
      productName: "Supra Yellow",
      category: "Supra",
      price: "145000",
      image: "img/Supra1.jpg",
    },
    {
      productName: "Supra White",
      category: "Supra",
      price: "147000",
      image: "img/Supra2.jpg",
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  // Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // Img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // Price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Parameter passed on button (Parameter same as category)
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // check if value  equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    // display all cards on "all" button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // check if element contains category class
      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
  // initialization
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // loop through all element
  elements.forEach((element, index) => {
    // check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // display matching card
      cards[index].classList.remove("hide");
    } else {
      // hide others
      cards[index].classList.add("hide");
    }
  });
});

// Initially display all products
window.onload = () => {
  filterProduct("all");
};
