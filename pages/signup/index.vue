<template>
    <div>
        <h1>Signup</h1>
        <form>
            <label>Name</label>
            <input type="text" v-model="name">
            <label>Password</label>
            <input type="password" v-model="password">
            <button @click="loginHandler">Sign Up</button>
        </form>
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
            e.preventDefault();
            let taskList;
            const user = {'name': this.name, 'password': this.password};
            let localItems = JSON.parse(localStorage.getItem("users"));
            localItems === null ? taskList = [] : taskList = localItems;
            taskList.push(user);
            localStorage.setItem("users", JSON.stringify(taskList));
            this.$router.push('/');
            // this.$store.commit('editToken', localStorage.getItem("token"));
        }
    }
}
</script>
  