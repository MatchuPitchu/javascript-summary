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
