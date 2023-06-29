<template>
  <div>
    <header class="w-full flex align-items-center justify-content-between">
      <div>
        <i class="pi pi-bars text-2xl clickable" @click="visible = true" />
      </div>
      <nuxt-link to="/dashboard" class="plain">
        <img
          width="186"
          height="75"
          src="https://nypublicradio.org/wp-content/uploads/2019/10/nypr.svg"
          alt="New York Public Radio"
          decoding="async"
        />
      </nuxt-link>
      <nuxt-link to="/settings" class="plain clickable">
        <img
          v-if="currentUserProfile && currentUserProfile.avatar_image_url"
          :src="currentUserProfile.avatar_image_url"
          alt="profile photo"
          class="profile-photo"
        />
        <i v-else class="pi pi-user text-2xl" />
      </nuxt-link>
    </header>
    <Sidebar
      v-model:visible="visible"
      :baseZIndex="10000"
      position="left"
      class="text-center"
    >
      <nuxt-link
        to="/dashboard"
        class="block plain mb-4"
        @click="visible = false"
      >
        Home
      </nuxt-link>
      <nuxt-link
        to="/settings"
        class="block plain mb-4"
        @click="visible = false"
      >
        Settings & Preferences
      </nuxt-link>
      <a href="/logout" class="block plain mb-6" @click="visible = false">
        Logout
      </a>
    </Sidebar>
  </div>
</template>

<script setup>
import { useCurrentUserProfile } from '~/composables/states'

const currentUserProfile = useCurrentUserProfile()
const visible = ref(false)
</script>

<style lang="scss">
header .profile-photo {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
</style>
