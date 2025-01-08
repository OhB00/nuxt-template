<template>
  <nav class="flex flex-col md:flex-row w-full md:w-fit items-center ml-auto px-3 text-xs gap-4 font-medium text-neutral-100 bg-neutral-900 md:bg-neutral-950 py-2 md:py-0 uppercase"> 
    <NuxtLink v-for="{ title, path } in nav" :key="path" :to="path" class="underlined">
      {{ title }}
    </NuxtLink>
    <NuxtLink to="/members" class="underlined">Members</NuxtLink>
  </nav>
</template>

<script lang="ts" setup>

interface NavItem {
	path: string
	class?: string
  title: string
}

const route = useRoute()

const nav: NavItem[] = [
  {
    title: 'Home',
    path: '/',
    class: 'col-start-2'
  },
  {
    title: 'FAQ',
    path: '/frequently-asked-questions'
  },
  {
    title: 'Membership',
    path: '/membership'
  },
  {
    title: 'Gallery',
    path: '/gallery'
  },
  {
    title: 'Publications',
    path: '/publications'
  },
  {
    title: 'Caves & Mines',
    path: '/caves-and-mines'
  },
]

</script>