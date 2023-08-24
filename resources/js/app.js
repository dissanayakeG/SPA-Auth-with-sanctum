// require('./bootstrap');
import './bootstrap';
import '../css/app.css';

import store from './store/index'

import { createApp } from 'vue'

import router from './router'

import app from './Components/App.vue'

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

createApp(app).use(router).use(store).mount("#app")