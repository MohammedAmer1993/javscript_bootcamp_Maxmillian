class Product {
  constructor(title, imageURL, desc, price) {
    this.title = title;
    this.imageURL = imageURL;
    this.desc = desc;
    this.price = price;
  }
}

class attribute {
  constructor(attName, attVal) {
    this.name = attName;
    this.value = attVal;
  }
}

class Component {
  constructor(hookID) {
    this.hookId = hookID;
  }

  renderElement(tag, className, attributes) {
    const rootElement = document.createElement(tag);
    if (attributes && attributes.length > 0) {
      for (const att of attributes) {
        rootElement.setAttribute(att.name, att.value);
      }
    }
    rootElement.className = className;
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ProductItem extends Component {
  constructor(product, id) {
    super(id);
    this.product = product;
  }

  addtoCart() {
    console.log("adding to cart");
    App.addToCartApp(this.product);
  }

  render() {
    const elmentItem = this.renderElement("li", "product-item");
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

class Cart extends Component {
  items = [];

  get total() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }

  constructor(hookid) {
    super(hookid);
  }

  updateCartItems(item) {
    this.items.push(item);
    let total = 0;
    for (const obj of this.items) {
      total = total + obj.price;
    }
    this.totalPrice.innerHTML = `<h2>Total amount: \$${total.toFixed(2)}</h2>`;
  }

  render() {
    const cartElement = this.renderElement("section", "cart");
    cartElement.innerHTML = `
    <h2>Total amount: \$${0}</h2>
    <button>Order Now</button>
    `;
    this.totalPrice = cartElement.querySelector("h2");
    return cartElement;
  }
}

class ProductList extends Component {
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

  constructor(hookid) {
    super(hookid);
  }

  renderProducts() {
    const productItemsList = this.renderElement("ul", "product-list");
    productItemsList.setAttribute("id", "listID");
    for (const item of this.products) {
      const product = new ProductItem(item, "listID");
      const elmentItem = product.render();
    }
    return productItemsList;
  }
}

class Shop {
  cart = new Cart("app");
  productList = new ProductList("app");

  render() {
    const cartElemnt = this.cart.render();
    const produtListElemnt = this.productList.renderProducts();
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
