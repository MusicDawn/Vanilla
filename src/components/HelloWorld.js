import RouterClass from "./RouterClass.js";

class HelloWorld extends RouterClass {
  constructor() {
    //Always call super first in constructor.
    super();
  }
 
  
  render() {
    const msg = this.getAttribute('msg') || 'Add msg';
    this.shadowRoot.innerHTML = `
          <style>
              div
              {
                 font-size: 35px;
                 color: blue;
                 padding: 0 10px;
              }
          </style>        
          <div>"${msg}"</div>
      `;
  }
}

customElements.define("hello-world", HelloWorld);

export default HelloWorld;
