<script setup>

</script>
<template>
    <div class="p-4 bg-black pb-12">
        <hr class="border-gray-600">
        <div class="flex flex-col md:flex-row-reverse justify-center items-center p-4 text-center md:text-left gap-8">
            <div class="flex gap-4 cursor-pointer">
                <i class="fa fa-instagram bg-teal-600 rounded-full p-3 px-4 text-white text-xl"></i>
                <i class="fa fa-github bg-teal-600 rounded-full p-3 px-4 text-white text-xl"></i>
                <i class="fa fa-linkedin bg-teal-600 rounded-full p-3 px-4 text-white text-xl"></i>
            </div>
            <div class="flex flex-wrap gap-10">
                <p class="text-white">© 2022 - All rights reserved</p>
                <p class="text-white">Privacy Policy</p>
                <p class="text-white">Terms & Conditions</p>
            </div>
            <nuxt-link to="/admin/">
                <p class="text-white">Admin</p>
            </nuxt-link>
        </div>
    </div>
</template>