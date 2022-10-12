# Summary Course "JavaScript - The Complete Guide 2022 (Beginner + Advanced)" (Udemy)

- JavaScript:
  - is `dynamic`, i.e. coda can change at runtime (e.g. type of a variable)
  - is `weakly typed`, i.e. data types are assumed (e.g. assigned to variables) automatically and can change
    - you don't define that some variable has to hold a certain value (e.g. `number`)
  - is `interpreted`, i.e. it's on the fly `compiled and executed at runtime`
  - is a `hosted` language, i.e. it runs in different `host environments`
    - `browser` (client-side): JS can manipulate HTML, CSS, send background HTTP requests etc.; JS can NOT access local filesystem, interact with operating system
    - `Node.js` (server-side): used to build web backends; can access local filesystem, interact with operating system; can NOT manipulate HTML, CSS

## How JavaScript is executed?

![](/slides/01_how-javascript-is-executed.png)

- how JavaScript engines are working in general in browsers

![](/slides/14_javascript-engines-work-flow.png)

- how code gets executed in JavaScript

![](/slides/15_javascript-engine-code-execution.png)

## Overview of the JavaScript History

![](/slides/02_overview-history-javascript.png)

- `ECMAScript` sets standards for JS which are implemented by browser vendors (Google with Chrome, Mozilla with Firefox etc.) in their `JavaScript engines`

## Variables & Constants

- a variable is a `data container`/`data storage`
- `let` => value can be updated, but can NOT be re-declared with same name; `block scoped` (-> chunk of code bounded by `{...}`)
- `const` => value can NOT be updated and can NOT be re-declared with same name; `block scoped`

- naming conventions and restrictions

![](/slides/03_variable-naming.png)

## Primitive vs Reference Values

![](/slides/16_primitive-vs-reference-values.png)

## Garbage Collection

![](/slides/17_garbage-collection.png)

## Operators

![](/slides/04_operators.png)

## Data Types

![](/slides/05_data-types.png)

![](/slides/06_null-undefined-NaN.png)

## Importing JavaScript to a Webpage

- `script` element, `async`/`defer`, timeline of execution while loading the page

![](/slides/07.1_adding-javascript-to-a-webpage.png)

![](/slides/07.2_how-to-import-javascript-in-a-webpage.png)

![](/slides/07.3_timeline-execution-summary.png)

## Boolean Operators

- equality operators

![](/slides/08_boolean-operators.png)

## String Comparison

- JavaScript compares strings based on standard lexicographical ordering, using Unicode values
- JavaScript looks at first character and only considers other characters if the first character is similar
- capital characters are considered to be smaller than lowercase

```JavaScript
  'ab' > 'aa' // true
  'a' > 'B' // true
  'a' > 'b' // false
```

## Combining Conditions

- `&&`, `||`

![](/slides/09_combining-conditions.png)

## Falsy & Truthy Values

![](/slides/10.1_falsy-truthy-values.png)

![](/slides/10.2_falsy-truthy-values.png)

## Conditional Expressions / Ternary Operator

![](/slides/11_ternary-operator.png)

## Expression vs. Statement in JavaScript

- an expression is a bit of JavaScript code that produces a value

```JavaScript
  1 → produces 1
  "hello" → produces "hello"
  5 \* 10 → produces 50
  num > 100 → produces either true or false
  isHappy ? "🙂" : "🙁" → produces an emoji
  [1, 2, 3].pop() → produces the number 3
```

- a JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something.

```JavaScript
let hi = 5;

if (hi > 10) {
  // More statements here
}

throw new Error('Something exploded!');
```

- a chunk of JS is an expression, if you can use `console.log(/* chunk of JavaScript */)`
- it's a statement (or, possibly, invalid JS), if `console.log()` returns an error

## Logical Operator Shorthands an handy Use Cases

![](/slides/12_logical-operators-shorthands.png)

## Loops

- `for`, `for ... of`, `for ... in`, `while`

![](/slides/13_loops.png)

- `break`: stops execution of loop

```TypeScript
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    break;
  }
}
```

- `continue`: stops only execution of current round of loop

```TypeScript
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    continue;
  }
}
```

- `labeled statement`: alias for loops
  - if you have e.g. an inner and an outer loop, you can stop execution of outer loop (-> whole loop) in the inner loop
  - works also if e.g. an infinite loop is labeled at another place in your code

```TypeScript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; i++) {
    if (j === 2) {
      break outerLoop;
    }
  }
}
```

## Functions

- difference between `function declaration / function statement` and `function expression`

![](/slides/18_function-declaration-vs-expression.png)

## Document and Windows Object

![](/slides/19_document-and-window.png)

- global `window` object provides build-in browser methods like `alert()`, `setTimeout()` etc. -> you don't need to write `window.alert()` to call them
- event the `document` object is a part of the `window` object

## Document Object Model (DOM)

![](/slides/20_document-object-model-dom.png)

### Nodes & Elements

- `Nodes`

  - `Nodes` are objects that make up the DOM
  - HTML tags are `element nodes`(or just `elements`)
  - text creates `text nodes`
  - attributes create `attribute nodes`

- `Elements`
  - are one type of nodes
  - have special properties and methods to interact with the elements
  - have available methods and properties depend on the kind of element
  - can be selected in various different ways (via JavaScript)
  - can be created and removed via JavaScript

### Querying the DOM

- `querySelector()`, `getElementById()`:

  - 1. return direct object reference to DOM element
  - 2. return single element
  - 3. different ways of querying elements (by CSS selector, by ID)

- `querySelectorAll()`, `getElementsByTagName()`:

  - 1. `querySelectorAll()` returns a `non-live (static) NodeList`, `getXByY` returns `live NodeList`
  - 2. return collections of elements (array-like objects) -> `NodeList`
  - 3. different ways of querying elements (by CSS selector, by tag name, by CSS class)

- `document.body` => selects the `<body>` element node.
- `document.head` => selects the `<head>` element node.
- `document.Element` => selects the `<html>` element node
- `Element.closest('CSSselector')` => traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.
- `Element.previousElementSibling`, `Element.nextElementSibling`: read-only property returns the Element immediately prior or after to the specified one in its parent's children list, or `null` if the specified element is the first one in the list.

### Live Node Lists vs Static Node Lists

- `live` means that changes in DOM are reflected in the collection
- `static` means that only a snapshot of the current state is taken
- use e.g. `getElementsByTagName()` instead of `querySelectorAll()` if you want to have a live connection

### Attributes vs Properties

![](/slides/21_attributes-vs-properties.png)

### Traversing the DOM

- `child`, `descendant`, `parent`, `ancestor`

![](/slides/22_children-descendants-parent-ancestors.png)

![](/slides/23_traversing-the-dom.png)

### Styling DOM elements

![](/slides/24_styling-dom-elements.png)

### Creating and Inserting Elements

![](/slides/25_creating-and-inserting-elements.png)

- `Element.insertAdjacentHTML(position, text)`: parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
  - Recommended: instead of `innerHTML` method that replaces whole content between selected HTML tags and forces browser to re-render whole block
- `document.createElement()`: creates the HTML element specified by tagName
- `Node.appendChild(CREATED_OR_EXISTING_ELEMENT)`: adds node to end of list of children of a specified parent node. If given child is a reference to an existing node in the document, `appendChild()` moves it from its current position to the new position (-> since you are holding only a reference to the element object).
- `Element.append()` / `Element.prepend()`: inserts a set of Node objects or string objects a) after the last child OR b) before the first child of the Element. String objects are inserted as equivalent Text nodes.
- `Node.cloneNode(deep)`: returns a duplicate of the node on which this method was called. `deep` controls if the subtree contained in a node is also cloned (-> `true`) or not (-> `false`).

## Arrays and Iterables

- `Iterable`: is an object that implements the `iterable protocol` and have a `@@iterator` method (i.e. `Symbol.iterator`)

  - Iterables: `Array`, `NodeList`, `String`, `Map`, `Set`

- `Array-like Object`: is an object with a `length` property and use an `index` to access items

  - Array-like objects: `NodeList`, `String`

### Creating Arrays

```TypeScript
const arr1 = [1, 2];

const arr2 = Array.from('Hi') // ['H', 'i'] -> transforms an iterable into an array

// rarely used
const arr3 = new Array(1, 2) // notice: new Array(5) -> empty array with length 5

const arr4 = Array.of(1, 2);
```

### Useful Methods of Arrays

```TypeScript
arr.push(); // adds item at the end
arr.pop(); // removes item at the end

arr.unshift(); // adds item at the beginning and moves all items one index higher
arr.shift(); // removes item at the beginning and moves all items one index lower

arr.splice(START_INDEX, NUMBER_OF_ITEMS_TO_DELETE?, ...ITEMS_TO_INSERT?); // returns removed items

arr.slice(START_INDEX, END_INDEX?) // returns new shallow copy of array, end index not included

arr.concat(ARRAY[]) // merges two or more arrays; does NOT change existing arrays, but instead returns a new array

arr.indexOf(ITEM_VALUE, START_INDEX?) // returns first index where the passed value is found in an array
arr.lastIndexOf(ITEM_VALUE) // same as above, but starts searching in array from the end

arr.find((item, index?, fullArray?) => item === 'test'); // returns first matching item (i.e. return is true)
arr.findIndex(); // same as above, but returns found index

arr.includes(ITEM_VALUE) // returns boolean value

const newArr = arr.map((item, index?, fullArray?) => {
  // ... logic
  return newItem;
}) // transforms items of array, returns new array, does NOT mutate original array

const sortedArr = [10, 1, 5].sort((a, b) => {
  if(a > b) return 1; // a must be after b (-> a +1 position)
  if (a < b) return -1; // a must be before b (-> a -1 position)
  return 0; // no change
})

const filteredArr = [1, 2].filter((item, index?, fullArray?) => item === 1); // return true means, that item is kept (-> filtered out in new array), false means opposite

const total = [1, 5, 10].reduce((accumulator, currentValue, currentIndex?, fullArray?) => accumulator + currentIndex, 0); // reduces values of array items to another new value or wished construct

const data = ['test;10']
const splitData = data.split(";"); // ['test', '10']

const arr = ['hello', 'world'];
const joinedString = arr.join(' '); // 'hello world'
```

## Spread Operator

```TypeScript
const arr = [10, 2, 5, 4];
const copiedArr = [...arr]; // creates new shallow (!) copy

const minNumber = Math.min(...arr) // returns min number of spread array

const arrOfObjects = [{age: 10}, {age: 20}];
const copiedArrOfObjects = [...arrOfObjects];
arrOfObjects[0].age = 15 // change occurs in both arrays since only reference addresses to objects are spread into copied array, so there are the same

const copiedArrOfObjects2 = arrOfObjects.map((obj) => ({ age: obj.age })); // way to create really new copy of objects in item, map method returns new array with new object for each item in array
```

## Destructuring

- destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
- for `arrays`: data is pulled out in the order of array

```TypeScript
const arr = ['Matchu', 'Pitchu', 'hello', 'world'];
const [firstName, lastName, ...restData] = arr; // use rest operator to bundle the remaining items of array
```

## Maps and Sets

- difference of `Arrays`, `Sets` and `Maps`
  - `Set` is a data structure that is perfect if you want to store unique values; it can tell you if it contains a value or not

![](/slides/26_difference-arrays-sets-maps.png)

```TypeScript
/*** Sets ***/
// create new Set; pass in any Iterable as argument
const ids = new Set([1, 2, 3]);
const hasValue = ids.has(1); // true

ids.add(2); // already exists, so no new one is added
ids.delete(3) // returns false/true if value was deleted or not since does nothing if value does NOT exist

for(const entry of ids.values()) {
  console.log(entry);
}

/*** Maps ***/
// create new Map that uses object as a key and attaches additional information in the value of any kind of data
const person1 = { name: 'Matchu'};
const person2 = { name: 'Pitchu'};

const personData = new Map([[person1, { age: 30 }]]);
// get value of key value pair
personData.get(person1); // { age: 30 }

// add new data
personData.set(person2, { age: 20 });

for (const entry of personData.entries()) {
  console.log(entry); // logs always array of 2 items, the key and the value
}

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}
```

- `Maps` vs. `Objects`

  - `Maps`
    - can use ANY values (and types) as keys
    - better performance for large quantities of data
    - better performance when adding + removing data frequently
  - `Objects`
    - only may use `strings`, `numbers` or `symbols` as keys
    - perfect for small/medium-sized sets of data
    - easier and quicker to create (typically also with better performance)

- `WeakSets`

  - created with `new WeakSet()`
  - only provides methods `add`, `delete`, `has`
  - `WeakSet` allows `garbage collection` of stored e.g. objects, as long as no other part of your code uses this same object -> would not be garbage collected in a normal `Set`

- `WeakMaps`
  - similar idea with `garbage collection` as for `WeakSet`
  - created with `new WeakMap()`
  - only provides methods `get`, `has`, `delete`, `set`

## Objects

- `objects` are made up of `properties` and `methods`
  - store data in properties and actions in methods
  - all `reference` values are in the end `objects`, BUT objects consists in the end, sometimes deep nested of primitive values
- `object literal`: `{...}`
- remove object property: `delete objectName.property`
