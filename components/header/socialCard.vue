<script setup>
const props = defineProps({
    title: String,
    icon: String,
})

</script>
<template>
<div class="flex items-center gap-2 px-2">
    <i class="text-teal-400" :class="icon"></i>
    <span class="hidden xl:block">{{ title }}</span>
</div>
</template>