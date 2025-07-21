<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptPlayground',
    data() {
        return {
            status: "None"
        }
    },
    methods: {
        setStatus(newStatus: string) {
            this.status = newStatus
            // console.log("Opt status")
        }
    }
})
</script>

<template>
    <h3 v-if="status === 'None'">None</h3>
    <h3 v-if="status === 'status_one'">Status One</h3>
    <h3 v-if="status === 'status_two'">Status Two</h3>
    <h3 v-if="status === 'status_three'">Status Three</h3>
    <button @click="setStatus('status_one')">Status One</button>
    <button @click="setStatus('status_two')">Status Two</button>
    <button @click="setStatus('status_three')">Status Three</button>
</template>