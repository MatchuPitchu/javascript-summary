# Objects

- `objects` are made up of `properties` and `methods`
  - store data in properties and actions in methods
  - all `reference` values are in the end `objects`, BUT objects consists in the end, sometimes deep nested of primitive values
- `object literal`: `{...}`
- remove object property: `delete objectName.property`
- dynamic properties:

  - accessing properties with a variable

    ```TypeScript
    const propertyName = 'name';
    objectName[propertyName];
    ```

  - defining properties with a variable

    ```TypeScript
    const propertyName = 'name';
    const objectName = {
      [propertyName]: 'Matchu',
    }
    ```

- create new object: `Object.assign()` -> better way is spread operator

  ```TypeScript
  const person = {
    name: 'Matchu',
    age: 20,
  };

  Object.assign({}, person); // merge person object properties into first argument
  ```

- check if property exists in object with `in` operator

  ```TypeScript
  if ('name' in personObj) {
    // ...
  }
  ```

## this Keyword

- Generally, `this` refers to the "thing" which called a function (if used inside of a function). That can be the global context, an object or some bound data/ object (e.g. when the browser binds `this` to the button that triggered a click event).

- `this` inside of arrow functions has the binding `this` would have outside of the function
  - arrow fn does NOT know `this`
  - arrow fn does NOT bind `this` to anything

```TypeScript
// 1) this in Global Context (i.e. outside of any function)
function something() { ... }
console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!

// 2) this in a Function (non-Arrow) - Called in the global context
function something() {
    console.log(this);
}
something(); // logs global object (window in browser) in non-strict mode, undefined in strict mode

// 3) this in an Arrow-Function - Called in the global context
const something = () => console.log(this);
something(); // logs global object (window in browser) - ALWAYS (also in strict mode)!

// 4) this in a Method (non-Arrow) - Called on an object
const person = {
  name: 'Max',
  greet: function() { // or use method shorthand: greet() { ... }
    console.log(this.name);
  }
};

person.greet(); // logs 'Max', "this" refers to the person object

// 5) this in a Method (Arrow Function) - Called on an object
const person = {
  name: 'Max',
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode

// 6) this can refer to unexpected things if you call it on some other object, e.g.:
const person = {
  name: 'Max',
  greet() {
      console.log(this.name);
  }
};
const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
anotherPerson.sayHi = person.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object
anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it
```

```TypeScript
// bind() - prepares function for future execution and you can set your 'this' context
getFormattedTitle.bind(thisContext, firstParameter, secondParameter, ...)

// call() - executes function immediately and you can set your 'this' context
getFormattedTitle.call(thisContext, firstParameter, secondParameter, ...)

// apply() - executes function immediately and you can set your 'this' context
getFormattedTitle.apply(thisContext, [firstParameter, secondParameter, ...])
```

## Getters and Setters

```TypeScript
const newMovie = {
  info: {
    set title(value) {
      if(!value.trim()) {
        this._title = 'Default Title';
        return
      }
      this._title = value;
    },
    get title() {
      return this._title.toUppercase();
    }
  }
}

newMovie.info.title = 'Test Title'; // calls setter function
console.log(newMovie.info.title); // calls getter function
```
