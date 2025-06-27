<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OptionsAPIComponent',
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
        toggleName() {
            // nameBool: true
            this.nameBool = !this.nameBool
            this.nameBool ? this.user.name = "Panos" : this.user.name = "Sasa Mpasta"
            return this.user.name
        }
    }
})
</script>

<template>
    <h2>{{ user.name }}</h2>
    <button @click="toggleName">Click Me!</button>
</template>