# Object-oriented Programming (OOP)

- `classes` and `instances` of classes

![](/slides/27_classes-instances.png)

```TypeScript
// blueprint or template for objects that can be instantiated based on this class
class Product {
  // set default value for the property template OR set property template to undefined
  // [1] class fields: define properties for the class
  title = 'DEFAULT';
  price;

  // constructor is automatically called when new instance of class is created
  constructor(title, price) {
    this.title = title;
    this.price = price;
  } // notice: NO semicolon
};

class ProductList {
  products = [];

  // empty constructor only instantiates this class when called
  constructor() {
    this.products = [
      new Product('Title 1', 10),
      new Product('Title 2', 20),
    ];
  }

  render() {
    // ... DOM manipulation logic to render a product list
  }
}

const product = new Product();
const productList = new ProductList();
productList.render();
```

- `class fields` and `properties`

![](/slides/28_class-fields-and-properties.png)

- `static properties`, `fields` and `methods`

  - defined with `static` keyword
  - only accessible on class itself, without instantiation (i.e. not on instance)
  - typically used in helper classes, global configuration etc.

- `instance properties`, `fields` and `methods`
  - defined without `static` keyword
  - only accessible on instances (= objects) based on class
  - used for core, re-usable logic

```TypeScript
class App {
  static cart;

  static init() {
    const productList = new ProductList();
    productList.render();
  }
}

App.init();
```

- `inheritance`

![](/slides/29_class-inheritance.png)

```TypeScript
class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if(cssClasses) rootElement.className = cssClasses;
    if(attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name. attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
};

class Cart extends Component {
  // ...

  constructor(renderHookId) {
    // call constructor of parent class (-> Component) and pass an argument
    super(renderHookId);
  }

  render() {
    const cartElement = this.createRootElement('section', 'cart')
    // ...
  }
};

new Cart('app');
```
