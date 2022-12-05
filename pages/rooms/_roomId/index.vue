<template>
    <div class="container">
        <h1>Room {{ roomId }}</h1>
        <!-- <h1>{{$store.state.rooms[roomId].desks}}</h1> -->
        <div class="card">
            <div v-for="(desk, index) in $store.state.rooms[roomId].desks" :key="index" class="capitalize bg-blue">
                <h3>User: {{desk.user}}</h3>
                <h3>Price: {{desk.price}}</h3>
                <h3>Size: {{desk.size}}</h3>
                <h3>Position: {{desk.position}}</h3>
                <button @click="editDesk(roomId,index)">Book a Desk</button>
            </div>
            <!-- <li>
                <NuxtLink :to="`/rooms/${$route.params.roomId}/desks/${index}`">{{room}}</NuxtLink>
            </li> -->
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
    methods: {
        editDesk(roomId, index) {
            this.$store.commit('editDesk', {roomId, index});
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
}

</style>