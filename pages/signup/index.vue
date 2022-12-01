<template>
    <div>
        <form>
        <label>Name</label>
        <input type="text" v-model="name">
        <label>Password</label>
        <input type="password" v-model="password">
        </form>
        <button @click="loginHandler">Log In</button>
        <div>
            {{$store.state.users}}
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Register',
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        loginHandler() {
            const user = {'name': this.name, 'password': this.password}
            this.$store.commit('ADD_USER', user)
            console.log(this.$store.state.users[0].name)
        }
    }
}
</script>
  