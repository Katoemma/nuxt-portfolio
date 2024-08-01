<script setup>
const props = defineProps({
    logoUrl: String,
    language: String,
})
</script>

<template>
    <div class="bg-white rounded-full p-8">
        <img :src="`${props.logoUrl}`" class="w-16 h-16 fill-white" :alt="`${props.language} logo`">
    </div>
</template>
