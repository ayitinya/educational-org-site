<script setup lang="ts">
</script>

<template>
    <NuxtLayout>
        <template #hero>
            <div class="hero min-h-screen flex text-white">
                <div class="m-auto text-center max-w-[1200px] flex flex-col items-center h-full">
                    <p class="text-5xl font-bold px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <NuxtLink to="#services">
                        <button class="text-2xl bg-violet-800  py-2 px-2 my-10 rounded text-white">Our
                            Services</button>
                    </NuxtLink>
                    <Icon name="heroicons:chevron-double-down" size="3rem" class="mt-10 text-white animate-bounce"
                        aria-hidden="true" />
                </div>
            </div>
        </template>
        <div class="relative flex flex-col items-center">
            <section class="flex flex-col md:flex-row gap-8 mx-4 sm:mx-16 max-w-[1200px]">
                <picture class="min-w-[320px] md:max-w-xs brightness-50 z-40 hidden md:block">
                    <img src="~/assets/images/vertical-img.jpg" alt="">
                </picture>
                <div>
                    <h2 class="text-2xl font-semibold pb-4 border-b-4 border-violet-800 w-fit">Why Choose Us</h2>
                    <p class="mt-6 lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolores,
                        doloribus, mollitia modi libero
                        sit
                        laboriosam aliquam fugiat ad sapiente obcaecati repellendus aut dolorum, consequatur impedit
                        necessitatibus laborum voluptatibus. Laboriosam provident impedit, excepturi, nisi
                        aspernatur
                    </p>
                </div>
            </section>

            <section
                class="w-full mt-8 md:my-auto bg-violet-800 text-white relative md:bottom-32 flex flex-col items-center"
                id="services">
                <div class="max-w-[1200px] mx-4 sm:mx-16 my-8 md:my-40 flex flex-col items-center">
                    <h2 class="text-2xl text-center font-semibold pb-4 border-b-4 border-white w-fit">Our Services
                    </h2>
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-6">
                        <Service v-for="service, index of services" :key="index" :name="service.name"
                            :description="service.description" :icon="service.icon" :href="service.href" />
                    </div>
                </div>
            </section>

            <section class="">
                <div class="flex flex-col md:flex-row-reverse sm:gap-8 sm:mx-16 max-w-[1200px]">
                    <picture class="min-w-[320px] md:max-w-xs brightness-50 z-40 relative md:bottom-64">
                        <img src="~/assets/images/vertical-img.jpg" alt="">
                    </picture>
                    <div class="my-8 mx-4 sm:mx-auto relative md:bottom-32">
                        <h2 class="text-2xl font-semibold pb-4 border-b-4 border-violet-800 w-fit">Who Are We</h2>
                        <p class="mt-6 lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolores,
                            doloribus, mollitia modi libero
                            sit
                            laboriosam aliquam fugiat ad sapiente obcaecati repellendus aut dolorum, consequatur impedit
                            necessitatibus laborum voluptatibus. Laboriosam provident impedit, excepturi, nisi
                            aspernatur
                        </p>
                    </div>
                </div>
            </section>

            <section class="relative md:bottom-32 max-w-[1200px] w-full flex flex-col items-center">
                <h2 class="text-2xl text-center font-semibold pb-4 border-b-4 border-violet-800 w-fit">We Have
                    Numbers Too</h2>
                <div class="grid grid-cols-1 sm:grid-cols-3 w-full">
                    <div class="flex flex-col items-center my-4">
                        <Icon name="ph:student" size="3.75rem" class="text-violet-800" />
                        <h3 class="text-7xl font-bold my-2">100</h3>
                        <p class="my-2 text-xl text-violet-800">Students</p>
                    </div>
                    <div class="flex flex-col items-center my-4">
                        <Icon name="uil:university" size="3.75rem" class="text-violet-800" />
                        <h3 class="text-7xl font-bold my-2">100</h3>
                        <p class="my-2 text-xl text-violet-800">Universities</p>
                    </div>
                    <div class="flex flex-col items-center my-4">
                        <Icon name="grommet-icons:user-expert" size="3.75rem" class="text-violet-800" />
                        <h3 class="text-7xl font-bold my-2">100</h3>
                        <p class="my-2 text-xl text-violet-800">Years Experience</p>
                    </div>
                </div>
            </section>

            <section class="w-full my md:my-auto bg-violet-800 text-white min-h-[300px] px-4 sm:px-16 flex">
                <div class="max-w-[1200px] mx-auto my-10">
                    <h2 class="text-2xl mb-4 font-semibold pb-4 border-b-4 border-white w-fit">Hear What Our Clients
                        Have To Say</h2>
                    <div class="carousel">
                        <div id="slide1" class="flex gap-8 justify-center w-full carousel-item">
                            <blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptatum?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto ex est quisquam
                                    quam.
                                    Aliquam reprehenderit quae commodi error neque!
                                </p>
                                <footer class="flex gap-4 my-4">
                                    <picture class="flex-shrink-0 flex-grow-0 sm:hidden">
                                        <img src="~/assets/images/hero.jpg" alt=""
                                            class="w-[50px] aspect-square rounded-full object-cover object-center">
                                    </picture>
                                    <div>
                                        <cite>John Doe</cite>
                                        <br>
                                        <cite>CEO - Lorem Inc</cite>
                                    </div>
                                </footer>
                            </blockquote>
                            <picture class="flex-shrink-0 flex-grow-0 hidden sm:block">
                                <img src="~/assets/images/hero.jpg" alt=""
                                    class="w-[200px] aspect-square rounded-full object-cover object-center">
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <Location class="mt-8" />
            <Contact />
        </div>
    </NuxtLayout>
</template>

<style scoped>
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("~/assets/images/hero.jpg");
}
</style>