<template>
    <nav class="bg-black">
        <div class="hamburger"
            :class="{ active: showMobileMenu }"
            @click="showMobileMenu = !showMobileMenu"
        >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="nav-menu"
            :class="{ 'active bg-black': showMobileMenu }"
        >
            <li v-if="$store.state.token.role">
                <NuxtLink to="/home">Home</NuxtLink>
            </li>
            <li v-if="$store.state.token.role">
                <NuxtLink to="/rooms">Rooms</NuxtLink>
            </li>
            <li v-if="$store.state.token.role == 'admin'">
                <NuxtLink to="/users">Users</NuxtLink>
            </li>
        </ul>
        <ul>
            <li v-if="!$store.state.token.role">
                <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li v-if="$store.state.token.role" @click="logOut">
                <NuxtLink to="/">Logout</NuxtLink>
            </li>
            <li v-if="!$store.state.token.role">
                <NuxtLink to="/signup">Signup</NuxtLink>
            </li>
            <li style="color:white" v-if="$store.state.token.role">
                {{$store.state.token.role}}
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            user: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "",
            showMobileMenu: false,
        }
    },
    methods: {
        logOut() {
            localStorage.setItem("token", '');
            this.$store.commit('editToken', '');
        },
        myEventHandler(e) {
            if(e.currentTarget.innerWidth > 768){
                this.showMobileMenu = false;
            }
        }
    },
    created() {
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    }
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 25px;
    font-weight: bold;
    font-size: 20px;
    box-shadow: 3.5px 10px 10px rgb(0 0 0 / 35%);
}

.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3 ease-in-out;
    transition: all 0.3s ease-in-out;
    background: white;
}

@media(max-width: 768px) {
    .hamburger {
        display: block;
    }
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 53px;
        gap: 0;
        flex-direction: column;
        text-align: center;
        padding: 30px 0px;
        width: 100%;
        transition: 0.3s;
        gap: 15px;
        box-shadow: 3.5px 10px 10px rgb(0 0 0 / 35%);
    }
    .nav-item {
        margin: 16px 0;
    }
    .nav-menu.active {
        left: 0;
    }
}

ul {
    list-style-type: none;
    display: flex;
    gap: 15px;
    text-decoration: none;
    padding: 0;
}

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: #FFD700;
    text-shadow: 0 0 3px #ffef93;
    transition: 0.3s;
}

</style>