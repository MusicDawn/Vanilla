function defineStore(id, storeSetup) {
    // $store = new storeSetup()
    const store = storeSetup()
    // _id is a convention it is similar with private in php classes
    store._id = id
    return store
}

export { defineStore }