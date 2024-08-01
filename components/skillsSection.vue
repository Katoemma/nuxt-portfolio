<script setup>

</script>

<template>
<div class="bg-code-bg bg-cover">
    <div class="flex flex-col items-center bg-black/70 text-white py-12 px-4">
        <UniversalScrollMouse />
        <UniversalHeading>
            <template #title>
                Skills
            </template>
        </UniversalHeading>
        <p class="text-gray-300 mt-8 text-lg p-2 text-center">I am striving to never stop learning</p>
        <div class="flex flex-col md:flex-row mt-8 gap-8 md:gap-24 mx-auto w-full md:w-auto justify-between">
            <SkillsSkill>
                <template #icon>
                    <i class="fa fa-desktop text-2xl"></i>
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
                    <i class="fa fa-mobile text-3xl"></i>
                </template>
                <template #title>
                    App Development
                </template>
                <template #subtitle>
                    FLUTTER iOS-Android
                </template>
            </SkillsSkill>
        </div>
        <div class="flex flex-wrap gap-14 md:gap-8 my-4 md:my-32 items-center p-8">
            <SkillsLanguage :language="'HTML 5'" :logo-url="'html_logo.png'"/>
            <SkillsLanguage :language="'css 3'" :logo-url="'css_logo.png'"/>
            <SkillsLanguage :language="'JavaScript'" :logo-url="'js_logo.png'"/>
            <SkillsLanguage :language="'Vue 3'" :logo-url="'vue_logo.png'"/>
            <SkillsLanguage :language="'Flutter'" :logo-url="'flutter_logo.png'"/>
        
        </div>
    </div>
</div>
</template>
