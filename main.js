//This is the entry point of all JS


import home from '/components/home.js'
import about from '/components/about.js'

let container = document.getElementById('container')
container.innerHTML = home
function showObject(id) {
    if (id == 'home') container.innerHTML = home
    else if (id == 'about') container.innerHTML = about
}

//The line below brings showObject to global scope!
window.showObject = showObject