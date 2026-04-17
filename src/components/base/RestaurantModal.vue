<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Restaurant } from '../types/restaurants'


const props = defineProps<{
  restaurant: Restaurant | null
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="restaurant" class="overlay" @click.self="emit('close')">
    <div class="modal">
      <img :src="restaurant.image" class="image" />

      <div class="content">
        <h2>{{ restaurant.name }}</h2>

        <div class="meta">
          ⭐ {{ restaurant.rating }} • {{ restaurant.price }}
        </div>

        <div class="hours" v-if="restaurant.hours">
          Hours: {{ restaurant.hours.open }} – {{ restaurant.hours.close }}
        </div>

        <div class="actions">
          <a
            v-if="restaurant.phone"
            :href="`tel:${restaurant.phone}`"
            class="btn"
          >
            Call
          </a>

          <a
            v-if="restaurant.website"
            :href="restaurant.website"
            target="_blank"
            class="btn secondary"
          >
            Website
          </a>
          
          <a
            v-if="restaurant.restrictions"
            :href="restaurant.website"
            target="_blank"
            class="btn secondary"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999
}

.modal {
  width: 90%;
  max-width: 500px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.content {
  padding: 16px;
}

.meta {
  margin: 8px 0;
  color: #555;
}

.hours {
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 12px;
  border-radius: 8px;
  background: black;
  color: white;
  text-decoration: none;
}

.btn.secondary {
  background: #eee;
  color: black;
}
</style>