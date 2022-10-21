# Object-oriented Programming (OOP)

## Constructor Functions and Prototypes

- before introduction of syntactic sugar of `classes` in JavaScript, you could achieve a similar output with the `new` keyword and a function
  - `new` keyword [1] creates new empty object inside of function: `this = {}`, [2] then it adds all properties and methods inside of function to this object and `return this`

```TypeScript
// capital letter is only a convention, not mandatory
function Person() {
  this.name = 'Matchu';
  this.greet = function() {
    console.log(this.name)
  }
}

const person = new Person();
person.greet();
```

### Prototypes

- JavaScript uses `Prototypical Inheritance` -> `class` syntax is basically just `syntactic sugar`
- Constructor functions and prototypes power JavaScript objects

![](/slides/30_prototypes-1.png)

- every object has a prototype which is a connected object that is used as a fallback object and contains built-in methods that can be used (e.g. `person.toString()`)

![](/slides/31_prototypes-2.png)

### Prototype Chain

![](/slides/32_prototype-chain.png)

```TypeScript
// extends keyword makes functionality available on all classes that extend the same base class
// and when you call super(), it creates an object based on the parent class which is then used as prototype for the new object created based on the "subclass"

class Person {
  printRole() {
    console.log(this.role);
  }
}

class Admin extends Person {
  role = 'Admin';

  constructor() {
    super();
  }
}
```

## "\_\_proto\_\_" vs "prototype"

- overview article: <https://levelup.gitconnected.com/javascripts-proto-vs-prototype-a21ec7f25bc1>
- `Person.prototype` -> `prototype` property defines what will be assigned to every object that is created based on the constructor function of e.g. `Person`
  - Example: every object created with `object literal` (`const obj = {}`) is based on `Object.prototype`
- `someObj.__proto__` points at the prototype object of `someObj` that has been assigned to `someObj` -> `__proto__` property is available on every object
  - recommended way to get prototype of an object: `Object.getPrototypeOf(YOUR_OBJECT)`

```TypeScript
const person1 = new Person();
const person2 = new Person();

// both objects created based on the same class point to the same '__proto__' property object in the memory
const areBothObjectsEqual = Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2); // true
```

## Prototypes and Method Types

- how objects are created in class instances and how `this` behaves

![](/slides/33_prototypes-and-this-keyword.png)

### Setting and Getting Prototypes

```TypeScript
const course = {
  title: 'JavaScript',
  rating: 5,
};

// change or add method in prototype object of course object
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course), // spread existing prototype, but not needed since prototype object has also its prototype fallback object (-> prototype chain)
  printRating: function() {
    console.log(`${this.rating}/5`);
  } // arrow function would not bind `this` to `course` object
});
```

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

### Class Fields and Properties

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

### Inheritance

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

### Private Fields, Properties and Methods

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
