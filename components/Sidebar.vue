<script setup>
const links = [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: '/getting-started'
}]

const pageLinks = [{
  icon: 'i-heroicons-heart',
  label: 'Learn how to contribute',
  to: '/getting-started/contributing',
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

