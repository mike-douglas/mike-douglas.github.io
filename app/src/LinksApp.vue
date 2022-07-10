<script setup lang="ts">
import fetchLinks from '@/lib/links'
import { onMounted } from 'vue'
import LinkArchive from './components/LinkArchive.vue'

onMounted(() => {
  console.log(fetchLinks())
})
</script>

<template>
  <main>
    <LinkArchive />
  </main>
</template>