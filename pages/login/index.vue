<template>
    <form>
        <label>Email</label>
        <input type="email" v-model="email">
        <label>Password</label>
        <input type="password" v-model="password">
        <button @click="loginHandler">Log In</button>
    </form>
</template>
  
<script>
export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        loginHandler() {
            const login = {'email': this.email, 'password': this.password}
            console.log(login)
        }
    }
}
</script>
  