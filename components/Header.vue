<template>
    <nav>
        <ul>
            <li v-if="$store.state.token == 'false'">
                <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li v-else="$store.state.token == 'true'" @click="logOut">
                <NuxtLink to="/">Logout</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/signup">Signup</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logOut() {
            localStorage.setItem("token", 'false');
            this.$store.commit('editToken', 'false');
            console.log(this.token);
        }
    }
}
</script>

<style>
nav {
    background-color: rgb(44, 40, 40);
    display: flex;
    justify-content: flex-end;
    padding: 5px 25px;
}

ul {
    list-style-type: none;
    display: flex;
    gap: 15px;
    text-decoration: none;
}

a {
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-size: 20px;
}
</style>