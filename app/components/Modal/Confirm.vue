<template>
  <UModal :title :description :dismissible="false">
    <template #content>
      <UCard>
        <template #header>
          <div class="flex justify-center">
            <div class="flex flex-col items-center max-w-sm">
              <p class="text-lg font-medium">{{ title }}</p>
              <p class="text-sm text-neutral-600 dark:text-neutral-400 text-center">{{ description }}</p>
            </div>
          </div>
        </template>

        <div class="flex items-center gap-3 justify-center">
          <UButton 
            label="Confirm" 
            icon="i-lucide-circle-check" 
            variant="soft"
            color="success"
            @click="confirm()"
          />
          <UButton 
            label="Cancel" 
            icon="i-lucide-x" 
            variant="soft"
            color="error"
            @click="cancel()"
          />
        </div>
      </UCard>
    </template>
  </UModal>
</template>

<script lang="ts" setup>

  withDefaults(
    defineProps<{
      title?: string
      description?: string
      cancel: () => void
      confirm: () => void
    }>(), 
    {
      title: 'Are you sure?',
      description: 'This action is potentially destructive.'
    }
  )
</script>