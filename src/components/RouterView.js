class RouterView extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const template = document.createElement('template')
        template.innerHTML = `        
         <div id="container"></div>
        `

        let clone = template.content.cloneNode(true)
        this.appendChild(clone)
    }
}

//Here we create the custom tag, as <router-view></router-view>
customElements.define('router-view', RouterView)

export default RouterView