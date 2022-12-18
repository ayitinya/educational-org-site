<script setup lang="ts"></script>

<template>
    <div class="flex flex-col items-center">
        <header class=" min-h-[300px] w-full flex items-center justify-center">
            <h1 class="text-4xl font-bold text-white"><span class="bg-violet-800 px-2 py-1">Get In</span> Touch</h1>
        </header>
        <Location class="md:mt-20 mt-4" />
        <Contact />
    </div>
</template>

<style lang="scss" scoped>
header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('~/assets/images/hero.jpg');
}
</style>