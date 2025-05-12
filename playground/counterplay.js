//---Regular function
function person() {
    return {
        name: "Panos",
        Lastname: "Kostakis",
        greet() {
            console.log(`Regular my name is ${this.name} ${this.Lastname} !`)
        }
    }
}

person().greet()



//---Getter function
const personGet =
{
    name: "Panos",
    LastName: "Kostakis",
    get greet(){
        console.log(`Getter my name is ${this.name} ${this.LastName} !`)
    }
}

personGet.greet