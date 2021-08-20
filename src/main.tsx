import './index.css'
import VueApp from './vue/App.vue'
import { createApp } from 'vue'
// import { renderReact } from './react/entry'

createApp(VueApp).mount('#app')

// Explicitly render React to a specific target.
// renderReact()
