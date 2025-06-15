<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useConfigStore } from '@/stores/config'
import { useCounterStoreComp, useCounterStoreOpt } from '@/stores/counter'
import { computed } from 'vue'

const configStore = useConfigStore()

const counter = computed (()=> configStore.useCompositionAPI ? useCounterStoreComp() : useCounterStoreOpt())

</script>

<template>
  <main>
    <TheWelcome />
    <p>Counter: {{ counter.count }}</p>
    <p>Counter computed: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">Increment</button>
  </main>
</template>
