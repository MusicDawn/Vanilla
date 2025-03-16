import RouterClass from "./RouterClass.js";

class RouterLink extends RouterClass {
  constructor() {
    super();
  }

 
  render() {
    const to = this.getAttribute('to') || '/';
    this.shadowRoot.innerHTML = `
        <style>
            a
            {
                text-decoration: none;
                color: green;
                padding: 0 10px;
            }
        </style>        
        <a href="${to}"><slot></slot></a>
    `;
  }
}

customElements.define("router-link", RouterLink);

export default RouterLink;
