<script setup>

</script>
<template>
    <div class="flex flex-col items-center bg-black/70 text-white py-12 px-4 pb-18">
        <UniversalScrollMouse />
        <UniversalHeading>
            <template #title>
                Contact
            </template>
        </UniversalHeading>
        <p class="text-gray-300 mt-8 text-lg p-2 text-center">I’m currently available for freelance work</p>
        <div class="flex flex-col  items-center gap-8 mt-12 py-8 mx-auto max-w-7xl">
            <div class="border-4 border-teal-500 rounded-ss-3xl rounded-br-2xl px-6 py-3 w-fit">
                <h1 class="text-3xl text-teal-600 ubuntu">Send Me A Message</h1>
            </div>


            <form class="flex flex-col gap-4 w-full mt-8 py-8">
                <div class="flex flex-col md:flex-row justify-between gap-8">
                    <div class="flex flex-col">
                        <label for="name" class="text-sm text-teal-600">Your name*</label>
                        <input type="text" class="border-b border-teal-500 bg-transparent" placeholder="Enter your name"
                            name="name" />
                    </div>
                    <div class="flex flex-col">
                        <label for="name" class="text-sm text-teal-600">Your email*</label>
                        <input type="email" class="border-b border-teal-500 bg-transparent"
                            placeholder="Enter your email" name="email" />
                    </div>
                </div>

                <div class="flex flex-col mt-6">
                    <label for="name" class="text-sm text-teal-600">Your email*</label>
                    <input type="textarea" class="border-b border-teal-500 bg-transparent" placeholder="Message"
                        name="message" />
                </div>

                <button class="mt-6 bg-teal-600 p-4 rounded-lg text-white font-bold w-auto">Send <i class="fa fa-send"></i></button>
            </form>

        </div>
    </div>
</template>