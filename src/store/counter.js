import { ref, computed } from '../library/vue.js'
import { defineStore } from '../library/pinia.js'

export const useCounterStoreComp = defineStore('counterComp', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

// Pinia
export const useCounterStoreOpt = defineStore('counterOpt', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})