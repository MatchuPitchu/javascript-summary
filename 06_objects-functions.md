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

- `this` inside of arrow functions has the binding the `this` would have outside of the function
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

## The "instanceof" Operator

```TypeScript
// [1] Example: check if object is based on certain class
class Person {
  name = 'Matchu';
}

const person = new Person();

if (person instanceof Person) {
  // ...
}

// [2] Example: check if DOM element is of certain type
const button = document.querySelector('button');
if(button instanceof HTMLButtonElement) {
  // ...
}
```

## Object Descriptors

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty>

```TypeScript
const person = {
  name: 'Matchu',
  greet() {
    console.log(this.name)
  }
}

// returns new object with information about the properties and methods of a specific object: e.g. "configurable", "enumberable", "writable", "value"
Object.getOwnPropertyDescriptors(person);

// change property definition
Object.defineProperty(person, 'name', {
  configurable: true, // defines if you can delete or not and other things
  enumerable: true, // defines if appears in loops
  value: person.name,
  writable: false, // no re-write possible AND no Error thrown if re-write is tried
})
```

## Functions

- difference between `function declaration / function statement` and `function expression`

![](/00_slides/18_function-declaration-vs-expression.png)

### Pure Function

- same input (arguments) always produces the same output
- does NOT have `side effects`, i.e. function should not change something outside of the function

```TypeScript
// Pure Function [recommended]
const add = (num1: number, num2: number) => num1 + num2;

// Impure Functions [only use for specific cases]
const addRandom = (num1: number) => num1 + Math.random();

let prevResult = 0;
const addNumbers = (num1: number, num2: number) => {
  const sum = num1 + num2;
  prevResult = sum; // side effect
  return sum;
}

const tech = ['HTML', 'CSS'];
const printTech = (tech: string) => {
  tech.push('JavaScript'); // changes array outside of function
  console.log(tech);
}
```

### Factory Functions

- a function that returns a new function/object that can be for example pre-configured with some block scoped variables

```TypeScript
const createTaxCalculator = (tax: number) => {
  return (amount: number) => amount * tax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);
```

### Closures

- every function in JavaScript is a `closure`

  - each function has its own `lexical scope` and enregisters all parameters of this function and declared variables inside this function: these variables are then only accessible inside the function, NOT outside
  - global or outer variables can be used inside a function:
    - when a function is created, it logs all parameters and variables
    - when a function is called, it closes over the latest values of these variables

```TypeScript
// [1] Example
let multiplier = 1.1;

const createTaxCalculator = (tax: number) => (amount: number) => amount * tax * multiplier;

multiplier = 1.2;

const calculateVatAmount = createTaxCalculator(0.19); // multiplier 1.2 is used

// [2] Example
let userName = 'Matchu';

const greetUser = () => {
  let name = userName;
  console.log(name);
}

userName = 'Pitchu';

greetUser(); // output: Pitchu
```

### Immediately Invoked Function Expression (IIFE)

- can be found especially in older scripts: snippet below uses `var`, as a consequence, it was hard to control where variables were available - variables outside of function always were available globally. Well, IIFEs solve that problem since the script (or parts of it) essentially are wrapped in a function => Function scope is used. Nowadays, this is not really required anymore.

```JavaScript
(function() {
  var age = 30;
  console.log(age); // 30
})()

console.log(age); // Error: "age is not defined"
```

- With `let` and `const` we got block scope and if you want to restrict where variables are available (outside of functions, if statements, for loops etc - where you automatically have scoped variables since these structures create blocks), you can simply wrap the code that should have scoped variables with `{}`.

```JavaScript
{
  const age = 30;
  console.log(age); // 30
}

console.log(age); // Error: "age is not defined"
```

### Recursion Pattern

```TypeScript
// [1] Approach WITHOUT recursion
const powerOf = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};

// [2] Approach WITH recursion
const powerOf = (x, n) => {
  if(n === 1) return x;
  return x * powerOf(x, n - 1);
}

powerOf(2, 3); // return 2 * (return 2 * (return 2));

// [3] Approach WITH recursion and as short as possible with ternary operator
const powerOf = (2, 3) => n === 1 ? x : x * powerOf(x, n - 1);

// How it works:
// let powerOf calls go onto the call stack until only x would be returned and summarize it

// Call stack
// powerOf(2, 3) returns  2 * powerOf(2, 2)
// powerOf(2, 2) returns  2 * powerOf(2, 1)
// powerOf(2, 1) returns  2, and the recursion ends.
// So we can move back in this chain and see what will be returned in the end:
// Since powerOf(2, 1) returns 2, powerOf(2, 2) returns 2 * 2 = 4 , which means that powerOf(2, 3) returns 2 * 4 = 8.
```

```TypeScript
// Example: Advanced Recursion

// object with same structured parts (a name and potentially some friends), but you do NOT know how many nested levels and how many friends
// would be the same principe in a Dropbox folder: you have folders with files that could have subfolders ...
const network = {
  name: 'Matchu',
  friends: [
    {
      name: 'Pitchu',
      friends: [
        {
          name: 'Mo',
          friends: [
            { name: 'Mao' },
          ]
        }
      ],
    },
    { name: 'Julia' },
  ],
};

const getFriendNames = (person) => {
  const collectedNames: string[] = [];

  if(!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name); // push name at current level
    // re-call function to check if friends exist on next child level
    collectedNames.push(...getFriendNames(friend)); // spread returned array (could be array of child level and so on until empty [] would be returned)
  }

  return collectedNames;
}

getFriendNames(network); // output: ['Pitchu', 'Julia', 'Mo', 'Mao']
```

#### Example Recursion to Create a Menu in React

- recommended: prefere a flat array instead of nested objects

```TSX
const menuItems = [
  {
    id: "1",
    text: "Menu 1",
    children: ["11", "12"],
    isRoot: true,
  },
  {
    id: "11",
    text: "Menu 1 1",
    href: "#11",
  },
  {
    id: "12",
    text: "Menu 1 2",
    href: "#12",
  },
  {
    id: "2",
    text: "Menu 2",
    href: "#2",
    isRoot: true,
  },
  {
    id: "3",
    text: "Menu 3",
    children: ["31"],
    isRoot: true,
  },
  {
    id: "31",
    text: "Menu 3 1",
    children: ["311"],
  },
  {
    id: "311",
    text: "Menu 3 1 1",
    href: "#311",
  },
];

// Menu and MenuItem are recursively calling each other
const Menu = ({ itemIds, itemsById }) => {
  return (
    <ul>
      {itemIds.map((id) => (
        <MenuItem key={id} itemId={id} itemsById={itemsById} />
      ))}
    </ul>
  );
}

const MenuItem = ({ itemId, itemsById }) => {
  const item = itemsById[itemId];

  // break condition: stop recursion if item does NOT have children
  if (!item.children) {
    return (
      <li>
        <a href={item.href}>{item.text}</a>
      </li>
    );
  }

  // creates recursively a submenu
  return (
    <li>
      {item.text}
      <Menu itemIds={item.children} itemsById={itemsById} />
    </li>
  );
}

// root component
const NestedMenu = () => {
  const itemsById = menuItems.reduce(
    (prev, item) => ({ ...prev, [item.id]: item }),
    {}
  );
  const rootIds = menuItems.filter(({ isRoot }) => isRoot).map(({ id }) => id);
  return <Menu itemIds={rootIds} itemsById={itemsById} />;
}
```
