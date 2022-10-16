# Object-oriented Programming (OOP)

## Classes and Instances of Classes

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

## Class Fields and Properties

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

## Inheritance

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

## Private Fields, Properties and Methods

- `public`

  - accessible `outside` of the class/object
  - example: `product.buy()`

- `private`

  - accessible only `inside` of the class/object
  - you work with this in your class (to split and re-use code)
  - example: hard-coded (fallback) values, re-used class-specific logic

  ```TypeScript
  class ProductList {
    // hash (#) sets property or method to private
    #products = [];
    // ...
  }
  ```

- addition of private fields and properties is relatively new; you might find many scripts that use a common convention -> prefix private properties with an underscore (`_`) to signal that they should not be accessed from outside of the object

```TypeScript
class User {
  constructor() {
    this._role = 'admin';
  }
}

// or directly in an object
const product = {
  _internalId: 'abc1'
};
```
