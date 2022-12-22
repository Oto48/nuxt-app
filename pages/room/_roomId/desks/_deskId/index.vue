<template>
    <div class="container">
        <div class="room-card bg-dark-blue">
            <h2 v-if="$store.state.token.role == 'client' && $store.state.rooms[roomId].desks[deskId].user && $store.state.token.email !== $store.state.rooms[roomId].desks[deskId].user" class="danger auto">The room is already booked</h2>
            <h1>Desk {{ deskId }}</h1>
            <h3>Room User: {{ $store.state.rooms[roomId].desks[deskId].user }}</h3>
            <h3>Room Price:{{ $store.state.rooms[roomId].desks[deskId].price }} </h3>
            <h3>Room Size: {{ $store.state.rooms[roomId].desks[deskId].size }}</h3>
            <h3>Room Position: {{ $store.state.rooms[roomId].desks[deskId].position }}</h3>
            <Modal v-if="($store.state.token.role == 'client' && !$store.state.rooms[roomId].desks[deskId].user)" :roomId="roomId" :deskId="deskId" />
        </div>
    </div>
</template>
  
<script>
import Modal from '~/components/Modal.vue';
export default {
    name: 'Desk',
    components: {Modal},
    data() {
        return {
            deskId: this.$route.params.deskId,
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
    margin: auto;
    border-radius: 10px;
    padding: 10px 20px;
}
</style>