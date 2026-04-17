<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Restaurant } from './types/restaurants'

import CarouselRow from './components/base/CarouselRow.vue'
import RestaurantModal from './components/base/RestaurantModal.vue'
import { useRestaurants } from './composables/useRestaurants'
import { recommend } from './TEST_Algorithm/recommend'

const { restaurants, loading } = useRestaurants()

// --- modal state ---
const selectedRestaurant = ref<Restaurant | null>(null)

// --- handlers ---
function openModal(r: Restaurant) {
  selectedRestaurant.value = r
}

function closeModal() {
  selectedRestaurant.value = null
}

// --- preferences ---
const preferences = {
  location: 4.2,
  cuisine: 4.5,
  ratings: 4.0,
  available: 3.2,
  price: 4.3,
  preferred_price: 2,
  fav: ['american'],
  res: [],
  filRes: false,
  filFamily: false
}

// --- ranked list ---
const rankedRestaurants = computed(() =>
  recommend(restaurants.value, preferences)
)
</script>

<template>
  <main class="container">
    <div v-if="loading">Loading...</div>

    <template v-else>
      <CarouselRow
        title="Top suggestions based on your preferences (with algorithm)"
        :items="rankedRestaurants"
        @select="openModal"
      />

      <CarouselRow
        title="W/O Our Algorithm"
        :items="restaurants"
        @select="openModal"
      />
    </template>

    <!-- Modal (popout detail view) -->
     <teleport to="body">
    <RestaurantModal
      :restaurant="selectedRestaurant"
      @close="closeModal"
    />
    </teleport>
    
  </main>
</template>

<style>
.container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>