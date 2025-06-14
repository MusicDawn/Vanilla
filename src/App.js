import RouterView from "./components/RouterView.js"
import RouterLink from "./components/RouterLink.js"
import HelloWorld from "./components/HelloWorld.js"

const template = document.createElement('template')
template.innerHTML = `
<hello-world msg="Hello World"></hello-world>
<router-link></router-link>
<router-view></router-view>
`
const App = document.getElementById('app')
let clone = template.content.cloneNode(true)
App.appendChild(clone)
export default App
