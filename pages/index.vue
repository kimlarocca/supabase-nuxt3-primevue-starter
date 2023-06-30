<template>
  <div class="text-center">
    <div class="w-4 mb-4 m-auto">
      <supabase-login-with-google class="mb-3" />
      <Divider align="center">
        <b>Or</b>
      </Divider>
      <supabase-login-with-email class="mb-4" />
    </div>
    <p class="mb-2">
      Don't have an account?
      <nuxt-link to="/onboarding">Register here</nuxt-link>
    </p>
    <p><nuxt-link to="/forgot-password">Forgot password?</nuxt-link></p>
  </div>
</template>

<script setup>
import { useCurrentUser } from '~/composables/states'
const config = useRuntimeConfig()
const currentUser = useCurrentUser()
const client = useSupabaseClient()
const user = await client.auth.getSession()

definePageMeta({
  layout: 'blank',
})

// check local storage for the auth token
const supabaseAuthToken = JSON.parse(
  window.localStorage.getItem(config.supabaseAuthTokenName)
)
if (supabaseAuthToken) {
  currentUser.value = supabaseAuthToken.user
}

// check supabase session for logged in user
if (user?.data?.session?.user) {
  currentUser.value = user?.data?.session?.user
}

// redirect to dashboard if the user is logged in
if (currentUser.value) {
  // for some reason, navigateTo doesn't work here?!
  window.location.href = '/dashboard'
}

// sometimes the supabase token doesn't get detected right away when magic links are used
// i don't think we should have to do this, but here we are
setTimeout(() => {
  // check if the user is logged in
  if (user?.data?.session?.user) {
    currentUser.value = user?.data?.session?.user
  }
  // redirect to dashboard if the user is logged in
  if (currentUser.value) {
    console.log('currentUser setTimeout found', currentUser.value)
    // for some reason, navigateTo doesn't work here?!
    window.location.href = '/dashboard'
  }
}, 1000)
</script>
