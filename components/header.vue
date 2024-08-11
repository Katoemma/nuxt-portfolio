<script setup>

</script>
<template>

    <div class="flex justify-between p-6">
        <!-- logo -->
        <div class="flex items-center">
            <img src="/public/logo.png" class="h-5 md:h-7" alt="Kato emmma logo">
        </div>

        <div class="flex gap-2 lg:gap-5 xl:gap-7 text-white items-center">
            <NuxtLink to="/" exact><span class=" text-lg">Home</span></NuxtLink>
            <NuxtLink to="/blogs"><span class=" text-lg">Blogs</span></NuxtLink>
            <!-- search -->
            <div class="flex gap-2 lg:gap-5 xl:gap-7">
                <i class="fa fa-search md:hidden"></i>
                <div class="hidden md:flex items-center bg-white border-1 px-5 py-1 rounded-xl">
                    <input type="text" class="placeholder:text-sm border-none outline-none text-gray-900" placeholder="Search">
                    <i class="fa fa-search text-gray-900"></i>
                </div>
                <!-- instagram card -->
                <div class="hidden md:flex">
                    <NuxtLink to="https://x.com/emmy1_kato" target="_blank">
                        <HeaderSocialCard :title="'twitter'" :icon="'fa fa-twitter-square'" />
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/kato-emmanuel-14335723a/" target="_blank">
                        <HeaderSocialCard :title="'LinkedIn'" :icon="'fa fa-linkedin-square'" />
                    </NuxtLink>
                    <NuxtLink to="https://github.com/Katoemma" target="_blank">
                        <HeaderSocialCard :title="'Github'" :icon="'fa fa-github'"/>
                    </NuxtLink>
                    
                </div>

            </div>

        </div>
    </div>

</template>
<style>
.router-link-active {
  font-weight: bold;
  color: teal;
}
</style>