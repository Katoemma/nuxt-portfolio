<script setup>

</script>
<template>
    <div class="border-l-4 border-t-4 border-teal-500 rounded-ss-[30%]">
        <div class="border-4  flex flex-col justify-center p-12 rounded-ss-[30%] rounded-br-[30%]">
        <!-- Avatar -->
          <div class="flex justify-center">
            <img src="../../public/avatar.jpg" alt="user avatar" class="w-20 h-20 rounded-full border-4 border-teal-400">
        </div>
        <!-- Name -->
          <div class="flex justify-center mt-2">
            <h1 class="text-lg font-bold">Kato Emmanuel</h1>
        </div>
        <!-- Role -->
        <div class="flex justify-center mt-1 mb-4">
            <h1 class="text-sm font-medium text-gray-500">Full-Stack Developer</h1>
        </div>
        <HeroInfoCard :title="'katoemmy001@gmail.com'" :icon="'fa fa-envelope-o'"/>
        <HeroInfoCard :title="'Gulu, Uganda'" :icon="'fa fa-map-marker'"/>
        <HeroInfoCard :title="'Full-time / Freelancer'" :icon="'fa fa-briefcase'"/>
        <HeroInfoCard :title="'https://katoemma.netlify.app'" :icon="'fa fa-link'"/>
        <!-- skills tags -->
        <div class="flex justify-between mt-5 gap-2">
            <span class="bg-teal-500 text-black px-2 rounded-full">
                HTML
            </span>
            <span class="bg-teal-500 text-black px-2 rounded-full">
                CSS
            </span>
            <span class="bg-teal-500 text-black px-2 rounded-full">
                JS
            </span>
            <span class="bg-teal-500 text-black px-2 rounded-full">
                Flutter
            </span>
            
            
        </div>
        <div class="flex mt-5 gap-2"> 
            <span class="bg-teal-500 text-black px-2 rounded-full">
                Vue
            </span>
            <span class="bg-teal-500 text-black px-2 rounded-full">
                TailwindCSS
            </span>
        </div>

        <button class="bg-gray-100 text-gray-700 p-3 rounded-full mt-8">
              <i class="fa fa-download"></i>
            Download CV
        </button>

    </div>
    </div>
</template>