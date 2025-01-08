<template>
  <div>
    <slot v-if="valid" v-bind="props.values"></slot>
    <div v-else>
      <slot name="fallback">
        <UAlert
          color="error"
          icon="i-heroicons-exclamation-triangle"
          :title="error_title"
          :description="error_desc"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T extends Record<string, any>">

type Required = { [K in keyof T]: NonNullable<T[K]> }

const props = defineProps<{ 
  values: T 
  error_title: string
  error_desc: string
}>()

const slots = defineSlots<{ 
  default(props: Required): any
}>()

const valid = computed(() => Object.values(props.values).every(value => value !== undefined && value !== null))
</script>