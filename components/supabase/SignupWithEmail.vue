<template>
  <div>
    <template v-if="errorMessage">
      <Message class="mb-4" severity="error">
        {{ errorMessage }}
      </Message>
    </template>
    <template v-if="successMessage">
      <Message class="mb-4" severity="success">
        {{ successMessage }}
      </Message>
      <supabase-login-with-email />
    </template>
    <form v-if="!successMessage" @submit.prevent="login" class="width400">
      <input
        v-model="email"
        class="w-full mb-2"
        type="email"
        placeholder="Your email"
        required
      />
      <input
        v-model="password"
        class="w-full mb-2"
        type="password"
        placeholder="Your password"
        required
      />
      <Button
        label="Create Account With Email & Password"
        class="w-full"
        type="submit"
      />
    </form>
  </div>
</template>

<script setup>
const client = useSupabaseClient()

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const login = async () => {
  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (error) {
    console.log(error)
    if (error.toString().includes('already registered')) {
      errorMessage.value =
        'Looks like you already have an account! If you do not remember your password, you can retrieve it by clicking the "Forgot Password" link below.'
    } else {
      errorMessage.value = `Sorry, there was a problem creating this account. Please try signing up again! Error message: ${error}`
    }
  } else {
    successMessage.value =
      'Success! You may sign in now with your email and password:'
  }
}
</script>
