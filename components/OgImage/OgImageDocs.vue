<script lang="ts" setup>
/**
 * @credits NuxtLabs <https://nuxtlabs.com/>
 * @see https://github.com/nuxt/nuxt.com/blob/main/components/OgImage/OgImageDocs.vue
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
  headline: 'headline',
})

const title = computed(() => props.title.slice(0, 60))
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center bg-[#18181b]">
    <svg
      class="absolute right-0 top-0"
      width="629"
      height="593"
      viewBox="0 0 629 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_199_94966)">
        <path d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z" fill="#f02d5e" />
      </g>
      <defs>
        <filter
          id="filter0_f_199_94966"
          x="0.873535"
          y="-659"
          width="1255.25"
          height="1251.52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966" />
        </filter>
      </defs>
    </svg>

    <div class="w-[600px] pl-[100px]">
      <p class="uppercase text-[24px] text-[#f02d5e] mb-4 font-semibold">
        docs.replay.io
      </p>
      <h1 class="w-[600px] m-0 text-[75px] font-semibold mb-4 text-white flex items-center">
        <span>{{ title }}</span>
      </h1>
    </div>
    <svg
      class="absolute top-[210px] right-[140px]"
      width="240"
      height="240"
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      
      <path fill="#F41C52" d="M114.621 56.42L20.201 1.806a13.456 13.456 0 0 0-18.395 4.94A13.506 13.506 0 0 0 0 13.49v109.228a13.506 13.506 0 0 0 6.735 11.684a13.453 13.453 0 0 0 13.467.002l94.42-54.614a13.484 13.484 0 0 0 4.93-4.939a13.507 13.507 0 0 0-4.93-18.431Zm0 152.103l-94.42-54.614a13.455 13.455 0 0 0-18.395 4.94A13.505 13.505 0 0 0 0 165.596v109.227c0 2.368.624 4.694 1.806 6.745a13.479 13.479 0 0 0 4.93 4.938a13.443 13.443 0 0 0 13.466.002l94.42-54.614a13.475 13.475 0 0 0 4.93-4.938a13.51 13.51 0 0 0-4.93-18.432Zm134.644-76.037l-94.42-54.613a13.455 13.455 0 0 0-18.395 4.94a13.503 13.503 0 0 0-1.806 6.745v109.227c0 2.368.623 4.694 1.806 6.746a13.484 13.484 0 0 0 4.929 4.937a13.447 13.447 0 0 0 13.466.003l94.42-54.614a13.485 13.485 0 0 0 4.93-4.94a13.515 13.515 0 0 0 0-13.492a13.485 13.485 0 0 0-4.93-4.939Z" />
      
      <defs>

        <radialGradient
          id="paint1_radial_199_94959"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(167.875 167.875) rotate(-90) scale(100.596 107.502)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_199_94959"
          x1="267.01"
          y1="78.6537"
          x2="200.746"
          y2="244.574"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#f02d5e" />
          <stop offset="1" stop-opacity="0" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_199_94959"
          x1="292.405"
          y1="57.8159"
          x2="209.877"
          y2="264.463"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#f02d5e" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_199_94959"
          x1="314.196"
          y1="40.2232"
          x2="217.813"
          y2="281.562"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#f02d5e" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_199_94959"
          x1="202.444"
          y1="144.3"
          x2="191.546"
          y2="184.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_199_94959"
          x1="202.444"
          y1="144.3"
          x2="191.546"
          y2="184.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
