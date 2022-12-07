<template>
    <nav class="bg-black">
        <ul>
            <li v-if="$store.state.token.role">
                <NuxtLink to="/rooms">Rooms</NuxtLink>
            </li>
            <li v-if="$store.state.token.role == 'admin'">
                <NuxtLink to="/users">Users</NuxtLink>
            </li>
        </ul>
        <ul>
            <li v-if="!$store.state.token.role">
                <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li v-if="$store.state.token.role" @click="logOut">
                <NuxtLink to="/">Logout</NuxtLink>
            </li>
            <li v-if="!$store.state.token.role">
                <NuxtLink to="/signup">Signup</NuxtLink>
            </li>
            <li style="color:white" v-if="$store.state.token.role">
                {{$store.state.token.role}}
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            user: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "",
        }
    },
    methods: {
        logOut() {
            localStorage.setItem("token", '');
            this.$store.commit('editToken', '');
        }
    }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 5px 25px;
    font-weight: bold;
    font-size: 20px;
}

ul {
    list-style-type: none;
    display: flex;
    gap: 15px;
    text-decoration: none;
    padding: 0;
}

a {
    text-decoration: none;
    color: white;
}
</style>