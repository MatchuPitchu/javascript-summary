class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (event) => {
      // confirm() is browser built-in method where user can confirm or deny a question
      if (!confirm('Do you really want to leave?')) {
        event.preventDefault();
      }
    });
  }
}

// Whenever you extend a specific element (not a basic HTMLElement), you have to add third argument
customElements.define('confirm-link', ConfirmLink, { extends: 'a' });
