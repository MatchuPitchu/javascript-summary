# Events in JavaScript

Documentation: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events>

- run code upon certain events
- events typically transport data
- exact implementation differs:
  - Browser: `addEventListener('EVENT_NAME', (event) => { ... })`
  - NodeJS: `on('EVENT_NAME', (event) => { ... })`

## Different Ways of Listening to Events

- `RECOMMENDED`: `addEventListener` and `removeEventListener` methods

  - advantage: you can register multiple events also of same type on the element

  ```TypeScript
  const button = document.querySelector('button');
  const handleButtonClick = () => {
    // ...
  };
  button.addEventListener('click', handleButtonClick);

  // [1] to remove you have to point exactly to the same function object
  button.removeEventListener('click', handleButtonClick);

  // [2] to remove use AbortController
  const controller = new AbortController();
  button.addEventListener('click', handleButtonClick, { signal: controller.signal });  // pass an AbortSignal to this handler
  controller.abort(); // removes all event handlers associated with this controller
  ```

- `NOT RECOMMENDED`: `onclick` property

  ```TypeScript
  const button = document.querySelector('button');
  const handleButtonClick = () => {
    // ...
  };
  button.onclick = handleButtonClick;
  ```

- `AVOID`: mixing HTML and JavaScript, hard to maintain

  ```HTML
  <button onclick="alert('Hello')")></button>
  ```

## Event Object

```TypeScript
const handleButtonClick = (event) => {
  // ...
};

button.addEventListener('click', handleButtonClick);
```

## Bubbling and Capturing Phases of Events

- `Bubbling`: events are executed from inside to outside
  - default behavior when you add event with `addEventListener`: first events of inner element is triggered, then browser checks ancestor for an event and so on
- `Capturing`: events are executed from outside to inside
- `Event.bubbles` read-only property indicates whether the event bubbles up through the DOM tree or not.

![](/00_slides/36_bubbling-capturing-events.png)

```TypeScript
const outerEl = document.querySelector('div');
const innerEl = document.querySelector('button');

// [1]
outerEl.addEventListener('click', (event) => {
  console.log('SECOND')
});

innerEl.addEventListener('click', (event) => {
  console.log('FIRST')
});

// [2]
outerEl.addEventListener('click', (event) => {
  console.log('FIRST')
}, true); // set to true to active capturing phase for this event

innerEl.addEventListener('click', (event) => {
  console.log('SECOND')
})

// [2]
outerEl.addEventListener('click', (event) => {
  console.log('NOT CALLED if clicked on button')
});

innerEl.addEventListener('click', (event) => {
  event.stopPropagation(); // any other listeners for the same type of event on ancestor elements will not be triggered
  console.log('FIRST')
})
```

## Event Delegation

```HTML
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
```

```TypeScript
const items = document.querySelectorAll('li');

// [1] Approach WITHOUT event delegation: every li gets an event
items.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.target.classList.toggle('highlight')
  })
}

// [2] Approach WITH event delegation: register only one event and toggle class of target
const list = document.querySelector('ul')

list.addEventListener('click', (event) => {
  console.log(event.currentTarget); // selects ul event if a child element was clicked
  event.target.classList.toggle('highlight')
})

// [3] Approach WITH event delegation and complex child elements (e.g. <h2> and <p> inside of <li>)
list.addEventListener('click', (event) => {
  // closest() search for the next ancestor element or works also when the searched element is clicked itself
  event.target.closest('li').classList.toggle('highlight');
})
```

## Triggering DOM Elements Programmatically

```TypeScript
const list = document.querySelector('ul')
const form = document.querySelector('form');
const formButton = document.querySelector('button');

list.addEventListener('click', (event) => {
  event.target.closest('li').classList.toggle('highlight');
  // trigger click or submit on form inside another function
  form.submit(); // notice: would bypass the event.preventDefault() and reload page
  formButton.click(); // triggers button click, when you add preventDefault() inside event handler, then no reload of page
})
```
