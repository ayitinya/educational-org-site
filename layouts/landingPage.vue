<template>
    <div class="flex flex-col min-h-screen relative">
        <Header />
        <main class="my-20">
            <slot />
        </main>
        <Footer class=" mt-auto"/>
    </div>
</template>