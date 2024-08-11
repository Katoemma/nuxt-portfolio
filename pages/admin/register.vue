<script setup>
definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <div>
    <!-- Add Logo here -->
    <div class="flex justify-center mb-6">
      <img src="../../public/logo.png" alt="Logo" class="h-16" />
    </div>
    <h2 class="text-2xl font-semibold text-center mb-6">Register</h2>
    <form>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 mb-2">Username</label>
        <input
          type="text"
          id="username"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your username"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your password"
        />
      </div>
      <div class="mb-6">
        <label for="confirm-password" class="block text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Confirm your password"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
      >
        Register
      </button>
    </form>
    <p class="text-center text-gray-600 mt-4">
      Already have an account?
      <nuxt-link to="/admin/login" class="text-green-500 font-semibold hover:underline">
        Login
      </nuxt-link>
    </p>
  </div>
</template>
