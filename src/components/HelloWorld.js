import RouterClass from "./RouterClass.js";

class HelloWorld extends RouterClass {
  constructor() {
    //Always call super first in constructor.
    super();
  }
 
  
  render() {
    // getAttribute as method
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

//Here we create the custom tag, as <hello-world></hello-world>
customElements.define("hello-world", HelloWorld);

export default HelloWorld;
