<template>
    <div class="container">
        <h1>Room {{ roomId }}</h1>
        <div class="card">
            <div v-for="(desk, index) in $store.state.rooms[roomId].desks" :key="index" class="capitalize bg-blue">
                <h3>User: {{desk.user}}</h3>
                <h3>Price: {{desk.price}}</h3>
                <h3>Size: {{desk.size}}</h3>
                <h3>Position: {{desk.position}}</h3>
                <NuxtLink :to="`desks/${index}`">
                    <button class="btn-secondary">Details</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Desks',
    data() {
        return {
            roomId: this.$route.params.roomId,
        }
    },
    mounted() {
        if(!this.$store.state.token.role) {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.card div {
    min-width: 300px;
    border-radius: 5px;
    padding: 10px 20px;
    min-height: 220px;
}
</style>