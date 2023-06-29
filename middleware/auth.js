import {
  useCurrentUser,
  useCurrentUserProfile
} from '~/composables/states'

export default defineNuxtRouteMiddleware( ( to, from ) => {
  const currentUser = useCurrentUser()
  const currentUserProfile = useCurrentUserProfile()
  const config = useRuntimeConfig()
  const client = useSupabaseClient()

  // function that gets a user profile
  const getProfile = async () => {
    const {
      data,
      error
    } = await client
      .from( 'profiles' )
      .select( '*' )
      .eq( 'id', currentUser.value.id )
      .single()
    if ( error ) {
      console.error( error )
    } else if ( data ) {
      currentUserProfile.value = data
    }
  }

  // check the dev environment for the auth token
  const supabaseAuthTokenDev = JSON.parse(
    window.localStorage.getItem( config.supabaseAuthTokenName )
  )
  if ( supabaseAuthTokenDev ) {
    currentUser.value = supabaseAuthTokenDev.user
  }

  // TO DO
  // check the prod environment for the auth token
  //

  // if the user is not authorized, redirect them to the login page
  // if they are, get their profile data
  if ( !currentUser.value ) {
    return navigateTo( '/' )
  } else if ( !currentUserProfile.value ) {
    getProfile()
  }
} )