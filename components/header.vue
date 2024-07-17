<script setup>

</script>
<template>

    <div class="flex justify-between p-6">
        <!-- logo -->
        <div class="flex">
            <img src="" alt="">
            <h1 class="text-white text-xl font-bold ml-2">KatoEmma</h1>
        </div>

        <div class="flex gap-2 lg:gap-5 xl:gap-7 text-white items-center">
            <NuxtLink to="/"><span class=" text-lg">Home</span></NuxtLink>
            <NuxtLink to="/"><span class=" text-lg">Blogs</span></NuxtLink>
            <!-- search -->
            <div class="flex gap-2 lg:gap-5 xl:gap-7">
                <i class="fa fa-search md:hidden"></i>
                <div class="hidden md:flex items-center bg-white border-1 px-5 py-1 rounded-xl">
                    <input type="text" class="placeholder:text-sm" placeholder="Search">
                    <i class="fa fa-search text-gray-900"></i>
                </div>
                <!-- instagram card -->
                <div class="hidden md:flex">
                    <HeaderSocialCard :title="'twitter'" :icon="'fa fa-twitter-square'" />
                    <HeaderSocialCard :title="'LinkedIn'" :icon="'fa fa-linkedin-square'" />
                    <HeaderSocialCard :title="'Github'" :icon="'fa fa-github'"/>
                </div>

            </div>

        </div>
    </div>

</template>
