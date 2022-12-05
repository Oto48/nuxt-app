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
                <div class="card-items text-black capitalize" :class="index == 1 ? 'bg-grey' : 'bg-white border'">
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
            users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : "",
        }
    },
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
</style>