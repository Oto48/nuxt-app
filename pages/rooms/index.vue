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
                    <div v-if="(room.manager == $store.state.token.email)" class="card-items text-black capitalize" :class="index == 1 ? '' : 'bg-dark-blue'">
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
                <div v-else class="card-items text-white capitalize" :class="index % 2 !== 0 ? '' : 'bg-dark-blue'">
                    <h3>{{index}}</h3>
                    <h3>{{room.size}}</h3>
                    <h3>{{room.desks.length}}</h3>
                    <h3 v-if="room.full">Full</h3>
                    <div v-if="room.manager && $store.state.token.role == 'admin'" class="btn-box">
                        <h3>{{room.manager}}</h3>
                        <button @click="remove(index)" class="btn-danger">Remove Manager</button>
                    </div>
                    <div v-else-if="($store.state.token.role == 'admin' && !room.manager)" class="btn-box">
                        <Modal :index="index" />
                    </div>
                    <h3 v-else>{{room.manager}}</h3>
                    <div class="btn-box">
                        <NuxtLink :to="`/room/${index}`"><button class="btn-primary">Desks</button></NuxtLink>
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
    mounted() {
        if(!this.$store.state.token.role) {
            this.$router.push('/');
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

@media(max-width: 1024px) {
    .card-titles h2:nth-child(1), .card-titles h2:nth-child(2), .card-items h3:nth-child(1), .card-items h3:nth-child(2){
        width: 15%;
    }

    .card-titles h2:nth-child(4), .card-items h3:nth-child(4){
        width: 30%;
        word-wrap: break-word;
    }

    .card-titles, .card-items{
        padding: 5px 5px;
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

    .card-items h3:nth-child(3)::before {
        content: "Free Disks: ";
    }

    .card-items h3:nth-child(1), .card-items h3:nth-child(2), .card-items h3:nth-child(3), .card-items h3:nth-child(4) {
        width: 100%;
    }

    button {
        margin: 5px;
    }
}

</style>