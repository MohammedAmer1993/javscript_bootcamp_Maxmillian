class Product {
  constructor(title, imageURL, desc, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.desc = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addtoCart() {
    console.log("adding to cart");
    App.addToCartApp(this.product);
  }

  render() {
    const elmentItem = document.createElement("li");
    elmentItem.classList.add("product-item");
    elmentItem.innerHTML = `
      <div>
        <img src="${this.product.imageURL}" alt="${this.product.desc}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <button>add to cart</button>
        </div>
      </div>
      `;
    const cartAddBtn = elmentItem.querySelector("button");
    cartAddBtn.addEventListener("click", this.addtoCart.bind(this));
    return elmentItem;
  }
}

class Cart {
  items = [];

  updateCartItems(item) {
    this.items.push(item);
    let total = 0;
    for (const obj of this.items) {
      total = total + obj.price;
    }
    this.totalPrice.innerHTML = `<h2>Total amount: \$${total}</h2>`;
  }

  render() {
    const cartElement = document.createElement("section");
    cartElement.classList.add("cart");
    cartElement.innerHTML = `
    <h2>Total amount: \$${0}</h2>
    <button>Order Now</button>
    `;
    this.totalPrice = cartElement.querySelector("h2");
    return cartElement;
  }
}

class ProductList {
  products = [
    new Product(
      "soft billow",
      "https://linensociety.com/cdn/shop/products/heirloom-pillow_14294b09-8232-4d5d-a305-022b802669ab_1400x.jpg?v=1584402804",
      "soft billow for good sleeping",
      19.99
    ),
    new Product(
      "iranian carpet",
      "https://kalouttour.com/wp-content/uploads/2020/09/persian-carpet-6-705x528.jpg",
      "very good high quality persian carpet made by hand",
      129.99
    ),
  ];

  renderProducts() {
    const productItemsList = document.createElement("ul");
    productItemsList.classList.add("product-list");
    for (const item of this.products) {
      const product = new ProductItem(item);
      const elmentItem = product.render();
      productItemsList.append(elmentItem);
    }
    return productItemsList;
  }
}

class Shop {
  cart = new Cart();
  productList = new ProductList();

  render() {
    const renderHook = document.getElementById("app");
    const cartElemnt = this.cart.render();
    const produtListElemnt = this.productList.renderProducts();
    renderHook.append(cartElemnt);
    renderHook.append(produtListElemnt);
  }
}

class App {
  static init() {
    this.shop = new Shop();
    this.cart = this.shop.cart;
    this.shop.render();
  }

  static addToCartApp(product) {
    this.cart.updateCartItems(product);
  }
}

App.init();
