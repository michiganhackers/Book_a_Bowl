<script setup lang="ts">
import CarouselRow from './components/base/CarouselRow.vue'
import { useRestaurants } from './composables/useRestaurants'

const { restaurants, loading } = useRestaurants()
</script>

<template>
  <main class="container">
    <div v-if="loading">Loading...</div>
    <template v-else>
    <CarouselRow
      title="Top suggestions based on your preferences"
      :items="restaurants"
    />
  <CarouselRow
      title="TEST"
      :items="restaurants"
    />
   </template>
  </main>
</template>

<style>
.container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>