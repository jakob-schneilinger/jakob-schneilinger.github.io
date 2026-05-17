import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Legal from './components/Legal.vue'
import About from './components/About.vue'
import Accessibility from './components/Accessibility.vue'
import License from './components/License.vue'
import Privacy from './components/Privacy.vue'
import {createRouter, createWebHistory} from "vue-router";


const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Legal },
  { path: '/datenschutz', component: Privacy  },
  { path: '/lizenz', component: License },
  { path: '/barrierefreiheit', component: Accessibility },
  { path: '/ueber-uns', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
