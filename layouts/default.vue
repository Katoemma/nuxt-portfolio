<script setup>

</script>
<template>
    <div class="bg-gray-800 ibm-plex">
        <Header />
        <slot />
        <Footer />
    </div>
    
</template>
<style>
.ibm-plex{
  font-family: "IBM Plex Mono", monospace;
  font-weight: 400;
  font-style: normal;
}
</style>