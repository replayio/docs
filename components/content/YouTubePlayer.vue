<script setup lang="ts">
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  id: String
})

</script>
<template>
  <div class="relative pb-[56.25%] mt-5 h-0">
    <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + id" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="absolute top-0 left-0 w-full h-full" allowfullscreen />
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