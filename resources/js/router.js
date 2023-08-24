import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

import About from "./Components/About.vue"
import CustomerList from "./Components/CustomerList.vue"
const Login = () => import('./Components/Login.vue')
const Register = () => import('./Components/Register.vue')
const Dashboard = () => import('./Components/DashBoard.vue')


const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        name: "dashBoard",
        path: "/",
        component: Dashboard,
        meta: {
            middleware: "guest"
        },
    },
    {
        name: "dashBoard",
        path: "/dashBoard",
        component: Dashboard,
        meta: {
            middleware: "guest"
        },
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        meta: {
            middleware: "auth"
        },
    },
    {
        name: 'customer',
        path: '/customer',
        component: CustomerList
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const state = {
    isRedirecting: false
}

router.beforeEach((to, from, next) => {
    if (!state.isRedirecting && to.meta.middleware == "guest") {
        state.isRedirecting = true;
        if (store.state.auth.authenticated) {
            next({ name: "dashBoard" })
        }
        next()
    } else {
        state.isRedirecting = false; // Reset the flag
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router
