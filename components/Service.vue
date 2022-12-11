<script setup lang="ts">
defineProps<{
    serviceName: string
    description: string
    icon: string
    url: string
}>()
</script>

<template>
    <div class="border border-white/10 p-4 flex flex-col items-start min-h-[250px]">
        <Icon :name="icon" class="w-10 h-10" />
        <h3 class="text-xl font-semibold">{{ serviceName }}</h3>
        <p>{{ description }}</p>
        <NuxtLink :to="url" class="mt-auto">Learn more</NuxtLink>
    </div>
</template>