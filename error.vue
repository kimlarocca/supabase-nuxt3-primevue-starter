<template>
  <div class="pb-4 text-center">
    <h1 class="mb-4">404 Not Found</h1>
    <h3 class="mb-4">Not all those who wander are lost, but you sure are!</h3>
    <p class="mb-2">
      <a href="/">Click here to return to the login page.</a>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: {},
  },
})
</script>
