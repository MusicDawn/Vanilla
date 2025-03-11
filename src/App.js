import RouterView from "./components/RouterView.js"
import RouterLink from "./components/RouterLink.js"

const nav = `<nav>
    <router-link>Home</router-link>
    <router-link>About</router-link>
</nav>
<router-view></router-view>
`

const App = document.getElementById('app').innerHTML = nav

export default App
