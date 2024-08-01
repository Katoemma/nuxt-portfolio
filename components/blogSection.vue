<script setup>

</script>
<template>
    <div class="flex flex-col items-center bg-black/50 text-white py-12 px-4 pb-36">
        <UniversalScrollMouse />
        <UniversalHeading>
            <template #title>
                Blogs
            </template>
        </UniversalHeading>
        <p class="text-gray-300 mt-8 text-lg p-2 text-center">My thoughts on technology and business, welcome to
            subscribe
        </p>

        <div class="mx-auto max-w-5xl">
            <hr>
            <div class="flex flex-col md:flex-row py-6 gap-8">
                <img src="https://www.mooc.org/hubfs/web-programming-languages.jpg" class="w-96" alt="">
                <div class="flex flex-col">
                    <h3 class="text-teal-600 font-bold text-2xl my-4">
                        What does it take to become a web developer?
                    </h3>
                    <p class="text-gray-100 mb-4">
                        Web development, also known as website development, encompasses a variety of tasks and processes
                        involved in creating websites for the internet…
                    </p>
                    <!-- read more button -->
                    <NuxtLink to="/blog">
                        <div class="flex items-center gap-2 text-teal-500">
                            <span class="underline underline-offset-8 decoration-white">Read more</span>
                            <i class="fa fa-angle-double-right"></i>
                        </div>
                    </NuxtLink>

                    <div class="flex gap-2 my-4">
                        <div class="py-1 px-4 bg-gray-700 rounded-2xl text-sm text-center">
                            Web Developer
                        </div>
                        <h5 class="text-gray-400"><strong class="text-white">Date:</strong> 01th-01-2024</h5>
                        <h5 class="text-gray-400"><strong class="text-white">Read:</strong> 1 min</h5>
                    </div>
                </div>
            </div>
            <hr>
            <div class="mt-8 flex gap-6 justify-center py-6">
                <!-- view more button -->
                 <NuxtLink to="/blog">
                    <div class="bg-teal-500 p-2 px-6 rounded-3xl text-gray-800">
                        View more
                    </div>
                 </NuxtLink>
                 <NuxtLink to="/blog">
                    <div class=" p-2 px-6 border border-teal-500 rounded-3xl text-gray-100">
                        Subscribe
                    </div>
                 </NuxtLink>
            </div>
        </div>
    </div>
</template>