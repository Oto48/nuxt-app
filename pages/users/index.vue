<template>
    <div class="container">
        <h1>Users</h1>
        <div class="card">
            <div class="card-titles bg-dark-grey text-white">
                <h2>ID</h2>
                <h2>Name</h2>
                <h2>Email</h2>
            </div>
            <div v-for="(user, index) in this.users" :key="index">
                <div class="card-items text-white capitalize" :class="index % 2 !== 0 ?  '' : 'bg-dark-blue'">
                    <h3>{{index}}</h3>
                    <h3>{{user.name}}</h3>
                    <h3>{{user.email}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Users',
    data() {
        return {
            users: this.$store.state.users,
        }
    },
    mounted() {
        if(this.$store.state.token.role !== "admin" || !this.$store.state.token.role) {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.card {
    max-width: 1000px;
    margin: auto;
}

.card-titles h2, .card-items h3{
    width: 25%;
    text-align: center;
}

.border{
    border-bottom: 1px solid;
}
.card-titles, .card-items{
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
}

a{
    text-decoration: none;
}

@media(max-width: 1024px) {
    .card-titles h2:nth-child(1), .card-titles h2:nth-child(2), .card-items h3:nth-child(1), .card-items h3:nth-child(2){
        width: 15%;
    }

    .card-titles h2:nth-child(3), .card-items h3:nth-child(3){
        width: 40%;
        word-wrap: break-word;
    }
}

@media(max-width: 768px) {
    .card-titles {
        display: none;
    }
    .card-items {
        flex-direction: column;
        height: auto;
        gap: 0;
        background-color: #37355e;
        max-width: 400px;
        margin: 20px auto;
        border: 1px solid #292845;
        border-radius: 10px;
        color: white;
    }

    .card-items h3 {
        margin: 5px;
    }

    .card-items h3:nth-child(1)::before {
        content: "ID: ";
    }

    .card-items h3:nth-child(2)::before {
        content: "Name: ";
    }

    .card-items h3:nth-child(3)::before {
        content: "Email: ";
    }

    .card-items h3:nth-child(1), .card-items h3:nth-child(2), .card-items h3:nth-child(3), .card-items h3:nth-child(4) {
        width: 100%;
    }
}
</style>