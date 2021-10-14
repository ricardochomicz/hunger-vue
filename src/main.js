require('./bootstrap')
require('./plugins')
window.Vue = require('vue').default;

import {
    Vue, createApp
} from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'
import
store
from './store'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css'



const app = createApp(BaseTemplate)
app.use(store)
app.use(router)
app.use(VueToast)
app.mount('#app')

app.component('preloader', require('./components/Preloader.vue').default)
