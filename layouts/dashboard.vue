<template>
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-6">My Portfolio</h2>
          <nav>
            <ul>
              <li class="mb-4">
                <NuxtLink to="/" exact class="flex items-center p-2 rounded hover:bg-gray-700">
                  <span class="ml-2">Dashboard</span>
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/projects" class="flex items-center p-2 rounded hover:bg-gray-700">
                  <span class="ml-2">Projects</span>
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/todo" class="flex items-center p-2 rounded hover:bg-gray-700">
                  <span class="ml-2">To-Do</span>
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/emails" class="flex items-center p-2 rounded hover:bg-gray-700">
                  <span class="ml-2">Emails</span>
                </NuxtLink>
              </li>
              <li class="mb-4">
                <NuxtLink to="/more" class="flex items-center p-2 rounded hover:bg-gray-700">
                  <span class="ml-2">More</span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 bg-gray-100 p-6">
        <slot />
      </main>
    </div>
  </template>
  
  <style>
  /* Add custom styles here if needed */
  </style>
  