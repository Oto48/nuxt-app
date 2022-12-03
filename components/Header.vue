<template>
    <nav class="bg-black">
        <ul>
            <li v-if="$store.state.token">
                <NuxtLink to="/profile">Profile</NuxtLink>
            </li>
            <li v-if="$store.state.token">
                <NuxtLink to="/rooms">Rooms</NuxtLink>
            </li>
            <li v-if="$store.state.token == 'admin'">
                <NuxtLink to="/users">Users</NuxtLink>
            </li>
            <li v-if="$store.state.token == 'admin'">
                <NuxtLink to="/desks">Desks</NuxtLink>
            </li>
        </ul>
        <ul>
            <li v-if="!$store.state.token">
                <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li v-if="$store.state.token" @click="logOut">
                <NuxtLink to="/">Logout</NuxtLink>
            </li>
            <li v-if="!$store.state.token">
                <NuxtLink to="/signup">Signup</NuxtLink>
            </li>
            <li style="color:white" v-if="$store.state.token">
                <NuxtLink to="/">{{$store.state.token}}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Header',
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