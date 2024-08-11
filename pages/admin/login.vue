<script setup>
definePageMeta({
  layout: 'auth',
})
</script>
<template>
    <div>
      <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
      <form>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
      <p class="text-center text-gray-600 mt-4">
        Don't have an account?
        <nuxt-link to="/admin/register" class="text-green-500 font-semibold hover:underline">
          Register
        </nuxt-link>
      </p>
    </div>
  </template>
  
  