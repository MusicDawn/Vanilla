import { createComponent } from "../library/vue.js"

const optionsObj = createComponent({
    data() {
        return {
            user: {
                name: "Panos",
                city: "Melanes"
            },
            nameBool: true
        }
    },
    methods: {
        toggleName(){
            // nameBool: true
            this.nameBool = !this.nameBool
            this.nameBool ? this.user.name = "Panos" : this.user.name = "Sasa Mpasta"
            return this.user.name
        }
    }
})

const ReactiveView = {
  render: () => {
    const template = document.createElement("template");
    template.innerHTML = `
        <h2>Reactive View</h2>
        <h3 id ="name">${optionsObj.state.user.name}</h3>
        <button id="toggleNameBtn">toggleName</button>
        `;

    let clone = template.content.cloneNode(true);
    const toggleNameBtn = clone.querySelector("#toggleNameBtn");
    toggleNameBtn.addEventListener("click", () => {
      optionsObj.methods.toggleName();
      ReactiveView.update();
    });

    return clone;
  },

  update: () => {
    document.getElementById("name").innerHTML = optionsObj.state.user.name
  },
};

//The line below brings home to global scope!
// window.home = home

export default ReactiveView