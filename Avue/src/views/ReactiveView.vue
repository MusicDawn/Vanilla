<script lang="ts">
export default {
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
}
</script>

<template>
    <div id="title">
        <h1>Reactive View page</h1>
        <h2>{{ user.name }}</h2>
        <button @click="toggleName">Click Me!</button>
    </div>
</template>


<style scoped>
#title {
    background-color: var(--color-background-mute);
}
</style>