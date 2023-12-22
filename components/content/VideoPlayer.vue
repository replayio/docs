<script setup lang="ts">
import '@mux/mux-player'
defineProps({
  id: {
    type: String,
    default: null
  }
})
</script>

<template>
  <mux-player
    stream-type="on-demand"
    :playback-id="id"
  />
</template>

<style>
mux-player {
  display: block;
  width: 100%;
  margin: 1rem 0 2rem;
  background-color: #000;
}

mux-player:not([audio]) {
  aspect-ratio: 16 / 9;
}
</style>