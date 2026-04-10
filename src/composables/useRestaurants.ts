import { ref, onMounted } from 'vue'
import { getRecommendedRestaurants } from '../services/restaurantService'
import type { Restaurant } from '../types/restaurant'

export function useRestaurants() {
  const restaurants = ref<Restaurant[]>([])
  const loading = ref(true)

  const load = async () => {
    loading.value = true
    restaurants.value = await getRecommendedRestaurants()
    loading.value = false
  }

  onMounted(load)

  return {
    restaurants,
    loading,
    reload: load
  }
}