<template>
  <div class="p-3 md:p-5 flex flex-col gap-3 h-full">

    <div class="flex items-start gap-5">

      <div class="flex items-center gap-3">
        <UButton 
          class="md:hidden"
          icon="i-lucide-menu" 
          variant="soft" 
          color="primary"
          @click="open = !open" 
        />
        <h1 class="text-xl font-medium">{{ area }}</h1>
      </div>
        
      <div class="ml-auto flex flex-col md:flex-row md:items-center gap-3">
        <UButton 
          v-if="back" 
          icon="i-lucide-arrow-left" 
          label="Back"
          variant="soft" 
          color="neutral"
          :to="back"
        />
        <slot name="actions"></slot>

        <UButton 
          v-if="create"
          icon="i-lucide-diamond-plus" 
          color="success" 
          variant="soft" 
          :label="create.label" 
          :to="create.to"
        />

        <UButton 
          v-if="props.refresh"
          icon="i-lucide-rotate-cw" 
          color="primary" 
          label="Refresh" 
          variant="soft"
          :loading="pending"
          loading-icon="i-lucide-loader-circle"
          @click="refresh()"
       />
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const open = useIsMobileNavOpen()

type CreateInfo = {
  label?: string
  to?: string
}

const props = withDefaults(defineProps<{
  area?: string
  back?: string
  create?: CreateInfo
  refresh?: () => Promise<any>
}>(), {
  area: 'Unknown Area',
})

const { refresh, pending } = useRefresher(props.refresh ?? (() => Promise.resolve()))

</script>