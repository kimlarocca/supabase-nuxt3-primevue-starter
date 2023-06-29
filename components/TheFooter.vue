<template>
  <footer class="text-center">
    <Divider class="my-7" />
    <div class="flex justify-content-between">
      <p class="mb-5 uppercase font-bold">
        <a
          href="https://www.wnyc.org/privacy/"
          target="_blank"
          class="plain mr-4"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.wnyc.org/terms/"
          target="_blank"
          class="plain mr-4"
        >
          Terms
        </a>
        <a
          href="https://media.wnyc.org/media/resources/2022/May/06/accessibility_policy_5.6.22.pdf"
          target="_blank"
          class="plain"
        >
          Accessibility
        </a>
      </p>
      <p>Copyright © {{ currentYear }} New York Public Radio</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
