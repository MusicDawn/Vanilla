
class RouterLink extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    const template = document.createElement('template')
    template.innerHTML = `
        <style>
            a
            {
                text-decoration: none;
                color: green;
                padding: 0 10px;
            }
        </style>        
          <a href="#/">Home</a>
          <a href="#/about">About</a>
          <a href="#/reactive">reactive</a>
       `
       
    let clone = template.content.cloneNode(true)
    this.appendChild(clone)
  }
}

customElements.define("router-link", RouterLink);

export default RouterLink;
