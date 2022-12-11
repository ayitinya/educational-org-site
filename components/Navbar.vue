<script setup lang="ts">

const hero = ref<HTMLElement | null>(null)
const transparentNav = ref(true)

onMounted(() => {
    if (hero.value) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                transparentNav.value = entry.isIntersecting
            })
        }, {
            threshold: 0.9
        })

        observer.observe(hero.value)
    }
})

const links = [
    {
        name: 'Home',
        href: '#'
    },
    {
        name: 'About',
        href: '#'
    },
    {
        name: 'Contact',
        href: '#'
    },
    {
        name: 'Blog',
        href: '#'
    }
]

const transparentNavStyles = [
    'bg-transparent',
    'drop-shadow-none'
]

</script>

<template>
    <header class="z-50">
        <div ref="header" class="text-xl fixed top-0 px-16 py-7 w-full text-white"
            :class="[transparentNav ? transparentNavStyles : 'backdrop-blur-sm bg-violet-900/80']">
            <nav class="flex max-w-[900px] mx-auto">
                <span>LOGO</span>
                <ul class="ml-auto flex">
                    <li v-for="link, index of links" :key="index" :href="link.href" class="ml-12">
                        <NuxtLink :to="link.href">{{ link.name }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div ref="hero" class="hero min-h-screen flex text-white">
        <div class="m-auto text-center max-w-[900px]">
            <span class="text-3xl">LOGO</span>
            <p class="text-3xl">Company Name</p>
            <p class="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <NuxtLink to="#services">
                <button class="text-2xl bg-violet-800/60  py-2 px-2 my-5 rounded">Our Services</button>
            </NuxtLink>
        </div>
    </div>

</template>

<style scoped>
    .hero {
        background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('~/assets/images/hero.jpg');
    }
</style>