// Here we will store function that exist in Vue.js
function ref(initVal) {
    return {
        value: initVal
    }
}

function computed(getter) {
    return {
        get value() {
            return getter()
        }
    }
}

export { ref, computed }