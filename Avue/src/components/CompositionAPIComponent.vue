<script lang="ts">
import { reactive, ref, defineComponent } from 'vue'

export default defineComponent({
    name: 'CompositionAPIComponent',
    setup() {
        const user = reactive({
            name: "Panos",
            city: "Melanes"
        })

        const nameBool = ref(true)

        const toggleName = () => {
            nameBool.value = !nameBool.value
            nameBool.value ? user.name = "Panos" : user.name = "Sasa Mpasta"
            return user.name
        }

        return {
            user,
            nameBool,
            toggleName
        }
    }
})
</script>

<template>
    <h2>{{ user.name }}</h2>
    <button @click="toggleName">Click Me!</button>
</template>