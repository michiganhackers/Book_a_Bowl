import { mockRestaurants } from '../data/mockRestaurants'
import type { Restaurant } from '../types/restaurant'

export async function getRecommendedRestaurants(): Promise<Restaurant[]> {
  // FUTURE:
  // return fetch('/api/recommendations').then(res => res.json())

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRestaurants)
    }, 300)
  })
}