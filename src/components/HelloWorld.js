class HelloWorld extends HTMLElement {
  constructor() {
    //Always call super first in constructor.
    super();
  }


  connectedCallback() {
    // getAttribute as method
    const msg = this.getAttribute('msg') || 'Add msg';
    this.innerHTML = `
          <style>
              #hw {
                 font-size: 35px;
                 color: blue;
                 padding: 0 10px;
              }
          </style>
          <template id="template-hw">
            <div id="hw" >"${msg}"</div>
          </template>
      `
      const template = document.querySelector('#template-hw')
      let clone = template.content.cloneNode(true)
      // appendChild is the method that adds content to the child of the tag we are reffering to.(in our case is this. and this is the Hello World tag).
      this.appendChild(clone)
  }
}

//Here we create the custom tag, as <hello-world></hello-world>
customElements.define("hello-world", HelloWorld);

export default HelloWorld;
