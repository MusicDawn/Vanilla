function toUppercaseClosure(next) {
    return function(input){
        next(input.toUpperCase())
    }
}

function print(input){
    console.log(input)
}

const upperCased = toUppercaseClosure(print)

upperCased("Hello")

//Proxy
const target = {
    message: "Yoo"
}