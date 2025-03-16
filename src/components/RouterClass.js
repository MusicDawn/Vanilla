class RouterClass extends HTMLElement {
    constructor() {
      //Always call super first in constructor.
      super();
      this.attachShadow({ mode: "open" });
    }
  
    // static get observedAttributes() {
    //   return [this.attribute];
    // }
  
    // attributeChangedCallback(name, oldValue, newValue) {
    //   if (name === this.attribute) {
    //     this.render();
    //   }
    // }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
        throw new Error("A render() class is required!")
    }
  }  

  export default RouterClass; 