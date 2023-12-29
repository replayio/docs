<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')

const route = useRoute()
const { navPageFromPath } = useContentHelpers()

const headerLinks = computed(() => {
  return [{
  label: 'Getting started',
  icon: 'i-heroicons-book-open',
  to: '/getting-started',
  active: route.path.startsWith('/getting-started')
}, {
  label: 'Test Suites',
  icon: 'i-ic-outline-checklist',
  to: '/test-suites',
  active: route.path.startsWith('/test-suites')
}, {
  label: 'Debugging Guide',
  icon: 'i-heroicons-bug-ant-16-solid',
  to: '/debugging-guide',
  active: route.path.startsWith('/debugging-guide')
}, {
  label: 'Examples',
  icon: 'i-heroicons-academic-cap',
  to: '/examples',
  active: route.path.startsWith('/examples')
}, {
  label: 'Community',
  icon: 'i-ic-baseline-people-alt',
  to: '/community',
  active: route.path.startsWith('/community')
}]
})

const navigationLinks = computed(() => {
  return mapContentNavigation(navPageFromPath('/' + route.params.slug[0], navigation.value)?.children || [])
})

</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside :links="headerLinks">
          <UDivider class="pb-5" />
          <UNavigationTree :links="navigationLinks" default-open :multiple="false" />
        </UAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
