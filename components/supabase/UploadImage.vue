<template>
  <div class="upload-image">
    <ProgressSpinner class="inline-block mb-4" v-if="uploading" />
    <img
      v-else-if="imageUrl"
      :src="imageUrl"
      alt="profile photo"
      class="mb-4"
    />
    <p v-else class="mb-3">You have not added a profile photo yet.</p>
    <div class="flex">
      <FileUpload
        mode="basic"
        :customUpload="true"
        @uploader="uploadImage"
        accept="image/*"
        :maxFileSize="1000000"
        :fileLimit="1"
        choose-label="Upload Image"
        :auto="true"
      />
      <Button v-if="imageUrl" @click="deleteImage" class="p-button-danger ml-3">
        Remove Image
      </Button>
    </div>
    <p class="mt-4">
      <em>
        Image files must be less than 1MB in size, and should ideally be a
        square. Jpg, png, webp, and gif files are accepted.
      </em>
    </p>
    <template v-if="errorMessage">
      <Message class="mt-4" severity="error">
        {{ errorMessage }}
      </Message>
    </template>
    <template v-if="successMessage">
      <Message :sticky="false" :life="5000" class="mt-4" severity="success">
        {{ successMessage }}
      </Message>
    </template>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
import { useCurrentUser, useCurrentUserProfile } from '~/composables/states'

const currentUser = useCurrentUser()
const currentUserProfile = useCurrentUserProfile()
const config = useRuntimeConfig()
const supabase = createClient(config.supabaseUrl, config.supabaseKey)

const props = defineProps({
  image: {
    type: String,
    default: '',
    required: true,
  },
})

const uploading = ref(false)
const errorMessage = ref()
const successMessage = ref()
const imageUrl = ref(props.image)

const uploadImage = async (event) => {
  try {
    uploading.value = true
    const file = event.files[0]
    const fileExt = file.name.split('.').pop()
    const filePath = `${props.userId}-${Math.random()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    const { data: imagePublicUrl } = await supabase.storage
      .from('avatars')
      .getPublicUrl(filePath)

    imageUrl.value = imagePublicUrl.publicUrl

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: currentUser.value.id,
        updated_at: new Date().toISOString(),
        avatar_image_url: imageUrl.value,
      })
      .match({ id: currentUser.value.id })
    if (error) {
      console.log(error)
      errorMessage.value = `Error: ${error}`
    } else {
      successMessage.value = 'Success! Your changes have been saved.'
      currentUserProfile.value.avatar_image_url = imageUrl.value
    }
  } catch (error) {
    errorMessage.value = `Error: ${error}`
  } finally {
    uploading.value = false
  }
}

// delete the image from the database and storage
const deleteImage = async () => {
  const { error } = await supabase
    .from('profiles')
    .upsert({
      id: currentUser.value.id,
      updated_at: new Date().toISOString(),
      avatar_image_url: null,
    })
    .match({ id: currentUser.value.id })
  if (error) {
    console.log(error)
    errorMessage.value = `Error: ${error}`
  } else {
    successMessage.value = 'Success! Your photo has been deleted.'
    imageUrl.value = null
    currentUserProfile.value.avatar_image_url = null
  }
}
</script>

<style lang="scss">
.upload-image img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style>
