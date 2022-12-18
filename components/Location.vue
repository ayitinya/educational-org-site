<script setup lang="ts">
const mapsAPIKey = useRuntimeConfig().public.MAPS_API_KEY
</script>

<template>
    <section class="flex flex-col items-center gap-8 mx-4 sm:mx-16 w-full">
        <div class="max-w-[1200px] mx-4 sm:mx-16 flex flex-col items-center">
            <h2 class="text-2xl font-semibold pb-4 border-b-4 border-violet-800 w-fit">Office Location</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 my-4 gap-8">
                <address>
                    Kalpohin Lowcost
                    1234, 5th Avenue
                    New York, NY 10001
                </address>
                <time>
                    Monday - Friday : 0800 - 1600
                </time>
            </div>
        </div>
        <iframe height="450" onload="this.width='100%';" style="border:0" loading="lazy" allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://www.google.com/maps/embed/v1/place?key=${mapsAPIKey}&q=Space+Needle,Seattle+WA`">
        </iframe>
    </section>
</template>