class Product {
  constructor(tit, img, des, pri) {
    this.title = tit;
    this.img_url = img;
    this.description = des;
    this.price = pri;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addItem() {
    App.addToCart(this.product);
  }
  render() {
    const listItem = document.createElement("li");
    listItem.classList.add("product-item");
    listItem.innerHTML = `
      <div>
        <img src=${this.product.img_url} alt=${this.product.description}>
        <div class="product-item__content">
          <h2>${this.product.title}<h2>
          <h3>${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart </button>
        </div>
      </div>
      `;
    const addBtn = listItem.querySelector("button");
    addBtn.addEventListener("click", this.addItem.bind(this));
    return listItem;
  }
}
class ProductList {
  products = [
    new Product(
      "billow",
      "https://cdn.arhaus.com/product/StandardV2/CORE1323_I220127.jpg?preset=Product1920x1440",
      "soft billow",
      19.99
    ),
    new Product(
      "carpet",
      "https://www.artcarpet.com/assets/images/about-us.jpg",
      "very high quality carpet",
      89.99
    ),
  ];

  render() {
    const prodList = document.createElement("ul");
    prodList.classList.add("product-list");
    for (const el of this.products) {
      const product = new ProductItem(el);
      const listItem = product.render();
      prodList.append(listItem);
    }
    return prodList;
  }
}

class ShoppingCart {
  items = [];

  addProductToCart(product) {
    this.items.push(product);
  }

  render() {
    const cartElemnt = document.createElement("section");
    cartElemnt.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    cartElemnt.classList.add("cart");
    return cartElemnt;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");
    const productList = new ProductList();
    const prodList = productList.render();
    this.shoppingCart = new ShoppingCart();
    const cart = this.shoppingCart.render();
    renderHook.append(cart);
    renderHook.append(prodList);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.shoppingCart;
  }

  static addToCart(product) {
    this.cart.addProductToCart(product);
  }
}

App.init();
