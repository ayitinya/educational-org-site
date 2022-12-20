<script setup lang="ts">
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'

const callsToAction = [
    { name: 'Contact Sales', href: '#', icon: 'heroicons:phone' },
]
interface Props {
    hero: HTMLElement | null
    transparentNav?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    hero: null,
    transparentNav: true
})


onMounted(() => {
    if (props.hero) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                props.transparentNav = entry.isIntersecting
            })
        }, {
            threshold: 0.9
        })
        observer.observe(props.hero)
    }
})


const transparentNavStyles = [
    'bg-transparent',
    'drop-shadow-none'
]

</script>

<template>
    <header>
        <div class="z-50 fixed px-4 sm:px-16 top-0 w-full text-white"
            :class="[transparentNav ? transparentNavStyles : 'backdrop-blur-sm bg-secondary/80']">
            <Popover class="relative ">
                <!-- Deskop Nav -->
                <div class="mx-auto max-w-[1200px]  ">
                    <div class="flex items-center justify-between  py-6 lg:justify-start lg:space-x-10">
                        <div class="flex flex-shrink-0 justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span class="sr-only">Your Company</span>
                                <img class="h-8 w-auto sm:h-10"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="LOGO" />
                            </a>
                        </div>
                        <div class="-my-2 -mr-2 lg:hidden">
                            <PopoverButton
                                class="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span class="sr-only">Open menu</span>
                                <Icon name="heroicons:bars-3" class="h-6 w-6" aria-hidden="true" />
                            </PopoverButton>
                        </div>
                        <PopoverGroup as="nav" class="hidden space-x-10 lg:flex">
                            <NuxtLink v-for="link of navLinks" :to="link.href"
                                class="text-base font-medium text-white hover:text-gray-200">{{ link.name }}
                            </NuxtLink>

                            <Popover class="relative " v-slot="{ open }">
                                <PopoverButton
                                    :class="[open ? 'text-gray-200' : 'text-white', 'group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-200']">
                                    <span>Services</span>
                                    <Icon name="heroicons:chevron-down-solid"
                                        :class="[open ? 'text-gray-400' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-400']"
                                        aria-hidden="true" />
                                </PopoverButton>

                                <transition enter-active-class="transition ease-out duration-200"
                                    enter-from-class="opacity-0 translate-y-1"
                                    enter-to-class="opacity-100 translate-y-0"
                                    leave-active-class="transition ease-in duration-150"
                                    leave-from-class="opacity-100 translate-y-0"
                                    leave-to-class="opacity-0 translate-y-1">
                                    <PopoverPanel
                                        class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                                        <div
                                            class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                                            <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                <a v-for="item in services" :key="item.name" :href="item.href"
                                                    class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                                    <Icon :name="item.icon"
                                                        class="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                        aria-hidden="true" />
                                                    <div class="ml-4">
                                                        <p class="text-base font-medium text-gray-900">{{ item.name }}
                                                        </p>
                                                        <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div
                                                class="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                                <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                                                    <a :href="item.href"
                                                        class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                                                        <Icon :name="item.icon"
                                                            class="h-6 w-6 flex-shrink-0 text-gray-400"
                                                            aria-hidden="true" />
                                                        <span class="ml-3">{{ item.name }}</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverPanel>
                                </transition>
                            </Popover>
                        </PopoverGroup>
                        <div class="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
                            <a href="#"
                                class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                Call Us
                                <Icon name="heroicons:phone-20-solid" class="ml-8 h-6 w-6 text-white"
                                    aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Desktop Nav End -->

                <!-- Mobile Nav -->

                <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <PopoverPanel focus
                        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden">
                        <div
                            class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div class="px-5 pt-5 pb-6">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <img class="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt="Your Company" />
                                    </div>
                                    <div class="-mr-2">
                                        <PopoverButton
                                            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span class="sr-only">Close menu</span>
                                            <Icon name="heroicons:x-mark" class="h-6 w-6" aria-hidden="true" />
                                        </PopoverButton>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <nav class="grid gap-y-8">
                                        <a v-for="item, index in services" :key="index" :href="item.href"
                                            class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                                            <Icon :name="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600"
                                                aria-hidden="true" />
                                            <span class="ml-3 text-base font-medium text-gray-900">{{ item.name
                                            }}</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div class="space-y-6 py-6 px-5">
                                <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <NuxtLink v-for="link, index of navLinks" :key="index" :to="link.href"
                                        class="text-base font-medium text-gray-900 hover:text-gray-700">{{ link.name }}
                                    </NuxtLink>
                                </div>
                                <div>
                                    <a href="#"
                                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                                        Call Us
                                        <Icon name="heroicons:phone-20-solid" class="ml-8 h-6 w-6 text-white"
                                            aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
                <!-- End of mobile nav -->
            </Popover>
        </div>
    </header>
</template>
  
<style scoped>
.router-link-active {
    color: #6366f1 !important;
    text-decoration: underline !important;
    text-underline-offset: 1rem !important;
}
</style>