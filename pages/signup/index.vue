<template>
    <div>
        <h1>Signup</h1>
        <form>
            <label>Name</label>
            <input type="text" v-model="name">
            <label>Password</label>
            <input type="password" v-model="password">
            <select v-model="role">
                <option value="admin">Admin</option>
                <option value="manager">Room manager</option>
                <option value="client">Client</option>
            </select>
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
            password: '',
            role: ''
        }
    },
    methods: {
        loginHandler(e) {
            e.preventDefault();
            let taskList;
            const user = {'name': this.name, 'password': this.password, 'role': this.role};
            let localItems = JSON.parse(localStorage.getItem("users"));
            localItems === null ? taskList = [] : taskList = localItems;
            taskList.push(user);
            localStorage.setItem("users", JSON.stringify(taskList));
            this.$router.push('/');
        }
    }
}
</script>
  