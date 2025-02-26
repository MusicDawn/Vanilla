const about = {
    /**
     * @ param render is inside about/home.js files as an arrow function
     */
    render: () => `<h2>About</h2>`
}

//The line below brings about to global scope!
// window.about = about

export default about