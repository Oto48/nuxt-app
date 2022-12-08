<template>
    <div class="container">
        <h1>Login</h1>
        <form>
            <label>Email</label>
            <input type="text" v-model="email">
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
            email: '',
            password: ''
        }
    },
    methods: {
        loginHandler(e) {
            e.preventDefault();
            console.log('ok')
            let localItems = this.$store.state.users;
            localItems === null ? 'undefined':
            localItems.forEach((user) => {
                if(user.email == this.email && user.password == this.password) {
                    const role = user.role;
                    const email = user.email;
                    localStorage.setItem("token", JSON.stringify({role, email}));
                    this.$store.commit('editToken', {role, name});
                    this.$router.push('/home');
                }
            }); 
        }
    }
}
</script>
  