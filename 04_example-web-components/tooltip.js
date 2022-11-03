// every custom element has to extend HTMLElement
class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // append HTML elements to your custom element
    const icon = document.createElement('span');
    icon.textContent = ' (?)';
    this.appendChild(icon);
  }
}

// built-in method to make a custom element available as HTML element
// Rule: string name should consist at least of 2 words separated by a dash
customElements.define('mp-tooltip', Tooltip);
