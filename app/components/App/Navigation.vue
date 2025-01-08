<template>
		<div class="fixed top-0 z-20 text-white bg-neutral-950 backdrop-blur-md w-full flex flex-col items-center shadow-sm">

      <div class="flex items-center w-full p-3">
        <div class="flex items-center mx-3">
          <p class="font-light font-title text-4xl ml-3">App</p>
        </div>

        <AppNavigationLinks class="hidden md:flex" />

        <UButton 
          class="ml-auto md:hidden"
          icon="i-lucide-menu" 
          variant="soft" 
          color="primary"
          @click="open = !open" 
        />
    </div>

    <UCollapsible v-model:open="open" class="md:hidden w-full">

      <template #content>
        <AppNavigationLinks />
      </template>
    </UCollapsible >
      
  </div>
</template>

<script lang="ts" setup>

const open = ref(false)

const route = useRoute()

watch(route, () => {
    open.value = false
})

</script>