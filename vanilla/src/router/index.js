import home from '../views/home.js'
import about from '../views/about.js'

let app = document.getElementById('app')
app.innerHTML = home
function router(id) {
    if (id == 'home') app.innerHTML = home
    else if (id == 'about') app.innerHTML = about
}

export default router
