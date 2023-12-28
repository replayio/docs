<script setup lang="ts"></script>
<template>
  <div class="grid grid-flow-col justify-items-center pt-10">
    <div class="grid grid-flow-row justify-items-center">
      <div class="bg-pink-500 bg-opacity-20 rounded-3xl w-32 h-32 text-pink-500 grid place-items-center">
        <UIcon name="i-simple-icons-googlechrome" class="w-20 h-20" />
      </div>
      <p class="font-bold py-3">
        Browser
      </p>
    </div>
    <div class="grid grid-flow-row justify-items-center">
      <div class="bg-pink-500 bg-opacity-20 rounded-3xl w-32 h-32 text-pink-500 grid place-items-center">
        <UIcon name="i-heroicons-video-camera-16-solid" class="w-20 h-20" />
      </div>
      <p class="font-bold py-3">
        Recorder
      </p>
    </div>
    <div class="grid grid-flow-row justify-items-center">
      <div class="bg-pink-500 bg-opacity-20 rounded-3xl w-32 h-32 text-pink-500 grid place-items-center">
        <UIcon name="i-heroicons-cog-8-tooth-solid" class="w-20 h-20" />
      </div>
      <p class="font-bold py-3">
        DevTools
      </p>
    </div>
  </div>
</template>