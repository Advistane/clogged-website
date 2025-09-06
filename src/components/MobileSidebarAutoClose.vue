<script setup lang="ts">
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { useSidebar } from '@/components/ui/sidebar'

const route = useRoute()
const { isMobile, openMobile, setOpenMobile } = useSidebar()

watch(() => route.fullPath, () => {
  if (isMobile.value && openMobile.value) {
    setOpenMobile(false)
  }
})
</script>

<template>
  <!-- No UI; just closes mobile sidebar on route changes -->
  <slot />
  
</template>

