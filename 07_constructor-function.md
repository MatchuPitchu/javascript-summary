# Constructor Functions and Prototypes

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

## Prototypes

- JavaScript uses `Prototypical Inheritance` -> `class` syntax is basically just `syntactic sugar`
- Constructor functions and prototypes power JavaScript objects

![](/slides/30_prototypes-1.png)

- every object has a prototype which is a connected object that is used as a fallback object and contains built-in methods that can be used (e.g. `person.toString()`)

![](/slides/31_prototypes-2.png)

## Prototype Chain

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

## Setting and Getting Prototypes

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
