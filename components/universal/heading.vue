<script setup>

</script>
<template>
    <div>
        <div class="text-center">
        <h1 class="text-6xl font-bold text-teal-400">Skills</h1>
        <div class="custom-line w-full bg-teal-500 after:bg-teal-500 before:bg-teal-500">
            <div></div>
        </div>
    </div>
    </div>
</template>
<style>
        .custom-line {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-top: 8px;
        }

        .custom-line::before,
        .custom-line::after {
            content: '';
            width: 15px;
            height: 15px;
            border-radius: 50%;
            position: absolute;
        }

        .custom-line::before {
            left: -15px;
        }

        .custom-line::after {
            right: -15px;
        }

        .custom-line div {
            height: 4px;
            width: 100%;
            
        }
    </style>