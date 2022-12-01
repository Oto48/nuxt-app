<template>
    <div>
        <h1>Login</h1>
        <form>
            <label>Name</label>
            <input type="text" v-model="name">
            <label>Password</label>
            <input type="password" v-model="password">
        </form>
        <button @click="loginHandler">Log In</button>
    </div>
</template>
  
<script>
export default {
    name: 'Login',
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        loginHandler() {
            const user = {'name': this.name, 'password': this.password};
            let localItems = JSON.parse(localStorage.getItem("users"));
            localItems === null ? 'undefined':
            localItems.forEach((x) => {
                if(JSON.stringify(x) == JSON.stringify(user)) {
                    localStorage.setItem("token", 'true');
                    this.$store.commit('editToken', 'true');
                    this.$router.push('/home');
                }
            }); 
        }
    }
}
</script>
  