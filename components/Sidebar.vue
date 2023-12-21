<script setup>
const links = [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}, {
  label: 'Playground',
  icon: 'i-simple-icons-stackblitz',
  to: '/playground'
}, {
  label: 'Roadmap',
  icon: 'i-heroicons-academic-cap',
  to: '/roadmap'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]

const pageLinks = [{
  icon: 'i-heroicons-heart',
  label: 'Learn how to contribute',
  to: '/getting-started/contributing',
  target: '_blank'
}]
</script>

<template>
  <UAside :links="links">
    <template #top>
      <UDocsSearchButton />
    </template>

    <Placeholder class="h-60" />

    <template #bottom>
      <UDivider type="dashed" class="my-6" />

      <UPageLinks :links="pageLinks" />
    </template>
  </UAside>
</template>

