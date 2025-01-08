<template>
  <AppFormOuter
    :icon
    :title
    :description
  >

  <template #actions>
    
  </template>

  <AppFormInner
    ref="form" 
    :schema
    v-model="state!"
    :validate-on="['blur']" 
    @submit="onSubmit"
  >
    <slot :save></slot>
  </AppFormInner>

  </AppFormOuter>
</template>

<script lang="ts" setup generic="T extends Record<string, any>, S extends GenericSchema">
  import { type GenericSchema } from 'valibot'
  
  const state = defineModel<T>()

  defineProps<{
    icon: string
    title: string
    description: string
    schema: S
  }>()

  const emit = defineEmits<{
    submit: [data: T]
  }>()

  const form = useTemplateRef('form')

  async function save() {
    await form.value!.save()
  }

  function onSubmit(e: T) {
    emit('submit', e)
  }

</script>