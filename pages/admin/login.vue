<script setup>
const supabase = useSupabaseClient()
definePageMeta({
    layout: 'auth',
})

const email = ref('')
const password = ref('')
const errorMsg = ref('')

//function to clear error message
const clearError = () => {
    if(errorMsg.value != '') {
        errorMsg.value = ''
    }
}

const login = async () => {
    if (!email.value || !password.value) {
        errorMsg.value = 'Please fill in all fields'
        return
    }
    try {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })

        if (!error) {
            // Redirect to dashboard
            console.log(data)
            //navigateTo('/admin/dashboard')
        } else {
            errorMsg.value = error.message
        }
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
    <div>
        <!-- Add Logo here -->
        <div class="flex justify-center mb-6">
            <img src="../../public/logo.png" alt="Logo" class="h-16" />
        </div>
        <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>
        <!-- error alert -->
         <div v-if="errorMsg != ''" class="p-4 bg-red-100 border border-red-500 rounded my-4">
            <p class="text-red-500">{{ errorMsg }}</p>
         </div>
        <div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your email" v-model="email" @change="clearError" />
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700 mb-2">Password</label>
                <input type="password" id="password"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your password" v-model="password"/>
            </div>
            <button @click="login" class="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
                Login
            </button>
        </div>
        <p class="text-center text-gray-600 mt-4">
            Don't have an account?
            <nuxt-link to="/admin/register" class="text-green-500 font-semibold hover:underline">
                Register
            </nuxt-link>
        </p>
    </div>
</template>