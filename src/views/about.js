import { computed } from '../library/vue.js'
import { useConfigStore } from '../store/config.js'
import { useCounterStoreComp, useCounterStoreOpt } from "../store/counter.js"

const configStore = useConfigStore
const useCompositionAPI = computed(() => configStore.useCompositionAPI.value);


const counter = computed(() => useCompositionAPI.value ? useCounterStoreComp : useCounterStoreOpt)
const getCount = () => useCompositionAPI.value ? counter.value.count.value : counter.value.count 
const getDoubleCount = () => useCompositionAPI.value ? counter.value.doubleCount.value : counter.value.doubleCount 


const about = {
    render: () => {
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>About</h2>
        <p>about Count: <span id="count">${getCount()}</span></p>
        <p>Double about Count: <span id="doublecount">${getDoubleCount()}</span></p>
        <button id="incrementBtn">Increment</button>
        `


        let clone = template.content.cloneNode(true)
        const incrementBtn = clone.querySelector('#incrementBtn')
        incrementBtn.addEventListener('click', () => {
            counter.value.increment()
            about.update()
        })

        return clone

    },

    update: () => {
        document.getElementById('count').innerHTML = getCount()
        document.getElementById('doublecount').innerHTML = getDoubleCount()
    }
}


//The line below brings about to global scope! 
// window.about = about

export default about