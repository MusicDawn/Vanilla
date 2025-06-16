import RouterView from "./components/RouterView.js"
import RouterLink from "./components/RouterLink.js"
import HelloWorld from "./components/HelloWorld.js"
import { computed } from "./library/vue.js"
import { useConfigStore } from './store/config.js'
const configStore = useConfigStore
window.configStore = configStore
// console.log(window.configStore)

const useCompositionAPI = computed(()=>configStore.useCompositionAPI.value)


const template = document.createElement('template')
template.innerHTML = `
<hello-world msg="Hello World"></hello-world>
<router-link></router-link>
<button id="toggleAPI" onclick="window.configStore.toggleAPI()">${useCompositionAPI.value ? 'Composition' : 'Options'}</button>
<router-view></router-view>
`
const App = document.getElementById('app')
let clone = template.content.cloneNode(true)
App.appendChild(clone)

let toggleAPI = document.getElementById('toggleAPI')
toggleAPI.addEventListener('click', () => {
    toggleAPI.innerHTML = configStore.useCompositionAPI.value ? 'Composition' : 'Options'
    console.log(useCompositionAPI ? 'Composition' : 'Options')
})

export default App