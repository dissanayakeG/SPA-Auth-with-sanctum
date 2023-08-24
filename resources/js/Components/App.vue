<template>
    <div>
        <div class="mb-5">
            <!-- v-if="this.$route.name !== 'login' && this.$route.name !== 'register'" -->
            <nav class="navbar fixed-top bg-gray-800 text-white mb-5">
                <ul class="navbar-nav flex items-center justify-end flex-wrap py-4 px-8 space-x-4" style="width: 100%">
                    <li class="nav-item {{ $route.name === 'dashboard' ? 'active' : '' }}">
                        <router-link to="/dashboard" class="nav-link font-semibold hover:text-blue-500">Home</router-link>
                    </li>
                    <li class="nav-item {{ $route.name === 'about' ? 'active' : '' }}">
                        <router-link to="/about" class="nav-link font-semibold hover:text-blue-500">About</router-link>
                    </li>
                    <li class="nav-item {{ $route.name === 'login' ? 'active' : '' }}">
                        <router-link to="/login" class="nav-link font-semibold hover:text-blue-500">SignIn</router-link>
                    </li>
                    <li class="nav-item {{ $route.name === 'register' ? 'active' : '' }}">
                        <router-link to="/register" class="nav-link font-semibold hover:text-blue-500">SignUp</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="dropdown-item" href="javascript:void(0)" @click="logout">Logout</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        name: "App.vue",
        data() {
            return {
                user: this.$store.state.auth.user,
            };
        },
        mounted() {
            console.log("user: ", this.$store.state.auth.user);
        },

        methods: {
            ...mapActions({
                signOut: "auth/logout",
            }),
            async logout() {
                await axios.post("/api/auth/logout").then(({ data }) => {
                    this.signOut();
                    this.$router.push({ name: "login" });
                });
            },
        },
    };
</script>

<style scoped>
    .nav-bar {
        background-color: #e3f2fd;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .nav-link {
        cursor: pointer;
        font-size: 15px;
    }
</style>
