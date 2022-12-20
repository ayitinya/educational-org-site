<template>
    <section class="w-full md:my-auto bg-primary text-white flex flex-col items-center">
        <div class="max-w-[1200px] mx-4 sm:mx-16 my-6 flex flex-col sm:flex-row items-center gap-8">
            <div class="sm:w-1/2 w-full">
                <h2 class="text-2xl text-center font-semibold pb-4 border-b-4 border-white w-fit my-4">Get In Touch With
                    Us
                </h2>
                <p>
                    Need to get in touch? We'd love to hear from you.
                </p>
                <div class="my-2">
                    <h3 class="font-semibold">Phone</h3>
                    <p>123-456-7890</p>
                </div>
                <div class="my-2">
                    <h3 class="font-semibold">Email</h3>
                    <p>email@provider.tld</p>
                </div>
                <div>
                    <p>
                        You can also use the contact form below to send us a message and we'll get back to you as
                        soon as we can.
                    </p>
                </div>
            </div>
            <div class="sm:w-1/2 w-full">
                <form action="" class="">
                    <div class="flex flex-col">
                        <div class="flex flex-col ">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="John Doe" class="pl-2 py-4 text-black my-2"
                                required>
                        </div>
                        <div class="flex flex-col ">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="john.doe@provider.tld"
                                class="pl-2 py-4 text-black my-2" required>
                        </div>
                        <div class="flex flex-col">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="5" class="w-full text-black pl-2 py-2 my-2"
                                required></textarea>
                        </div>
                    </div>
                    <button type="submit"
                        class="bg-accent hover:bg-accent/75 transition-all text-white px-4 py-2 rounded-md my-2">Submit</button>
                </form>
            </div>
        </div>
    </section>
</template>