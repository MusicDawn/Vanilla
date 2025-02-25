const nav = ` <nav>
    <button onclick="router('home')">Home</button>
    <button onclick="router('about')">About</button>
</nav>`

const App = document.getElementById('app').innerHTML = nav

export default App
