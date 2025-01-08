<template>
  <UAlert v-if="data === undefined || data.total === 0"
    title="No data found."
    description="Be the change you want to see in the world!"
    color="error"
    icon="i-heroicons-exclamation-triangle"
    variant="soft"
  />
  <div v-else class="flex flex-col gap-3">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <slot :data></slot>
    </div>
 
    <UPagination 
      v-if="showPagination" 
      class="mt-auto self-center" 
      :showControls="false" 
      v-model:page="page" 
      :total="data.total" 
      :items-per-page="data.pageSize" 
      variant="soft"
    />
  </div>    
</template>

<script lang="ts" setup generic="T">
  import { type AsyncDataRequestStatus } from '#app/composables/asyncData'

  const props = defineProps<{
    data: APIPagination<T> | undefined,
    status: AsyncDataRequestStatus
  }>()

  const page = defineModel<number>({
    default: 1
  })

  const showPagination = computed(() => {
    const data = props.data

    if (data === undefined)
      return false

    return data.total > data.pageSize
  })

</script>