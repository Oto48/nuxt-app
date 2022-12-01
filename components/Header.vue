<template>
    <nav>
        <NuxtLink to="/login">Login</NuxtLink>
        <h1 v-if="true">{{$store.state.token}}</h1>
        <!-- <NuxtLink v-if="$store.state.users.length" to="/login">Login</NuxtLink> -->
        <!-- <NuxtLink v-else to="/">Login</NuxtLink> -->
        <NuxtLink to="/signup">Signup</NuxtLink>
        <li @click="logOut">
            <NuxtLink to="/">Logout</NuxtLink>
        </li>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logOut() {
            // this.token = false;
            // localStorage.setItem("token", this.token);
            // this.$store.commit('ADD_USER', localStorage.getItem("token"));
            // console.log(this.token);


            localStorage.setItem("token", false);
            this.$store.commit('editToken', false);
            console.log(this.token);


            // const user = {'name': this.name, 'password': this.password};
            // let localItems = JSON.parse(localStorage.getItem("users"));
            // localItems === null ? 'undefined':
            // localItems.forEach((x) => {
            //     if(JSON.stringify(x) == JSON.stringify(user)) {
            //         localStorage.setItem("token", true);
            //         this.$router.push('/home');
            //     }
            // }); 
        }
    }
}
</script>