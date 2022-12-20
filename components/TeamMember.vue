<script setup lang="ts">
defineProps<{
    name: string
    position: string
    img: string
}>()
</script>

<template>
    <div class="p-4 flex flex-col items-start min-h-[250px]">
        <NuxtImg provider="cloudinary" format="webp" width="288px" height="320px" quality="70" fit="cover" :src="img"
            class="w-72 h-80 object-cover" :alt="name" />
        <div class="py-2 text-center w-full">
            <h3 class="text-xl font-semibold">{{ name }}</h3>
            <p>{{ position }}</p>
        </div>
    </div>
</template>