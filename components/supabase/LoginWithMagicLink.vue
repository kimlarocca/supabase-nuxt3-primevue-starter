<template>
  <div>
    <template v-if="errorMessage">
      <Message class="mb-4" severity="error">
        Sorry, there was a problem logging in to your account:
        {{ errorMessage }}
      </Message>
    </template>
    <template v-if="successMessage">
      <Message class="mb-4" severity="success">
        {{ successMessage }}
      </Message>
    </template>
    <form @submit.prevent="login" class="lg:w-4 m-auto">
      <input
        v-model="email"
        class="w-full mb-2"
        type="email"
        placeholder="Your email"
        required
      />
      <Button :label="label" class="w-full" type="submit" />
    </form>
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const config = useRuntimeConfig()

const email = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const props = defineProps({
  label: {
    type: String,
    default: 'Sign In With Magic Link',
  },
})

const login = async () => {
  const { data, error } = await client.auth.signInWithOtp(
    {
      email: email.value,
    },
    {
      redirectTo: config.supabaseAuthSignInRedirectTo,
    }
  )
  if (error) {
    console.log(error)
    errorMessage.value = `Sorry, there was a problem logging with your magic link. Please try again! Error message: ${error}`
  } else {
    successMessage.value =
      'Success! If you created an account with that email address, you will get an email to with a magic link to login.<br>If you created your account with Google or Apple, please log in with those options.'
  }
}
</script>
