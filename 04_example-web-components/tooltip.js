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
