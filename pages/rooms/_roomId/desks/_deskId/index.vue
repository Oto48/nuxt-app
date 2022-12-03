<template>
    <div>
        <h1>Desk {{ $route.params }}</h1>
        <h1>{{$store.state.rooms[roomId].desks[deskId]}}</h1>
    </div>
</template>
  
<script>
export default {
    name: 'Desk',
    data() {
        return {
            roomId: this.$route.params.roomId,
            deskId: this.$route.params.deskId,
        }
    }
}
</script>