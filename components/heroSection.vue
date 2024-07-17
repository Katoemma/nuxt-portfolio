<script setup>

</script>
<template>
<div class="flex flex-col md:flex-row   gap-10 text-white p-10">
    <div class="hidden md:block">
        <HeroTabMenu />
    </div>
    <div class="flex flex-col items-center gap-5">
        <h1 class="hidden md:block text-teal-500 text-7xl ubuntu mb-5">Developer</h1>
        <div class="flex flex-col md:flex-row gap-16 md:justify-between md:px-16">
            <HeroUserCards />
            <HeroText />
            <HeroSummaryCard />
        </div>
    </div>
</div>
</template>
<style>
    .ubuntu{
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>