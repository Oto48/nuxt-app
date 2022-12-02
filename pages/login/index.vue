<template>
    <div>
        <h1>Login</h1>
        <form>
            <label>Name</label>
            <input type="text" v-model="name">
            <label>Password</label>
            <input type="password" v-model="password">
            <button @click="loginHandler">Log In</button>
        </form>
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
        loginHandler(e) {
            e.preventDefault();
            let localItems = JSON.parse(localStorage.getItem("users"));
            localItems === null ? 'undefined':
            localItems.forEach((user) => {
                if(user.name == this.name && user.password == this.password) {
                    localStorage.setItem("token", user.role);
                    this.$store.commit('editToken', user.role);
                    this.$router.push('/home');
                }
            }); 
        }
    }
}
</script>
  