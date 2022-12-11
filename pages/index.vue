<script setup lang="ts"></script>

<template>
    <div class="relative flex flex-col items-center">
        <section class="flex flex-col md:flex-row gap-8 mx-16 max-w-[900px]">
            <picture class="min-w-[350px] brightness-50 z-40 hidden md:block">
                <img src="~/assets/images/vertical-img.jpg" alt="">
            </picture>
            <div>
                <h2 class="text-2xl font-semibold">Who Are We</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolores, doloribus, mollitia modi libero
                    sit
                    laboriosam aliquam fugiat ad sapiente obcaecati repellendus aut dolorum, consequatur impedit
                    necessitatibus laborum voluptatibus. Laboriosam provident impedit, excepturi, nisi aspernatur
                </p>
            </div>
        </section>

        <section
            class="w-full my-16 md:my-auto bg-violet-800 text-white relative md:bottom-32 flex flex-col items-center"
            id="services">
            <div class="max-w-[900px] mx-16 my-40">
                <h2 class="text-2xl text-center font-semibold">Our Services</h2>
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5">
                    <Service v-for="service, index of services" :key="index" :service-name="service.serviceName"
                        :description="service.description" :icon="service.icon" :url="service.url" />
                </div>
            </div>
        </section>

        <section class="flex flex-col md:flex-row-reverse gap-8 mx-16 max-w-[900px]">
            <picture class="min-w-[350px] brightness-50 z-40 relative md:bottom-64 ">
                <img src="~/assets/images/vertical-img.jpg" alt="">
            </picture>
            <div class="my-16 md:my-0">
                <h2 class="text-2xl font-semibold">Who Are We</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolores, doloribus, mollitia modi libero
                    sit
                    laboriosam aliquam fugiat ad sapiente obcaecati repellendus aut dolorum, consequatur impedit
                    necessitatibus laborum voluptatibus. Laboriosam provident impedit, excepturi, nisi aspernatur
                </p>
            </div>
        </section>

        <section class="relative md:bottom-32 max-w-[900px] w-full flex flex-col">
            <h2 class="text-2xl text-center font-semibold">We Have Numbers Too</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 w-full my-5">
                <div class="flex flex-col items-center">
                    <h3 class="text-4xl font-semibold">100</h3>
                    <p>Students</p>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="text-4xl font-semibold">100</h3>
                    <p>Students</p>
                </div>
                <div class="flex flex-col items-center">
                    <h3 class="text-4xl font-semibold">100</h3>
                    <p>Students</p>
                </div>
            </div>
        </section>

        <section class="w-full my-16 md:my-auto bg-violet-800 text-white min-h-[300px] px-16 flex">
            <div class="max-w-[900px] mx-auto my-auto">
                <div class="flex gap-8">
                    <blockquote>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptatum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit iusto ex est quisquam quam.
                            Aliquam reprehenderit quae commodi error neque!
                        </p>
                        <footer class="flex gap-4 my-4">
                            <picture class="flex-shrink-0 flex-grow-0 sm:hidden">
                                <img src="~/assets/images/hero.jpg" alt="" class="w-[50px] aspect-square rounded-full object-cover object-center">
                            </picture>
                            <div>
                                <cite>John Doe</cite>
                                <br>
                                <cite>CEO - Lorem Inc</cite>
                            </div>
                        </footer>
                    </blockquote>
                    <picture class="flex-shrink-0 flex-grow-0 hidden sm:block">
                        <img src="~/assets/images/hero.jpg" alt="" class="w-[200px] aspect-square rounded-full object-cover object-center">
                    </picture>
                </div>
            </div>
        </section>
    </div>
</template>