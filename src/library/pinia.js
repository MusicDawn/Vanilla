function defineStore(id, storeSetup) {
    if (id == 'counterComp' || id == 'config') {
        // $store = new storeSetup()
        const store = storeSetup()
        // _id is a convention it is similar with private in php classes
        store._id = id
        return store
    }
    else if (id == 'counterOpt') {
        const state = storeSetup.state()
        const getters = storeSetup.getters
        const actions = storeSetup.actions

        const store = {
            _id: id,
            ...state
        }

        Object.defineProperty(store, 'doubleCount', {
            get() {
                return getters.doubleCount(store)
            }
        })
        store.increment = actions.increment.bind(store)

        return store
    }
}
export { defineStore } 