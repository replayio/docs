<script setup lang="ts">

defineProps({
  name: {
    type: String,
    default: ''
  }
  
})
</script>
<template>
  <div class="mx-1 relative top-0.5 text-primary w-6 h-6 ring-1 ring-primary ring-opacity-50 rounded-md inline-grid place-items-center p-1 bg-primary bg-opacity-10">
    <UIcon :name="name" />
  </div>
</template>