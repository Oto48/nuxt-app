<template>
    <div class="container">
        <h1>Rooms</h1>
        <div class="card">
            <div class="card-titles bg-dark-grey text-white">
                <h2>ID</h2>
                <h2>Size</h2>
                <h2>Free Desks</h2>
            </div>
            <div v-for="(room, index) in $store.state.rooms" :key="index">
                <NuxtLink :to="`/rooms/${index}`">
                    <div class="card-items text-black capitalize" :class="index == 1 ? 'bg-grey' : 'bg-white border'">
                        <h3>{{index}}</h3>
                        <h3>{{room.size}}</h3>
                        <h3>{{room.desks.length}}</h3>
                        <h3 v-if="room.full">Full</h3>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Rooms',
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