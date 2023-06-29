<template>
  <div class="page-header mb-6">
    <div class="p-3 mb-3 container">
      <h1 class="pb-2">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
  height: 250px;
  background: url('/images/on-air-header-background.jpg');
}
.page-header .container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.page-header h1 {
  font-size: var(--font-size-11);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--white);
  border-bottom: 0.125rem solid var(--white);
  letter-spacing: 0.23125rem;
}
</style>
