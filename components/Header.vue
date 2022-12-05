<template>
    <nav class="bg-black">
        <ul>
            <li v-if="this.user.role">
                <NuxtLink to="/profile">Profile</NuxtLink>
            </li>
            <li v-if="this.user.role">
                <NuxtLink to="/rooms">Rooms</NuxtLink>
            </li>
            <li v-if="this.user.role == 'admin'">
                <NuxtLink to="/users">Users</NuxtLink>
            </li>
            <li v-if="this.user.role">
                <NuxtLink to="/desks">Desks</NuxtLink>
            </li>
        </ul>
        <ul>
            <li v-if="!this.user.role">
                <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li v-if="this.user.role" @click="logOut">
                <NuxtLink to="/">Logout</NuxtLink>
            </li>
            <li v-if="!this.user.role">
                <NuxtLink to="/signup">Signup</NuxtLink>
            </li>
            <li style="color:white" v-if="this.user.role">
                <NuxtLink to="/">{{this.user.role}}</NuxtLink>
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
    font-weight: bold;
    color: white;
    font-size: 20px;
}
</style>