import './bootstrap';

import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from "vue"

import App from "./components/App.vue"

import router from './routeur'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount("#app")
