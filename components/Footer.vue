<script setup lang="ts"></script>

<template>
    <footer class="py-4 px-16 w-full">
        <div class="max-w-[900px] mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-8 w-full py-4">
                <span>LOGO</span>
                <ul>
                    <span>Quick Links</span>
                    <li v-for="link, index of navLinks" :key="index">
                        <NuxtLink :to="link.href">{{ link.name }}</NuxtLink>
                    </li>
                </ul>
                <ul>
                    <span>Our Services</span>
                    <li v-for="service, index of services" :key="index">
                        <NuxtLink :to="service.url">{{ service.serviceName }}</NuxtLink>
                    </li>
                </ul>
                <ul>
                    <span>Contact Us</span>
                    <address>
                        Kalpohin Lowcost
                        <br />
                        1234, 5th Avenue
                        <br />
                        New York, NY 10001
                        <br />
                        <br />
                        <a href="tel:1234567890">123-456-7890</a>
                        <br />
                        <br />
                        <a href="mailto:adf@fds.com">adf@fds.com</a>
                    </address>
                </ul>
            </div>
            <hr />
            <div>
                <span>Site by <NuxtLink to="https://ayitinya.me" :external="true">Ayitinya</NuxtLink></span>
            </div>
        </div>
    </footer>
</template>