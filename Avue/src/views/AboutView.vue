    <script setup lang="ts">
    import { useConfigStore } from '@/stores/config'
    import { useCounterStoreComp, useCounterStoreOpt } from '@/stores/counter'
    import { computed } from 'vue'
    const configStore = useConfigStore()

    const counter = computed(() => configStore.useCompositionAPI ? useCounterStoreComp() : useCounterStoreOpt())

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Counter: {{ counter.count }}</p>
    <p>Counter computed: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
