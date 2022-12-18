<template>
    <div class="container">
        <div class="room-card">
            <h1>Room {{ roomId }}</h1>
            <div>
                <h3>Room Manager: {{ $store.state.rooms[roomId].manager }}</h3>
                <h3>Room Size: {{ $store.state.rooms[roomId].size }}</h3>
                <div class="btn-box">
                    <NuxtLink :to="`${roomId}/desks`">
                        <button class="btn-primary">Checkout Desks</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Room',
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
.room-card {
    display: flex;
    max-width: 500px;
    flex-direction: column;
    background-color: rgb(67, 71, 125);
    margin: auto;
    border-radius: 10px;
    padding: 10px 20px;
}
</style>