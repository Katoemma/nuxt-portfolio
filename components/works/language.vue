<script setup>
  
const skills = ref([]);

// Function to update skills dynamically
const updateSkills = () => {
  const skillNames = ['HTML', 'CSS', 'JS', 'Tailwind','Vue','NUXT'];
  const centerX = 0;
  const centerY = 0;
  const radius = 150; // Adjust radius as needed

  skills.value = skillNames.map((name, index, array) => {
    const angle = (index / array.length) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    return {
      name,
      transform: `translate(${x}px, ${y}px)`
    };
  });
};

onMounted(() => {
  updateSkills();
});
</script>
<template>
    <div class="flex flex-col items-center justify-center h-96 motion-safe:animate-pulse">
      <div class="relative w-72 md:w-96 h-72 md:h-96">
        <div class="absolute inset-0 flex justify-center items-center">
          <div v-for="(skill, index) in skills" :key="index" :style="{ transform: skill.transform }" class="absolute flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full text-white shadow-md">
            <p class="text-xs font-bold">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  