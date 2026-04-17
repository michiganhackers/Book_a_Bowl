<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import type { Restaurant } from '../types/restaurants' 
import 'vue3-carousel/carousel.css'

defineProps<{
  title: string
  items: Restaurant[]
}>()

const emit = defineEmits<{
  (e: 'select', restaurant: Restaurant): void
}>()

const config = {
  itemsToShow: 2.2,
  itemsToScroll: 2,
  snapAlign: 'start',
  wrapAround: false,
  gap: 16,
  transition: 300,
  mouseDrag: true,
  touchDrag: true,
  breakpoints: {
    640: { itemsToShow: 2.5 },
    1024: { itemsToShow: 3.5 },
    1280: { itemsToShow: 4.5 }
  }
}
</script>

<template>
  <section class="carousel-row">
    <h2 class="title">{{ title }}</h2>

    <Carousel v-bind="config">
      <Slide v-for="item in items" :key="item.id">
        <div class="card" @click.stop="emit('select', item)">
          <img :src="item.image" class="image" />

          <div class="overlay">
            <div class="top">
              <span class="rating">⭐ {{ item.rating }}</span>
              <span class="price">{{ item.price_string }}</span>
            </div>

            <div class="bottom">
              <div class="name">{{ item.name }}</div>
              <div class="time">
                {{ item.hours.open }} – {{item.hours.close}}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<style scoped>
.carousel-row {
  margin-bottom: 32px;
}

.title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 180px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.03);
  transition: transform 0.2s ease;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  background: linear-gradient(
    to top,
    rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)
  );

  color: white;
}

.top {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
}

.rating,
.price {
  background: rgba(0,0,0,0.6);
  padding: 2px 6px;
  border-radius: 6px;
}

.name {
  font-size: 1rem;
  font-weight: 600;
}

.time {
  font-size: 0.85rem;
  opacity: 0.9;
}
</style>