<template>
    <div>
        <h1>Room {{ $route.params }}</h1>
        <h1>{{$store.state.rooms[roomId].desks}}</h1>
        <ul v-for="(room, index) in $store.state.rooms[roomId].desks" :key="index">
            <li>
                <NuxtLink :to="`/rooms/${$route.params.roomId}/desks/${index}`">{{room}}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Room',
    data() {
        return {
            roomId: this.$route.params.roomId,
        }
    }
}
</script>