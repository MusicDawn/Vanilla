//---Regular function
function person() {
    return {
        name: "Panos",
        Lastname: "Kostakis",
        // The key is the function greet() and the oblect it's content,
        // ,(console.log(`Regular my name is ${this.name} ${this.Lastname} !`))
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
    // The key is the function greet() and the oblect it's content,
    // ,(console.log(`Getter my name is ${this.name} ${this.LastName} !`))
    get greet() {
        console.log(`Getter my name is ${this.name} ${this.LastName} !`)
    }
}
// console.log(personGet.name)

personGet.greet