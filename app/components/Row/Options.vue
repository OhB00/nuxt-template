<template>
  <div class="text-right">
    <UDropdownMenu :items :content="{ align: 'end' }">

      <UButton
        class="ml-auto"
        icon="i-lucide-ellipsis-vertical"
        color="neutral"
        variant="soft"
        square
      />

    </UDropdownMenu>
  </div>
</template>

<script lang="ts" setup>

  import { type Row } from '@tanstack/vue-table'
  import { type DropdownMenuItem } from '#ui/types'

  const props = defineProps<{
      row: Row<any>
      getItems: (row: Row<any>) => DropdownMenuItem[]
  }>()

  const items = computed(() => props.getItems(props.row))

</script>