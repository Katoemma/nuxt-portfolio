<script setup>
//props
const props = defineProps({
    title: String,
    icon: String,
})

</script>
<template>
<div class="flex gap-2 items-center mt-2">
    <i class=" text-teal-500" :class="icon"></i>
    <span class="text-gray-400 text-sm">{{ title }}</span>
</div>
</template>