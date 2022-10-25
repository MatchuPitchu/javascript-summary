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

## Document and Windows Object

![](/slides/19_document-and-window.png)

- global `window` object provides build-in browser methods like `alert()`, `setTimeout()` etc. -> you don't need to write `window.alert()` to call them
- event the `document` object is a part of the `window` object

## Spread Operator

```TypeScript
// Arrays
const arr = [10, 2, 5, 4];
const copiedArr = [...arr]; // creates new shallow (!) copy

const minNumber = Math.min(...arr) // returns min number of spread array

const arrOfObjects = [{age: 10}, {age: 20}];
const copiedArrOfObjects = [...arrOfObjects];
arrOfObjects[0].age = 15 // change occurs in both arrays since only reference addresses to objects are spread into copied array, so there are the same

const copiedArrOfObjects2 = arrOfObjects.map((obj) => ({ age: obj.age })); // way to create really new copy of objects in item, map method returns new array with new object for each item in array
```

```TypeScript
// Objects
const obj = {
  name: 'Matchu',
  age: 20,
  hobbies: ['piano', 'coding'],
};

const copiedObj = { ...person, age: 30, hobbies: [...obj.hobbies] }; // 'age: 30' overwrites spread age value, [...obj.hobbies] creates a new copy of nested array
```

## Destructuring

- destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
- for `arrays`: data is pulled out in the order of array

```TypeScript
const arr = ['Matchu', 'Pitchu', 'hello', 'world'];
const [firstName, lastName, ...restData] = arr; // use rest operator to bundle the remaining items of array
```

## Error Object

```TypeScript
// throw a new error object (notice: you can throw everything, e.g. throw 'foo')
throw new Error('Error message'); // allows to see the stack trace in  the console

const error = new Error('Error message');
error.code = 404; // add error code to object
console.log(error); // prints directly the error message with stack trace
console.dir(error); // prints error object
```

## Asynchronous JavaScript

![](/slides/37_single-threaded-javascript.png)

![](/slides/38_single-threaded-javscript-2.png)

![](/slides/39_async-operation-javascript.png)

### Event Loop, Queue and Async Code

- `JavaScript` is single-threaded but offloads longer-taking tasks (e.g. timers) to the browser (which uses multiple threads)

```TypeScript
const greet = () => console.log('Hello');

const showAlert = () => alert('Danger');

setTimeout(showAlert, 2000)

greet();
```

- [1] setTimeout is put on the `stack` and called -> it's a `(Browser) APIs` (like DOM API, navigator.geolocation ...) and that's why it's moved from the `stack` to the `browser` which takes care of this ongoing timer -> after end of timeout (imagine for this scenario that this would happen between [2] and [3]), `showAlert()` is put on the `message queue` (i.e. function is registered as a todo)
- [2] `greet()` is called
- [3] `console.log()` inside greet is called
- [4] `stack` with [2] and [3] will finish first
- [5] `Event Loop` pushes `showAlert` inside the `message queue` into the `stack` -> `Event Loop` synchronizes the call stack with the waiting messages, so it runs the whole time to check if `stack` is empty and if there are registered todos

![](/slides/40_event-loop-stack-queue.png)

```TypeScript
// Example
const trackUserHandler = () => {
  // call of async Browser API
  navigator,geolocation.getCurrentPosition(
    (positionData) => console.log(positionData),
    (error) => console.error(error)
  );
  // this log executes always earlier than the success callback or error callback inside of the geolocation API
  console.log('Getting position ...');
};
```

### Promises

- 3 different promise states:
  - `Pending`: Promise is doing work, neither `then()`nor `catch()` executes this moment
  - `Resolved`: Promise is resolved, `then()` executes
  - `Rejected`: Promise was rejected, `catch()` executes
- when you have another `then()` block after a `catch()` or `then()` block, the promise re-enters `pending` mode (-> `then()` and `catch()` always return a new promise - either not resolving to anything or resolving to what you return inside of `then()`)
- only if there are no more `then()` blocks left, it enters a new, final mode: `settled`
- once `settled`, you can use special block `finally()` to do final cleanup work
  - `finally()` is reached no matter if you resolved or rejected before, but you do NOT have to use it

```TypeScript
// [1] Example: promisefy setTimeout()
const setTimer = (duration) => {
  // create a new Promise object with help of an anonymous function where to parameters as functions are passed in (resolve + reject fn)
  const promise = new Promise((resolve, reject) => {
    setTmeout(() => {
      // when executed, resolve() will mark promise as successfully done
      // you can pass as argument whatever you want (string, array, object)
      resolve('Done');
    }, duration);
  });
  return promise;

};

setTimer(3000).then(data => {
  console.log(data); // 'Done'
});

// [2] Example: promisefy navigator.geolocation.getCurrentPosition() AND promise chaining
const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success) => {
      resolve(success);
    }, (error) => {
      reject(error); // marks promise as failed
    }, options)
  })
}

let geoData = {};

getPosition()
  .then((positionData) => {
    geoData = positionData;
    // reset resolved promise here to pending state to integrate another promise
    // you could also return simply data or a string (NOT have to be a promise) that would be wrapped in a promise, immediately resolved and passed as argument into the next then-block
    return setTimer(2000);
  })
  .then((timerData) => {
    console.log(timerData, geoData);
  })
  .catch((err) => {
    // if any of the promises in the chain prior of catch block fails, then 'then blocks' are interrupted and catch block continues with passed argument of reject()
    // but if there is 'then block' afterwards, promise chain continues und you can even return something in catch block
    console.log(err);
    return 'promise chain continues'
  }
```

- methods on `Promise`

```JavaScript
// [1] race method takes array of promises and ONLY resolves the fastes promise (-> other promises are not cancelled, just the result is ignored)
Promise.race([getPosition(), setTimer(2000)]).then(data => console.log(data));

// [2] all method takes array of promises and returns array of all resolved promises, BUT ONLY if all promises were successfully resolved, otherwise if one is rejected, then catch block would be executed
Promise.all([getPostion(), settimer(2000)]).then(promisesData => console.log(promisesData));

// [3] as [2] but returns an object with information about all promises (which failed, which succeeded)
Promise.allSettled([getPostion(), settimer(2000)]).then(promisesData => console.log(promisesData));
```

### Async Await Syntax

- you can use `async`/`await` in functions: it's `syntactic sugar` and `async` wraps the whole function into a promise and with `await` the `then blocks` are working behind the scenes
- `async` added to a function, this function will automatically return a promise
- the code seems to be synchronous, but is asynchronous under the hood
- when code line is resolved with `await`, then next line is executed
- error handling with `try` and `catch`

```JavaScript
const trackUserPosition = async () => {
  let positionData = {};
  let timerData = '';

  try {
    positionData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error)
  };
  // this line will always run, no matter if promises inside try block were successfully resolved or rejected and moved into the catch block
  console.log(timerData, geoData);
}
```

## HTTP Requests

- how websites work: <https://academind.com/tutorials/how-the-web-works>

![](/slides/41_http-overview.png)

- `{JSON} Placeholder`: Free fake API for testing and prototyping <http://jsonplaceholder.typicode.com/>

### JavaScript Object Notation (JSON) Data Deep Dive

- JSON data supports:

  - `objects` (`{}`)
  - `arrays` (`[]`)
  - `strings` (MUST use `double-quotes`)
  - `numbers` (NO quotes)
  - `booleans` (also NO quotes)
  - `object keys` (e.g. "name") HAVE to be wrapped by double quotes

- JSON "object" is `wrapped in quotes` itself because JSON data in the end is just a string that contains data in the format shown above

```JSON
{
  "name": "Max",
  "age": 30,
  "hobbies": [
    { "id": "h1", "title": "Sports" },
    { "id": "h2", "title": "Cooking" }
  ],
  "isInstructor": true
}
```

### Fetch API

- globally available built-in browser function: `fetch()`
- `fetch` is promise based, i.e. return value is always a promise object

```TypeScript
type HttpMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const sendHttpRequest = async (method: HttpMethods, url: string, data?: any) => {
  const options = {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json', // inform server that json data will be sent
    },
  };

  const response = await fetch(url, options);
  if (response.statusText === 'OK') {
    return response.json();
  } else {
    console.log(response);
    throw new Error('Something went wrong');
  }
};

// GET Request
const fetchPosts = async (url: string) => {
  try {
    const data = await sendHttpRequest('GET', url);
    console.log(data);
  } catch (error: unknown) {
    console.log(error);
  }
};

fetchPosts('http://jsonplaceholder.typicode.com/posts');
```

## Third Party Libraries

- add utility functions
- help to use generic logic that has already been solved in many other projects before
- Examples of libraries:

  - `lodash`: <https://lodash.com>

- Import libraries:
  - [1] when added in the HTML head, always insert third party library before your script (that uses library)

```HTML
<head>
  <script scr='library.min.js' defer></script>
  <script scr='your-app.js' defer></script>
</head>

```
