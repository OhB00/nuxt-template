<template>
  <UApp class="transition-colors ease-in duration-200">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">

const title = useRuntimeConfig().public.title

useHead({
	titleTemplate: `%s • ${title}`,
})
</script>
