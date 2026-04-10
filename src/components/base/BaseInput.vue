
<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-group">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

