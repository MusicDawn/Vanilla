import { useCounterStore } from "../store/counter.js"
let counter = useCounterStore

const home = {
    render: () => {
        const template = document.createElement('template')
        template.innerHTML = `
        <h2>Home</h2>
        <p>Home Count: <span id="count">${counter.count}</span></p>
        <p>Double Home Count: <span id="doublecount">${counter.doubleCount}</span></p>
        <button id="incrementBtn">Increment</button>
        `

       
        let clone = template.content.cloneNode(true)
        const incrementBtn = clone.querySelector('#incrementBtn')
        incrementBtn.addEventListener('click', () => {
            counter.increment()
            home.update()
        })

        return clone

    },

    update: () => {
        document.getElementById('count').innerHTML = counter.count
        document.getElementById('doublecount').innerHTML = counter.doubleCount
    }
}


//The line below brings home to global scope! 
// window.home = home

export default home