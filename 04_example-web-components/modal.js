class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false; // such properties can be accessed in JavaScript from light DOM
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 1;
          opacity: 0;
          pointer-events: none;
        }
        :host([open]) #backdrop,
        :host([open]) #modal {
          opacity: 1;
          pointer-events: all;
        }
        :host([open]) #modal {
          top: 15vh;
        }
        #modal {
          position: fixed;;
          top: 10vh;
          left: 25%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 50%;
          background-color: #fff;
          z-index: 2;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease-out;
        }
        header {
          padding: 1rem;
          border-bottom: 1px solid #ccc;
        }
        ::slotted(h1) {
          font-size: 1.25rem;
          margin: 0;
        }
        #main {
          padding: 1rem;
        }
        #actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          border-top: 1px solid #ccc;
          padding: 1rem;
        }
      </style>
      <div id="backdrop"></div>
      <div id="modal">
        <header>
          <slot name="title">Please Confirm</slot>
        </header>
        <section id="main">
          <slot></slot>
        </section>
        <section id="actions">
          <button id="button-cancel">Cancel</button>
          <button id="button-confirm">Okay</button>
        </section>
        </div>
    `;
    const slots = this.shadowRoot.querySelectorAll('slot');
    // slotchange event for slot content changes
    slots[1].addEventListener('slotchange', (event) => {
      console.dir(slots[1].assignedNodes());
    });
    const backdrop = this.shadowRoot.getElementById('backdrop');
    const cancelButton = this.shadowRoot.getElementById('button-cancel');
    const confirmButton = this.shadowRoot.getElementById('button-confirm');
    backdrop.addEventListener('click', this._cancel.bind(this));
    cancelButton.addEventListener('click', this._cancel.bind(this));
    confirmButton.addEventListener('click', this._confirm.bind(this));
    // cancelButton.addEventListener('cancel', () => console.log('Cancel event triggered'));
  }

  attributeChangedCallback(name, prevValue, newValue) {
    this.isOpen = this.hasAttribute('open');
  }

  static get observedAttributes() {
    return ['open'];
  }

  open() {
    this.setAttribute('open', '');
  }

  hide() {
    this.removeAttribute('open');
  }

  _cancel(event) {
    this.hide();
    // OPTION 1: define and dispatch a custom event
    // "bubbles: true" defines that event bubbles up to parent to parent to parent element until an event listener is found
    // "composed: true" defines that event can bubble also from shadow DOM to light DOM
    // because without bubbling and composed, dispatched event would ONLY be available for event.target (= cancelButton)
    const cancelEvent = new Event('cancel', { bubbles: true, composed: true });
    event.target.dispatchEvent(cancelEvent);
  }

  _confirm() {
    this.hide();
    // OPTION 2: define and dispatch a custom event
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent);
  }
}

customElements.define('mp-modal', Modal);
