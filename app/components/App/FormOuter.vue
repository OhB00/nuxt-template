<template>
  <UCard>
    <template #header>
      <div class="flex w-full items-center gap-3">

        <UIcon :name="icon" class="text-xl text-primary-500 size-6" />

        <div class="flex flex-col">
          <p class="text-lg font-medium">{{ title }}</p>
          <p class="text-sm text-neutral-400">{{ description }}</p>
        </div>

        <div class="ml-auto flex items-center gap-3">
          <slot name='actions'></slot>
        </div>
      </div>
    </template>
        
    <slot></slot>

  </UCard>
</template>

<script lang="ts" setup>

  defineProps<{
    icon: string
    title: string
    description: string
  }>()

</script>