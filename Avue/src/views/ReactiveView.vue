<script lang="ts">
import { useConfigStore } from '@/stores/config'
import { defineComponent } from 'vue'
import CompositionAPIComponent from '@/components/CompositionAPIComponent.vue'
import OptionsAPIComponenet from '@/components/OptionsAPIComponenet.vue'

export default defineComponent({
    computed: {
        currentComponent() {
            const configStore = useConfigStore()
            return configStore.useCompositionAPI ? 'CompositionAPIComponent' : 'OptionsAPIComponenet'
        }
    },
    components: {
        CompositionAPIComponent,
        OptionsAPIComponenet
    }
})
</script>

<template>
    <div id="title">
        <h1>Reactive View Page</h1>
        <component :is="currentComponent">
            </component>
    </div>
</template>


<!-- <style scoped>
#title {
    background-color: var(--color-background-mute);
}
</style> -->