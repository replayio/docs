<script setup lang="ts">
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  id: String
})

</script>
<template>
  <div class="relative pb-[59.73451327433629%] h-0">
    <iframe :src="'https://www.loom.com/embed/' + id" allowFullScreen className="absolute top-0 left-0 w-full h-full" />
  </div>
</template>
<style>
iframe {
  display: block;
  width: 100%;
  margin: 1rem 0 2rem;
  background-color: #000;
}

</style>