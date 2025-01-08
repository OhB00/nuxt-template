<template>
	<div class="flex h-full">
		
		<div class="md:mr-[250px]">
			<AppSideNavigation class="hidden md:flex fixed top-0" :mobile="false" />
		</div>
		
		<USlideover v-model:open="open" class="md:hidden" side="left">
			<template #content>
				<AppSideNavigation v-model="open" :mobile="true" />
			</template>
		</USlideover>

		<div class="w-full min-h-full bg-neutral-400 dark:bg-neutral-800 overflow-y-auto">
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const open = useIsMobileNavOpen()
</script>