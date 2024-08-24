<script setup>
const colorMode = useColorMode()

colorMode.preference = 'light'

console.log(colorMode.preference)
</script>
<template>
    <div
        class="flex flex-col h-max border-r-2 border-r-gray-200 bg-gray-80 dark:bg-gradient-to-br from-slate-900 to-blue-900 rounded-r-xl">
        <div class="flex justify between items-center gap-3 px-5 py-8 bg-white dark:bg-transparent">
            <!-- Avatar image with active badge -->
            <div class="relative">
                <img src="/avatar.jpg" alt="Avatar" class="w-16 h-16 rounded-full border-2 border-gray-200 p-1">
                <span
                    class="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold text-lg dark:text-gray-100">Kato Emmanuel</span>
                <span class="text-sm text-gray-500 dark:text-gray-200">john.doe@example.com</span>
            </div>
        </div>
        <div class="flex flex-col mt-10">
            <NuxtLink to="/admin" class="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"> <i
                    class="fa fa-home"></i> Dashboard</NuxtLink>
            <NuxtLink to="/dashboard/users" class="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"> <i
                    class="fa fa-envelope"></i> Messages</NuxtLink>
            <NuxtLink to="/admin/transactions" class="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"> <i
                    class="fa fa-suitcase"></i> Projects</NuxtLink>
            <NuxtLink to="/admin/settings" class="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"><i
                    class="fa fa-briefcase"></i> Services</NuxtLink>
            <NuxtLink to="/admin/settings" class="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"><i
                    class="fa fa-cog"></i> Settings</NuxtLink>
        </div>
        <div class="flex flex-col mt-auto p-4">
            <div class="flex justify-between">
                <h1>Team</h1>
                <div class="flex gap-2 items-center text-orange-500">
                    <span class="text-sm font-bold">VIEW ALL</span>
                    <i class="fa fa-eye"></i>
                </div>
            </div>

            <div class="flex gap-3 mt-4" v-for="n in 3">
                <!-- Avatar image with active badge -->
                <div class="relative" >
                    <img src="/avatar.jpg" alt="Avatar" class="w-8 h-8 rounded-full border-2 border-gray-200">
                    <span
                        class="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold text-white bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <!-- teammate name -->
                <div class="flex flex-col">
                    <span class="font-bold text-sm dark:text-gray-100">Kato Emmanuel</span>
                    
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <NuxtLink to="/admin/logout" class="flex items-center gap-3 px-5 py-3 hover:bg-gray-100"><i
                    class="fa fa-sign-out"></i> Logout </NuxtLink>
        </div>
    </div>
</template>
<style>
.router-link-active {
    font-weight: bold;
    color: teal;
}
</style>