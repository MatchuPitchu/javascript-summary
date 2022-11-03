# Web Components

![](/00_slides/54_web-components-overview.png)

## Why Web Components

- `encapsulate logic and UI`:
  - easy to understand
  - easy to maintain
  - separation of concerns
- `re-usable across a page`
  - use it just like a normal HTML element
  - don't worry about overlapping logic
  - write logic and UI only once
- `re-usable between apps and projects`
  - use it just like a normal HTML element
  - re-use core UI elements across projects
  - write logic and UI only once

## Types of Custom Elements (-> Web Components)

- `autonomous elements`
- `extended built-in elements`: e.g. extend a button to your own custom button

## Web Component Lifecycle

- `constructor()`: is called when element is created; use it for basic initialization
- `connectedCallback()`: is called when element is attached to DOM; use it for DOM initialization
- `disconnectedCallback()`: is called when element is detached from DOM; use it for cleanup work
- `attributeChangedCallback()`: this observes attribute updates; use it to update data and DOM

## Light and Shadow DOM

- `light DOM` is the normal, accessible DOM that you can see in the browser
- `shadow DOM` is a proper DOM of an HTML element that is invisible for users in the browser AND not directly connected to the real DOM (i.e. is not affected by global css)

## Example Custom Tooltip

```HTML
<p><mp-tooltip text="Web Components is a set of standards.">Web Components</mp-tooltip> are nice.</p>

<mp-tooltip></mp-tooltip>
```

```JavaScript
// every custom element has to extend HTMLElement
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._container;
    this._icon;
    this._text = 'Default text';
    // [1] attach a shadow DOM to the custom element
    // mode: A string specifying the encapsulation mode for the shadow DOM tree.
    // 'open': elements of the shadow root are accessible from JS outside the root, for example using Element.shadowRoot
    this.attachShadow({ mode: 'open' });
    // [2] append template to your custom element
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        :root {
          position: relative;
        }

        div {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
          color: #fff;
          background-color: #4a4a4a;
          padding: 5px 10px;
          border-radius: 4px;
          z-index: 1;
        }
        #icon {
          position: relative;
          cursor: pointer;
        }
      </style>
      <slot>Default Slot Text, if nothing set between custom element tags</slot>
      <sup id='icon'>&#9432;</sup>
    `;
  }

  connectedCallback() {
    // [3] get value of a custom attribute and store it into variable that is accessible inside class
    if (this.hasAttribute('text')) {
      this._text = this.getAttribute('text');
    }

    // [4] actions when mouse enters or leaves element
    this._icon = this.shadowRoot.getElementById('icon');
    this._icon.addEventListener('mouseenter', this._showTooltip.bind(this));
    this._icon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    // [5] append an element to the shadow DOM root
    // "this" refers to the current class, i.e. the shell HTML element
    this.shadowRoot.appendChild(this._icon);
  }

  _showTooltip() {
    this._container = document.createElement('div');
    this._container.textContent = this._text;
    this.shadowRoot.getElementById('icon').appendChild(this._container);
  }

  _hideTooltip() {
    this.shadowRoot.getElementById('icon').removeChild(this._container);
  }
}

// built-in method to make a custom element available as HTML element
// Rule: string name should consist at least of 2 words separated by a dash
customElements.define('mp-tooltip', Tooltip);
```
