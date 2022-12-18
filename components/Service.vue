<script setup lang="ts">
defineProps<{
    name: string
    description: string
    icon: string
    href: string
}>()
</script>

<template>
    <div class="border border-white/10 p-4 flex flex-col items-start min-h-[250px]">
        <Icon :name="icon" class="w-10 h-10" />
        <h3 class="text-xl font-semibold">{{ name }}</h3>
        <p>{{ description }}</p>
        <NuxtLink :to="href" class="mt-auto">Learn more</NuxtLink>
    </div>
</template>