import { createComponent, reactive, ref } from "../library/vue.js"
import { computed } from '../library/vue.js'
import { useConfigStore } from '../store/config.js';
const configStore = useConfigStore
const useCompositionAPI = computed(() => configStore.useCompositionAPI.value)
console.log(useCompositionAPI.value)
// Options API style
const optionsObj = createComponent({
    data() {
        return {
            user: {
                name: "Panos",
                city: "New York"
            },
            nameBool: true
        }
    },
    methods: {
        toggleName() {
            this.nameBool = !this.nameBool
            this.nameBool ? this.user.name = "Panos1" : this.user.name = "Panos1"
            console.log("Options Toggle")
            return this.user.name
        }
    }
})
// Composition API style
const ReactiveView = {
    setupResult: null,
    setup() {
        const user = reactive({
            name: "Panos2",
            city: "New York"
        })

        const nameBool = ref(true)

        const toggleName = () => {
            nameBool.value = !nameBool.value
            nameBool.value ? user.name = "Panos2" : user.name = "Panos2"
            console.log("Composition toggle")
            return user.name
        }

        return {
            user,
            toggleName
        }
    },
    render() {
        this.setupResult = this.setup()
        const { user, toggleName } = this.setupResult
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Reactive View Page</h2>
        <h3 id="name">${useCompositionAPI.value ? user.name : optionsObj.state.user.name}</h3>
                
        <button id="toggleNameBtn">ToggleName</button>
        `
        let clone = template.content.cloneNode(true)
        const toggleNameBtn = clone.querySelector('#toggleNameBtn')
        toggleNameBtn.addEventListener('click', () => {
            useCompositionAPI.value ? toggleName() : optionsObj.methods.toggleName()
            ReactiveView.update()

        })


        return clone
    },
    update() {
        document.getElementById('name').innerHTML = useCompositionAPI.value ? this.setupResult.user.name : optionsObj.state.user.name
    }
}

export default ReactiveView