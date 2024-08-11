<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
</script>
<template>
    <div class="p-6 bg-white rounded-lg shadow">
  <h2 class="text-2xl font-bold mb-4">Projects</h2>
  <p class="text-gray-600 mb-6">Manage your projects and track their progress.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="p-4 border rounded-lg">
      <h3 class="font-semibold text-lg">Project A</h3>
      <p class="text-gray-500">A brief description of Project A.</p>
      <div class="mt-2 flex items-center justify-between">
        <span class="text-sm text-gray-600">In Progress</span>
        <span class="text-sm text-gray-600">75%</span>
      </div>
      <div class="bg-gray-200 rounded-full h-2 mt-2">
        <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
      </div>
    </div>
    <!-- Repeat for other projects -->
  </div>
</div>


  </template>
  
  <style scoped>
    
  </style>
  