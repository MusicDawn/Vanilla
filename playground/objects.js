function classic() {
    return "Hello from classic()"
}


//In arrow function you don't have to write return, it is implied.
const Arrow = () => "Hello from Arrow()"


//Funtions inside objects.
const Obj = {
    objClassic: function () {return "Hello from objClassic()"},
    objArrow : () => "Hello from ObjArrow()",
    //Getter
    get objGetter(){ return "Hello from Obj Getter"}
}



const spreadObj = {
    //This is not a key/value pair, but it spreads the contentsof the object or arry it is attached to.
    //Basicly it adds the contents of another object into the object that we working on.
    ...Obj,
    name: "Panos"
}

// Here we adding new key value pairs to the spreadObj object, that can't be deleted ??
Object.defineProperty(spreadObj, "date", { value: "Jan 1st", enumerable: true})


// console.log(classic())
// console.log(Arrow())
// console.log(Obj.objClassic())
// console.log(Obj.objArrow())
// console.log(Obj.objGetter)
console.log(spreadObj)