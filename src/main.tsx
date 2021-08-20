import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ReactApp from './react/App'
import VueApp from './vue/App.vue'
import { createApp } from 'vue'

ReactDOM.render(
  <React.StrictMode>
    <ReactApp />
  </React.StrictMode>,
  document.getElementById('root')
)

createApp(VueApp).mount('#app')