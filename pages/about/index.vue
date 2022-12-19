<script setup lang="ts">
const teamMembers = [
    {
        name: 'John Doe',
        img: 'v1671412272/educational-site/ian-dooley-d1UPkiFd04A-unsplash_tydymo.jpg',
        position: 'CEO'
    },
    {
        name: 'Jane Doe',
        img: 'v1671411641/educational-site/pexels-yan-krukov-8199559_jyon3h.jpg',
        position: 'CTO'
    },
    {
        name: 'Peter Doe',
        img: 'v1671412273/educational-site/behrouz-sasani-cEnSr1WRHUY-unsplash_lp3f3w.jpg',
        position: 'CFO'
    },
    {
        name: 'Paul Doe',
        img: 'v1671412273/educational-site/behrouz-sasani-cEnSr1WRHUY-unsplash_lp3f3w.jpg',
        position: 'CEO'
    },
    {
        name: 'Beatrice Doe',
        img: 'v1671412273/educational-site/pexels-anastasiya-gepp-1462630_sf4ecb.jpg',
        position: 'CTO'
    },
    {
        name: 'Patrice Doe',
        img: 'v1671411641/educational-site/pexels-yan-krukov-8199559_jyon3h.jpg',
        position: 'CFO'
    }
]

</script>

<template>
    <NuxtLayout name="default">
        <template #hero>
            <header class=" min-h-[400px] w-full flex items-center justify-center">
                <h1 class="text-4xl font-bold text-white"><span class="bg-violet-800 px-2 py-1">About</span> Company
                </h1>
            </header>
        </template>

        <template #default>
            <div class="flex flex-col items-center">

                <section class="flex flex-col md:flex-row gap-8 mx-4 sm:mx-16 max-w-[1200px] mt-4 sm:mt-12">
                    <div class="">
                        <p class="text-4xl leading-normal font-serif">
                            Our mission is to provide a platform for students to find the best universities and courses
                        </p>
                    </div>
                    <div class="">
                        <p class=" lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolores,
                            doloribus, mollitia modi libero
                            sit
                            laboriosam aliquam fugiat ad sapiente obcaecati repellendus aut dolorum, consequatur impedit
                            necessitatibus laborum voluptatibus. Laboriosam provident impedit, excepturi, nisi
                            aspernatur
                        </p>
                    </div>
                </section>


                <section class="max-w-[1200px] w-full flex flex-col items-center">
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
                            <Icon name="uil:calender" size="3.75rem" class="text-violet-800" />
                            <h3 class="text-7xl font-bold my-2">100</h3>
                            <p class="my-2 text-xl text-violet-800">Years Experience</p>
                        </div>
                    </div>
                    <hr class="w-full">
                </section>

                <section class="flex flex-col md:flex-row gap-8 mx-4 sm:mx-16 max-w-[1200px] my-8">
                    <div>
                        <h2 class="text-2xl font-semibold pb-4 border-b-4 border-violet-800 w-fit">Our Story</h2>
                        <p class="mt-6 lg:text-lg sm:columns-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, labore molestiae. Nemo,
                            asperiores, eligendi minima quaerat nesciunt incidunt quo, eius impedit cupiditate velit
                            quibusdam
                            dolorem laborum! Pariatur ducimus, quisquam nihil consectetur vitae iure rerum quasi
                            molestiae
                            temporibus molestias atque accusamus quo blanditiis sit aliquid nulla, assumenda eius
                            dignissimos
                            nemo perspiciatis itaque. Numquam volupfuga sapiente eveniet adipisci ratione quos sunt
                            consequuntur libero consequatur! Repudiandae nisi ad natus ipsum ratione error. Qui porro ut
                            velit
                            unde atque repellendus recusandae praesentium ducimus ipsam saepe, molestias quasi eligendi
                            voluptate, esse perferendis cumqu
                            <br> <br>
                        <ol class="list-disc list-inside">
                            <li>lorem impsum is not just a dummy</li>
                            <li>lorem impsum is not just a dummy</li>
                            <li>lorem impsum is not just a dummy</li>
                            <li>lorem impsum is not just a dummy</li>
                        </ol>
                        </p>
                    </div>
                </section>

                <section class="w-full my-8 md:my-auto bg-violet-800 text-white flex flex-col items-center">
                    <div class="max-w-[1200px] mx-4 sm:mx-16 my-6 flex flex-col items-center">
                        <h2 class="text-2xl text-center font-semibold pb-4 border-b-4 border-white w-fit">Meet The Team
                        </h2>
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-6">
                            <TeamMember v-for="member, index of teamMembers" :key="index"
                                :img="member.img" :name="member.name"
                                :position="member.position" />
                        </div>
                    </div>
                </section>

                <section class="w-full  flex flex-col items-center" id="services">
                    <div class="max-w-[1200px] mx-4 sm:mx-16 my-8 flex flex-col items-center">
                        <h2 class="text-2xl text-center font-semibold pb-4 border-b-4 border-violet-800 w-fit">Our
                            Services
                        </h2>
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-6">
                            <Service v-for="service, index of services" :key="index" :name="service.name"
                                :description="service.description" :icon="service.icon" :href="service.href" />
                        </div>
                    </div>
                </section>

                <Location />

                <Contact />

            </div>
        </template>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
header {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://res.cloudinary.com/dnha19v3n/image/upload/f_webp,q_50/v1671413097/educational-site/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash_zkl252.jpg');
    background-position: center;
    background-size: cover;
}
</style>