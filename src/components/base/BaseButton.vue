<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary', 
  },
  disabled: Boolean,
})
</script>

<template>
  <button
    :class="[
      'base-button',
      variant,
      { disabled }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
