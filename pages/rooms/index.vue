<template>
    <div class="container">
        <h1>Rooms</h1>
        <div class="card">
            <div class="card-titles bg-dark-grey text-white">
                <h2>ID</h2>
                <h2>Size</h2>
                <h2>Free Desks</h2>
                <h2>Manager</h2>
                <h2></h2>
            </div>
            <div v-for="(room, index) in $store.state.rooms" :key="index">
                <div v-if="$store.state.token.role == 'manager'">
                    <div v-if="(room.manager == $store.state.token.email)" class="card-items text-black capitalize" :class="index == 1 ? 'bg-grey' : 'bg-white border'">
                        <h3>{{index}}</h3>
                        <h3>{{room.size}}</h3>
                        <h3>{{room.desks.length}}</h3>
                        <h3 v-if="room.full">Full</h3>
                        <h3>{{room.manager}}</h3>
                        <div class="btn-box">
                            <NuxtLink :to="`/rooms/${index}`"><button>Desks</button></NuxtLink>
                        </div>
                    </div>
                </div>
                <div v-else class="card-items text-black capitalize" :class="index == 1 ? 'bg-grey' : 'bg-white border'">
                    <h3>{{index}}</h3>
                    <h3>{{room.size}}</h3>
                    <h3>{{room.desks.length}}</h3>
                    <h3 v-if="room.full">Full</h3>
                    <h3 v-if="!$store.state.token.role == 'admin' || !room.manager">{{room.manager}}</h3>
                    <div v-else-if="room.manager && $store.state.token.role == 'admin'" class="btn-box">
                        <h3>{{room.manager}}</h3>
                        <button @click="remove(index)">Remove Manager</button>
                    </div>
                    <h3 v-else>{{room.manager}}</h3>
                    <Modal :index="index" />
                    <div class="btn-box">
                        <NuxtLink :to="`/rooms/${index}`"><button>Desks</button></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Modal from '~/components/Modal.vue';
export default {
    components: { Modal },
    name: 'Rooms',
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        remove(index) {
            this.$store.commit('removeManager', index);
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
    width: 20%;
    text-align: center;
}

.btn-box {
    width: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.btn-box h3{
    width: 100%;
    margin: 0;
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