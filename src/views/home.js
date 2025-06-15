import { computed } from '../library/vue.js'
import { useConfigStore } from '../store/config.js'
import { useCounterStoreComp, useCounterStoreOpt } from "../store/counter.js"

const configStore = useConfigStore

const counter = computed(() => configStore.useCompositionAPI ? useCounterStoreComp : useCounterStoreOpt)
const home = {
    render: () => {
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Home</h2>
        <p>Home Count: <span id="count">${counter.value.count.value}</span></p>
        <p>Double Home Count: <span id="doublecount">${counter.doubleCount}</span></p>
        <button id="incrementBtn">Increment</button>
        `


        let clone = template.content.cloneNode(true)
        const incrementBtn = clone.querySelector('#incrementBtn')
        incrementBtn.addEventListener('click', () => {
            counter.value.increment()
            home.update()
        })

        return clone

    },

    update: () => {
        document.getElementById('count').innerHTML = counter.value.count.value
        document.getElementById('doublecount').innerHTML = counter.doubleCount
    }
}


//The line below brings home to global scope! 
// window.home = home

export default home