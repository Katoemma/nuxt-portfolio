<script setup>
</script>

<template>
<div class="bg-code-bg bg-cover">
    <div class="flex flex-col items-center bg-black/70 text-white py-12">
        <UniversalScrollMouse />
        <UniversalHeading />
        <p class="text-gray-300 mt-8 text-lg p-2">I am striving to never stop learning</p>
        <div class="flex flex-col md:flex-row mt-8 gap-8 md:gap-24 mx-auto justify-between">
            <SkillsSkill>
                <template #icon>
                    <i class="fa fa-code text-2xl"></i>
                </template>
                <template #title>
                    Web Development
                </template>
                <template #subtitle>
                    HTML-CSS-JS-VUE
                </template>
            </SkillsSkill>
            <SkillsSkill>
                <template #icon>
                    <i class="fa fa-code text-2xl"></i>
                </template>
                <template #title>
                    Web Development
                </template>
                <template #subtitle>
                    HTML-CSS-JS-VUE
                </template>
            </SkillsSkill>
        </div>
    </div>
</div>
</template>
