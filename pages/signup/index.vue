<template>
    <div>
        <h1>Signup</h1>
        <form>
            <label>Name</label>
            <input type="text" v-model="name" required>
            <label>Email</label>
            <input type="email" v-model="email" required>
            <label>Password</label>
            <input type="password" v-model="password">
            <label>Role</label>
            <select v-model="role">
                <option value="" selected disabled hidden>Choose Role</option>
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
            email: '',
            password: '',
            role: ''
        }
    },
    methods: {
        loginHandler(e) {
            e.preventDefault();
            let userData;
            const user = {'name': this.name, 'email': this.email, 'password': this.password, 'role': this.role};
            let localItems = JSON.parse(localStorage.getItem("users"));
            if(localItems === null) {
                userData = [];
                userData.push(user);
                localStorage.setItem("users", JSON.stringify(userData));
                this.$router.push('/');
            } else {
                userData = localItems;
                let getUser;
                localItems.forEach((user) => {
                    if(user.email == this.email) {
                        getUser = true;
                    }
                });
                if(getUser) {
                    alert("email is used !");
                } else {
                    userData.push(user);
                    localStorage.setItem("users", JSON.stringify(userData));
                    this.$router.push('/');
                }
            }
        }
    }
}
</script>
  