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