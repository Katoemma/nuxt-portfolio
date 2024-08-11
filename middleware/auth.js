//auth with supabase middle ware
export default defineNuxtRouteMiddleware(()=>{
    const user = useSupabaseUser()
    if(!user.value){
        return navigateTo('/admin/login')
    }else{
        return navigateTo('/admin/dashboard')
    }
})