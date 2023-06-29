<template>
  <div class="pb-4 text-center">
    <h1 class="mb-6">Magic Link Login</h1>
    <template v-if="errorMessage">
      <Message class="mb-4" severity="error">
        Sorry, there was a problem logging in to your account.
      </Message>
    </template>
    <p>
      <a href="/">
        Please wait a few moments. If you are not automatically logged in, click
        here! Your magic link may have expired.
      </a>
    </p>
  </div>
</template>

<script setup>
import { useCurrentUser } from '~/composables/states'
const currentUser = useCurrentUser()
const config = useRuntimeConfig()

definePageMeta({
  layout: 'blank',
})

// check the dev environment for the auth token
const supabaseAuthTokenDev = JSON.parse(
  window.localStorage.getItem(config.supabaseAuthTokenName)
)
if (supabaseAuthTokenDev) {
  currentUser.value = supabaseAuthTokenDev.user
}

// TO DO
// check the prod environment for the auth token
//

// for some reason, navigateTo doesn't work here?!
window.location.href = '/dashboard'
</script>
