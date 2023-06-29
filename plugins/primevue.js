// import all the primevue components you need here

import {
    defineNuxtPlugin
} from "#app"
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Message from "primevue/message"
import Divider from 'primevue/divider'
import ProgressSpinner from 'primevue/progressspinner'
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import FileUpload from 'primevue/fileupload';
import AutoComplete from 'primevue/autocomplete';
import ProgressBar from 'primevue/progressbar';
import Sidebar from 'primevue/sidebar';

export default defineNuxtPlugin( ( nuxtApp ) => {
    nuxtApp.vueApp.use( PrimeVue, {
        ripple: true
    } )
    nuxtApp.vueApp.component( 'Button', Button )
    nuxtApp.vueApp.component( 'Message', Message )
    nuxtApp.vueApp.component( 'Divider', Divider )
    nuxtApp.vueApp.component( 'ProgressSpinner', ProgressSpinner )
    nuxtApp.vueApp.component( 'InputText', InputText )
    nuxtApp.vueApp.component( 'Checkbox', Checkbox )
    nuxtApp.vueApp.component( 'FileUpload', FileUpload )
    nuxtApp.vueApp.component( 'AutoComplete', AutoComplete )
    nuxtApp.vueApp.component( 'ProgressBar', ProgressBar )
    nuxtApp.vueApp.component( 'Sidebar', Sidebar )
} )