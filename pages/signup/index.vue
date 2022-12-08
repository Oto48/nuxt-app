<template>
    <div>
        <h1>Signup</h1>
        <form>
            <label>Name</label>
            <input type="text" v-model="name" required>
            <p v-if="!validName"><span>*</span> Name required</p>
            <label>Email</label>
            <input type="email" v-model="email" required>
            <p v-if="!validEmail"><span>*</span> Valid Email required</p>
            <label>Password</label>
            <input type="password" v-model="password">
            <p v-if="!validPassword"><span>*</span> Password required</p>
            <label>Role</label>
            <select v-model="role">
                <option value="" selected disabled hidden>Choose Role</option>
                <option value="admin">Admin</option>
                <option value="manager">Room manager</option>
                <option value="client">Client</option>
            </select>
            <p v-if="!validRole"><span>*</span> Role required</p>
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
            role: '',
            validName: true,
            validEmail: true,
            validPassword: true,
            validRole: true
        }
    },
    methods: {
        loginHandler(e) {
            e.preventDefault();
            if(!this.name) {
                this.validName = false;
            } else {
                this.validName = true;
            }
            if(!this.checkEmail(this.email)) {
                this.validEmail = false;
            } else {
                this.validEmail = true;
            }
            if(!this.password) {
                this.validPassword = false;
            } else {
                this.validPassword = true;
            }
            if(!this.role) {
                this.validRole = false;
            } else {
                this.validRole = true;
            }
            if(this.validName && this.validEmail && this.validPassword && this.validRole) {
                const user = {'name': this.name, 'email': this.email, 'password': this.password, 'role': this.role};
                this.$store.commit('addUser', user);
            }
        },
        checkEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>