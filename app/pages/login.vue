<template>
    <AppPage area="" class="w-full">

        <div class="flex w-full h-full justify-center items-center">
            <AppForm 
                icon="i-lucide-key"
                title="Login"
                description="Please authenticate to continue."
                :schema="LoginSchema"
                class="w-full max-w-[600px]"
                v-model="state"
                @submit="onSubmit"
            >
                <UContainer class="flex flex-col gap-5">

                    <UFormField label="Username" help="The username you are registered with." name="username">
                        <UInput type="text" variant="soft" v-model="state.username" size="xl" class="w-full" />
                    </UFormField>
                    
                    <UFormField label="Password" help="Your password." name="password">
                        <UInput type="password" variant="soft" v-model="state.password" size="xl" class="w-full" />
                    </UFormField>
                    
                    
                    <UButton 
                        type="submit"
                        class="self-center"
                        icon="i-lucide-arrow-right" 
                        color="primary" 
                        label="Login" 
                        variant="soft"
                        :loading
                        loading-icon="i-lucide-loader-circle"

                    />
                </UContainer>
                
            </AppForm>
        </div>
    </AppPage>
  </template>
  
  <script lang="ts" setup>
    import * as v from "valibot"
    import { type FormSubmitEvent } from "#ui/types"

    const route = useRoute()
    const loading = ref(false)
  
    const state = reactive<LoginRequest>({
        username: '',
        password: ''
    })

    const { fetch } = useUserSession()

    async function onSubmit(data: LoginRequest) {

        loading.value = true
        const { success } = await LoginAction(data)
        loading.value = false

        if (success) {
            const then = route.query.then ?? '/'
            const redirect = Array.isArray(then) ? then[0] : then

            await fetch()
            consola.info('Redirecting to', redirect)
            await navigateTo(redirect, { external: false })
        }
    }

    useHead({
        title: 'Login',
    })

  </script>