<script setup lang="ts"></script>

<template>
    <NuxtLayout>
        <template #hero>
            <header class=" min-h-[400px] w-full flex items-center justify-center">
                <h1 class="text-4xl font-bold text-white"><span class="bg-accent px-2 py-1">Get In</span> Touch</h1>
            </header>
        </template>
        <div class="flex flex-col items-center">
            <Location class="md:mt-20 mt-4" />
            <Contact />
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://res.cloudinary.com/dnha19v3n/image/upload/f_webp,q_50/v1671412868/educational-site/pexels-pixabay-207456_ic5s7h.jpg');
    background-position: center;
    background-size: cover;
}
</style>