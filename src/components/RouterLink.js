class RouterLink extends HTMLElement {
    constructor() {
        //Always call super first in constructor.
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <a href="#"><slot></slot></a>
    `
    }
}

customElements.define('router-link', RouterLink)

export default RouterLink