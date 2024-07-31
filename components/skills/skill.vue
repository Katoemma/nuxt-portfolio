<script setup>
</script>

<template>
    <div class="rounded flex flex-col items-center p-2 px-6 bg-teal-600 border-l-8 border-blue-500 border">
        <slot name="icon">
            <i class="fa fa-desktop text-2xl"></i>
        </slot>
        <h1 class="text-xl mt-2 font-bold">
            <slot name="title">Default Title</slot>
        </h1>
        <h4 class="text-gray-200 mt-2 text-sm">
            <slot name="subtitle">Default Subtitle</slot>
        </h4>
    </div>
</template>
