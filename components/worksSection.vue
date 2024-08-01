<script setup>

</script>
<template>
    <div class="flex flex-col items-center bg-black/70 text-white py-12 px-4 pb-36">
        <UniversalScrollMouse />
        <UniversalHeading>
            <template #title>
                Works
            </template>
        </UniversalHeading>
        <p class="text-gray-300 mt-8 text-lg p-2 text-center">I had the pleasure of working with these awesome projects
        </p>

        <!-- project Number -->
         <span class="text-lg text-orange-600 font-bold mt-8">1/8</span>
        <div class="flex items-center gap-8 mx-auto max-w-[90%] md:px-12">
            <!-- previous button -->
            <div class="hidden md:block rounded-full p-3 bg-yellow-500 w-12 h-12 flex justify-center items-center cursor-pointer">
                <i class="fa fa-chevron-left p-2"></i>
            </div>
            <div class="flex flex-col md:flex-row p-4 items-center">
                <div class="bg-code-bg">
                    <div class="bg-black/60 h-full">
                        <!-- technologies used -->
                         <WorksLanguage />
                    </div>
                </div>
                <div class="flex flex-col px-4">
                    <NuxtLink to="https://twitter.com/" target="_blank">
                        <span class="underline text-teal-500 text-xl">View Website</span>
                    </NuxtLink>
                    <div class="">
                        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg"
                            class="w-96 absolute z-0" alt="">
                        <img src="../public/mac_screen.png" class="relative w-96 z-10" alt="">
                    </div>

                </div>
            </div>
            <!-- previous button -->
            <div class="hidden md:block rounded-full p-3 bg-yellow-500 w-12 h-12 flex justify-center items-center cursor-pointer">
                <i class="fa fa-chevron-right p-2"></i>
            </div>
        </div>
    </div>

</template>