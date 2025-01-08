<template>
    <div class="min-h-full dark:bg-neutral-900 bg-neutral-200 min-w-[250px] border-r border-neutral-200 dark:border-neutral-950">
        
        <div class="h-dvh flex flex-col gap-3 w-full py-3 sticky top-0">
            <div class="flex items-center gap-3 px-3">

                <p class="font-medium text-white-400 text-lg">Title</p>

                <UButton
                    v-if="mobile"
                    class="ml-auto"
                    icon="i-lucide-x"
                    variant="soft"
                    color="error"
                    @click="open = false"
                    label="Close"
                />
            </div>

            <USeparator />

            <UNavigationMenu 
                class="pl-2"
                color="primary"
                highlight-color="primary"
                orientation="vertical"
                variant="pill"
                :highlight="true"
                :items 
            />

            <USeparator class="mt-auto" />

            <UDropdownMenu :items="account_items" class="mx-2">
                <UButton 
                    v-if="loggedIn"
                    icon="i-lucide-user"
                    color="primary"
                    :label="user.username"
                    variant="soft"
                />
                <UButton
                    v-else
                    label="Configure"
                    icon="i-lucide-settings"
                    color="primary"
                    variant="soft"
                />
            </UDropdownMenu>
        </div>
    </div>
</template>

<script setup lang="ts">

// Controls if the nav is open on mobile
const open = defineModel<boolean>({
    default: false,
})

defineProps<{
    mobile: boolean
}>()

const route = useRoute()

watch(route, () => {
    open.value = false
})

const items = ref([
    {
      label: 'Dashboard',
      icon: 'i-lucide-house',
      to: '/',
    },
	{
      label: 'Account',
      icon: 'i-lucide-circle-user',
      to: '/other',
    },
    {
      label: 'Drop Down',
      icon: 'i-lucide-newspaper',
	  defaultOpen: true,
      active: false,
	  children: [
			{
				label: 'A',
				icon: 'i-lucide-telescope',
				to: '/other',
			},
			{
				label: 'B',
				icon: 'i-lucide-tag',
				to: '/other',
			},
			{
				label: 'C',
				icon: 'i-lucide-diamond-plus',
				to: '/other',
			},
		]
    },
    {
		label: 'Admin',
		icon: 'i-lucide-skull',
      	to: '/other',
    },
])

const { user, loggedIn } = useUserSession()

const colorMode = useColorMode()
const isDark = computed({
	get () {
		return colorMode.value === 'dark'
	},
	set (set) {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})

const themeOption = [
    {
        label: isDark.value ? 'Light Mode' : 'Dark Mode',
        icon: isDark.value ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid',
        onSelect: () => isDark.value = !isDark.value
    }
]

const logoutOption = [
    {
        label: 'Logout',
        color: 'error',
        icon: 'i-lucide-log-out',
        onSelect: () => LogoutAction({})            
    },
]

const account_items = computed(() => loggedIn.value ? [themeOption, logoutOption] : [themeOption])

</script>