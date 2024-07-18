<script setup>

</script>
<template>
    <div class="hidden lg:flex flex-col items-center">
        <div class="mouse-icon"></div>
        <div class="dashed-line"></div>
        <div class="w-2 h-2 rounded-full bg-white"></div>
    </div>
</template>
<style>
        /* Custom styles for the dashed line and mouse icon */
        .mouse-icon {
            width: 24px;
            height: 36px;
            border: 2px solid #00C8C8;
            border-radius: 12px;
            position: relative;
        }
        .mouse-icon::before {
            content: '';
            width: 4px;
            height: 8px;
            background: #00C8C8;
            position: absolute;
            top: 4px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 2px;
        }
        .dashed-line {
            width: 2px;
            height: 80px;
            border-left: 2px dashed #FFFFFF;
            margin: 0 auto;
        }
    </style>