<template>
    <UButton
        color="neutral"
        variant="ghost"
        icon="i-lucide-chevron-down"
        square
        :ui="{ 
            leadingIcon: [
                'transition-transform', 
                row.getIsExpanded() ? 'duration-200 rotate-180' : ''
            ] as any
        }"
        @click="onExpand()"
    >
    </UButton>
</template>

<script lang="ts" setup>

    import { type Row } from '@tanstack/vue-table'

    const props = defineProps<{
        row: Row<any>
    }>()

    function onExpand() {
        props.row.toggleExpanded()
    }

</script>