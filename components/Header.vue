<template>
    <nav>
        <NuxtLink v-if="$store.state.users.length" to="/login">Login</NuxtLink>
        <NuxtLink v-else to="/">Login</NuxtLink>
        <NuxtLink to="/signup">Signup</NuxtLink>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>