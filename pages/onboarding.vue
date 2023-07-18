<template>
  <div class="text-center">
    <h1 class="mb-4">Create your account</h1>
    <div class="lg:w-4 mb-6 m-auto">
      <supabase-login-with-google
        label="create account with google"
        class="mb-3"
      />
      <div class="width400 mb-4">
        <Divider align="center">
          <b>Or</b>
        </Divider>
      </div>
      <supabase-signup-with-email />
    </div>
    <p class="mb-2">
      Already have an account?
      <nuxt-link to="/">Click here to sign in</nuxt-link>
    </p>
    <p><nuxt-link to="/forgot-password">Forgot password?</nuxt-link></p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank',
})
</script>
