// // Get a reference to the image element
// var imgContainer = document.getElementsByClassName("img-container");

// // Take action when the image has loaded
// imgContainer.addEventListener("load", function () {
// 	// window.onload = function() {
//     var imgCanvas = document.createElement("canvas"),
//         imgContext = imgCanvas.getContext("2d");

//     // Make sure canvas is as big as the picture
//     imgCanvas.width = imgContainer.width;
//     imgCanvas.height = imgContainer.height;

//     // Draw image into canvas element
//     imgContext.drawImage(imgContainer, 0, 0, imgContainer.width, imgContainer.height);

//     // Get canvas contents as a data URL
//     var imgAsDataURL = imgCanvas.toDataURL("img/cupcake-1.jpeg");

//     // Save image into localStorage
//     try {
//         localStorage.setItem("imgContainer", imgAsDataURL);
//     }
//     catch (e) {
//         console.log("Storage failed: " + e);
//     }
// }, false);

// window.onload = function() {
// 	var img = document.getElementsByClassName("store-img"),
// 	canvas = document.createElement("canvas"),
// 	ctx = canvas.getContext("2d");

// 	img.crossOrigin = "Anonymous";
// 	img.src = img.src;

// 	canvas.width = img.width;
// 	canvas.height = img.height;
// 	ctx.drawImage( img, 0, 0 );

// 	localStorage.setItem( "savedImageData", canvas.toDataURL("img/sweets-1.jpeg") );

// 	  alert("getting local storage: " + localStorage.getItem( "savedImageData"));
// 	};

// var img = new Image();
// img.src = 'img/sweets-1.jpeg';
// img.load = function() {
//  var canvas = document.createElement('canvas');
//  document.body.appendChild(canvas);
//  var context = canvas.getContext('2d');
//  context.drawImage(img, 0, 0);
//  var data = context.getImageData(x, y, img.width, img.height).data;
//  localStorage.setItem('image', data); // save image data
// };

// console.log(localStorage);

/* [A] PRODUCTS DATA */

var products = {
  1: {
    id: 1,
    name: "4 Pack Macaroons",
    price: 5,
    img: "img/sweets-1.jpeg",
    thumb: "img-cart/sweets-1.jpeg"
  },
  2: {
    id: 2,
    name: "Birthday Cupcakes",
    price: 5,
    img: "img/cupcake-1.jpeg",
    thumb: "img-cart/cupcake-1.jpeg"
  },
  3: {
    id: 3,
    name: "Black Forest Cake",
    price: 5,
    img: "img/cake-1.jpeg",
    thumb: "img-cart/cake-1.jpeg"
  },
  4: {
    id: 4,
    name: "Berry Doughnut",
    price: 5,
    img: "img/doughnut-1.jpeg",
    thumb: "img-cart/doughnut-1.jpeg"
  },
  5: {
    id: 5,
    name: "Gummy Candy",
    price: 10,
    img: "img/sweets-2.jpeg",
    thumb: "img-cart/sweets-2.jpeg"
  },
  6: {
    id: 6,
    name: "Mocha Cupcake",
    price: 10,
    img: "img/cupcake-2.jpeg",
    thumb: "img-cart/cupcake-2.jpeg"
  },
  7: {
    id: 7,
    name: "Wedding Cake",
    price: 10,
    img: "img/cake-2.jpeg",
    thumb: "img-cart/cake-2.jpeg"
  },
  8: {
    id: 8,
    name: "Choco Doughnuts",
    price: 10,
    img: "img/doughnut-2.jpeg",
    thumb: "img-cart/doughnut-2.jpeg"
  },
  9: {
    id: 5,
    name: "Chocolate bars",
    price: 15,
    img: "img/sweets-3.jpeg",
    thumb: "img-cart/sweets-3.jpeg"
  },
  10: {
    id: 6,
    name: "Frozen Cupcake",
    price: 15,
    img: "img/cupcake-3.jpeg",
    thumb: "img-cart/cupcake-3.jpeg"
  },
  11: {
    id: 7,
    name: "Flower Cake",
    price: 15,
    img: "img/cake-3.jpeg",
    thumb: "img-cart/cake-3.jpeg"
  },
  12: {
    id: 8,
    name: "Bear Doughnuts",
    price: 15,
    img: "img/doughnut-3.jpeg",
    thumb: "img-cart/doughnut-3.jpeg"
  }
};

/* [B] PRODUCTS HTML GRID GENERATOR */

window.addEventListener("load", function() {
  var container = document.getElementById("store-items");
  var item1 = null;
  var item2 = null;
  var item3 = null;
  var part = null;
  var part1 = null;
  var part2 = null;
  for (let i in products) {
    item1 = document.createElement("div");
    // item1.classList.add('store-item');
    item1.classList.add("col-10");
    item1.classList.add("col-sm-6");
    item1.classList.add("col-lg-4");
    item1.classList.add("mx-auto");
    item1.classList.add("my-3");
    item1.classList.add("store-item");
    item1.classList.add("sweets");
    item1.setAttribute("data-item", "sweets");
    item2 = document.createElement("div");
    item2.classList.add("card");
    item2.classList.add("single-item");
    item1.appendChild(item2);
    item3 = document.createElement("div");
    item3.classList.add("img-container");
    item2.appendChild(item3);
    item4 = document.createElement("div");
    item4.classList.add("card-body");
    item2.appendChild(item4);
    item5 = document.createElement("div");
    item5.classList.add("card-text");
    item5.classList.add("d-flex");
    item5.classList.add("justify-content-between");
    item5.classList.add("text-capitalize");
    item4.appendChild(item5);

    // product img
    part = document.createElement("img");
    part.src = products[i]["img"];
    part.classList.add("store-img");
    part.classList.add("card-img-top");
    item3.appendChild(part);
    part = document.createElement("button");
    part.type = "button";
    // part.value = "store-item-icon";
    part.classList.add("store-item-icon");
    part.onclick = cart.add;
    part.dataset.id = i;
    part.innerHTML = "<i class='fas fa-shopping-cart'></i>";
    item3.appendChild(part);

    // product name
    part1 = document.createElement("h5");
    part1.setAttribute("id", "store-item-name");
    // part = document.getElementById('store-item-name');
    part1.innerHTML = products[i]["name"];
    item5.appendChild(part1);

    part2 = document.createElement("h5");
    part2.classList.add("store-item-value");
    part2 = document.createElement("strong");
    part2.setAttribute("id", "store-item-price");
    part2.innerHTML = "$" + products[i]["price"];
    part2.classList.add("font-weight-bold");
    item5.appendChild(part2);

    // product price
    // part = document.createElement("div");
    // part = document.getElementById('store-item-price');
    // part2.innerHTML = "$" + products[i]['price'];
    // item.appendChild(part);

    container.appendChild(item1);
  }
});

/* [C] SHOPPING CART */

// var data;
// function loadCart(){
// 	var text = localStorage.getItem('cart-text');
// document.getElementsByClassName('card-text').value = text;
// alert(1);
// 		data = localStorage;
// 		if (data == null) {data = {}; }
// 		else {data = JSON.parse(data); }
// };
var cart = {
  data: null, // current shopping cart

  /* [C1] LOCALSTORAGE */
  // data = localStorage.getItem("cart");

  load: function() {
    // load() : load previous shopping cart
    // alert(localStorage.getItem(1));
    cart.data = localStorage.getItem("cart");
    if (cart.data == null) {
      cart.data = {};
    } else {
      cart.data = JSON.parse(cart.data);
    }
  },

  save: function() {
    // save() : save current cart

    localStorage.setItem("cart", JSON.stringify(cart.data));
  },

  /* [C2] CART ACTIONS */
  add: function() {
    // add() : add selected item to cart

    // Update current cart
    // alert(data);
    // alert(data.dataset.id);
    // alert(this.data[this.dataset.id]);
    // alert(cart.data);
    if (cart.data[this.dataset.id] == undefined) {
      var product = products[this.dataset.id];
      cart.data[this.dataset.id] = {
        thumb: product["thumb"],
        name: product["name"],
        price: product["price"],
        qty: 1
      };
    } else {
      cart.data[this.dataset.id]["qty"]++;
    }
    // save local storage + HTML update
    cart.save(); // JSON encode and save the current cart.data to the localStorage .
    cart.list(); // JSON decode and restore the previous shopping cart from localStorage to cart.data.
  },

  list: function() {
    // list() : update HTML

    var container = document.getElementById("cart"),
      item = null,
      part = null,
      part1 = null,
      part2 = null,
      part3 = null,
      product = null,
      item1 = null,
      item2 = null,
      item3 = null;
    container.innerHTML = "";

    // Empty cart
    var isempty = function(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    };
    if (isempty(cart.data)) {
      item = document.createElement("div");
      item.innerHTML = "Cart is empty";
      container.appendChild(item);
    }

    // Not empty
    else {
      // List items
      var total = 0,
        subtotal = 0;
      for (var i in cart.data) {
        item = document.getElementById("cart");
        product = cart.data[i];

        part1 = document.createElement("div");
        part1.classList.add("cart-item");
        part1.classList.add("d-flex");
        part1.classList.add("justify-content-between");
        part1.classList.add("text-capitalize");
        part1.classList.add("my-3");
        item.appendChild(part1); // Image

        part2 = document.createElement("img");
        part2.src = products[i]["thumb"];
        part2.classList.add("img-fluid");
        part2.classList.add("rounded-circle");
        part1.appendChild(part2); // Div Element

        part3 = document.createElement("div");
        part3.classList.add("item-text");
        part1.appendChild(part3); // Name

        part4 = document.createElement("p");
        part4.innerHTML = product["name"];
        part4.setAttribute("id", "cart-item-title");
        part4.classList.add("font-weight-bold");
        part4.classList.add("mb-0");
        part3.appendChild(part4); // Span // part5 = document.createElement("span"); // part3.appendChild(part5); // Quantity

        part7 = document.createElement("input");
        part7.type = "number";
        part7.value = product["qty"];
        part7.dataset.id = i;
        part7.classList.add("cart-quantity-input");
        part7.addEventListener("change", cart.change);
        part1.appendChild(part7); // Price

        part6 = document.createElement("span");
        part6.innerHTML = "$" + products[i]["price"];
        part6.setAttribute("id", "cart-item-price");
        part6.classList.add("cart-item-price");
        part6.classList.add("mb-0");
        part1.appendChild(part6);

        // Trash
        part8 = document.createElement("i");
        part8.setAttribute("id", "cart-item-remove");
        part8.classList.add("cart-item-remove");
        // part7.classList.add("fas fa-trash");
        part8.innerHTML = "<i class='fas fa-trash'></i>";
        part8.dataset.id = i;
        part8.addEventListener("click", cart.trash);
        part1.appendChild(part8); // Subtotal

        subtotal = product["qty"] * product["price"];
        total += subtotal;
        container.appendChild(part1);
      } // CLEAR BUTTON

      item1 = document.createElement("div");
      item1.classList.add("cart-buttons-container");
      item1.classList.add("mt-3");
      item1.classList.add("d-flex");
      item1.classList.add("justify-content-between");

      part1 = document.createElement("input");
      part1.type = "button";
      part1.value = "clear";
      part1.addEventListener("click", cart.reset);
      part1.classList.add("btn");
      part1.classList.add("btn-black");
      part1.classList.add("text-uppercase");
      item1.appendChild(part1);

      part2 = document.createElement("input");
      part2.type = "button";
      part2.value = "checkout - $" + total;
      part2.addEventListener("click", cart.checkout);
      part2.classList.add("btn");
      part2.classList.add("btn-pink");
      part2.classList.add("text-uppercase");
      item1.appendChild(part2);

      container.appendChild(item1);
    }
  },

  trash: function(id) {
    // trash() : empty cart
    if (confirm("Remove from cart?")) {
      // alert(id);
      delete cart.data[this.dataset.id];
      // cart.remove(products.id);
      // cart.data = {};
    }
    cart.save();
    cart.list();
  },

  change: function() {
    // change() : change quantity

    if (this.value < 0) {
      delete cart.data[this.dataset.id];
    } else {
      cart.data[this.dataset.id]["qty"] = this.value;
    }
    cart.save();
    cart.list();
  },

  reset: function() {
    // reset() : empty cart
    if (confirm("Empty cart?")) {
      cart.data = {};
      cart.save();
      cart.list();
    }
  },

  checkout: function() {
    // checkout() : checkout the cart
    alert("Hurray! Your order is placed");
    cart.data = {};
    cart.save();
    cart.list();
  }
};
// Load previous cart and update HTML on load
window.addEventListener("load", function() {
  cart.load();
  cart.list();
});
