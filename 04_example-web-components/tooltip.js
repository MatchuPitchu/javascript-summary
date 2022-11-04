// every custom element has to extend HTMLElement
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._container;
    this._icon;
    this._text = 'Default tooltip text';
    this._tooltipVisible = false;
    // [1] attach a shadow DOM to the custom element
    // mode: A string specifying the encapsulation mode for the shadow DOM tree.
    // 'open': elements of the shadow root are accessible from JS outside the root, for example using Element.shadowRoot
    this.attachShadow({ mode: 'open' });
    // [2] append template to your custom element with custom styles
    // :host -> to style custom element; apply styling conditionally if certain class, id, attribute
    // is set on custom element in light DOM, us :host(YOUR_SELECTOR)
    // ::slotted() -> to style "slot" content of light DOM inside shadow DOM
    // pass * as argument to select ALL slotted content, otherwise you can pass
    // all normal CSS selectors, but NO child selector (e.g. span a)
    // Notice: light DOM styling overwrites shadow DOM styling here
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        :host {
          background-color: #ccc;
        }
        :host(.important) {
          color: var(--color-primary, #4a4a4a);
          background-color: #e2b664;
        }
        ::slotted(.highlight) {
          border-bottom: 2px solid red;
        }
        div {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          color: #fff;
          background-color: #4a4a4a;
          padding: 5px 10px;
          border-radius: 4px;
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26);
          z-index: 1;
        }
        #icon {
          position: relative;
          cursor: default;
        }
      </style>
      <slot>Default slot text, if nothing is set between custom element tags in light DOM</slot>
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
    // render custom element on mount
    this._render();
  }

  // [6] observing attribute changes on custom element in light DOM
  attributeChangedCallback(name, prevValue, newValue) {
    if (prevValue === newValue) return;
    if (name === 'text') {
      this._text = newValue;
    }
  }

  // [6.1] establish connection which attributes you want to observe
  static get observedAttributes() {
    return ['text'];
  }

  // [7] clean up work when custom element is removed from DOM
  disconnectedCallback() {
    console.log('disconnected');
    // you do NOT have to remove event listeners here, since browser does it automtically for all DOM elements
  }

  // [8] custom logic to define how DOM should be updated
  _render() {
    if (this._tooltipVisible) {
      this._container = document.createElement('div');
      this._container.textContent = this._text;
      this.shadowRoot.getElementById('icon').appendChild(this._container);
    }

    if (!this._tooltipVisible && this._container) {
      this.shadowRoot.getElementById('icon').removeChild(this._container);
    }
  }

  // [9] methods responsible for updating data that results in re-rendering
  _showTooltip() {
    this._tooltipVisible = true;
    this._render();
  }

  _hideTooltip() {
    this._tooltipVisible = false;
    this._render();
  }
}

// built-in method to make a custom element available as HTML element
// Rule: string name should consist at least of 2 words separated by a dash
customElements.define('mp-tooltip', Tooltip);
