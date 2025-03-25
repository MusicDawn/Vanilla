import RouterClass from "./RouterClass.js";

class RouterView extends RouterClass {
    constructor() {
        super();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <div id="container"></div>
    `
    }
}

//Here we create the custom tag, as <router-view></router-view>
customElements.define('router-view', RouterView)

export default RouterView