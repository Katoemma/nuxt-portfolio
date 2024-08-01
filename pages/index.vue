<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'Kato Emmanuel | Software Engineer',
  meta: [
    { name: 'description', content: 'Home page description' },]
})

</script>
<template>
<div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <WorksSection />
</div>
</template>