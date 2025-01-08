
<template>
    <UForm 
        ref="form" 
        :schema="v.safeParser(schema)"
        :state="state!"
        :validate-on="['blur']" 
        @submit="(onSubmit as any)"
        @error="consola.error"
    >
    <slot></slot>
  </UForm>
</template>

<script setup lang="ts" generic="T extends Record<string, any>, S extends GenericSchema">
  import { type GenericSchema } from 'valibot'
  import { type FormSubmitEvent } from "#ui/types"
  import * as v from "valibot"
  
  const state = defineModel<T>()

  const props = defineProps<{
    schema: S
  }>()

  const emit = defineEmits<{
    submit: [data: T]
  }>()

  defineExpose({
    save
  })

  const form = useTemplateRef('form')

  async function save() {
    await form.value!.submit()
  }

  function onSubmit(e: FormSubmitEvent<WrappedOutput>) {
    emit('submit', e.data)
  }
</script>