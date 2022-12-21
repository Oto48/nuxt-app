<template>
    <div class="container">
        <h1>Desk List</h1>
        <div class="card">
            <div v-for="(room, index) in $store.state.rooms" :key="index">
                <h2 class="room-name">Room: {{ index }}</h2>
                <div class="card-titles bg-dark-grey text-white">
                    <h2>Desk ID</h2>
                    <h2>User</h2>
                    <h2>Price</h2>
                    <h2>Size</h2>
                    <h2>Position</h2>
                </div>
                <div v-for="(desk, index) in room.desks" :key="index">
                    <div class="card-items text-white capitalize" :class="index % 2 !== 0 ? '' : 'bg-dark-blue'">
                        <h3>{{index}}</h3>
                        <h3>{{desk.user}}</h3>
                        <h3>{{desk.price}}</h3>
                        <h3>{{desk.size}}</h3>
                        <h3>{{desk.position}}</h3>
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
    name: 'Desks',
    data() {
        return {
            showModal: false,
        }
    },
    mounted() {
        if(this.$store.state.token.role !== "admin" || !this.$store.state.token.role) {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

.card {
    max-width: 1000px;
    margin: auto;
}

.card > div {
    margin-bottom: 100px;
}

.room-name {
    text-align: center;
}

.card-titles h2, .card-items h3{
    width: 20%;
    text-align: center;
}

.card-titles, .card-items{
    display: flex;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
}

@media(max-width: 1024px) {
    .card-titles > h2:nth-child(1), .card-titles > h2:nth-child(3), .card-items > h3:nth-child(1), .card-items > h3:nth-child(3){
        width: 15%;
    }

    .card-titles h2:nth-child(2), .card-items h3:nth-child(2), .card-titles h2:nth-child(5), .card-items h3:nth-child(5) {
        width: 25%;
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

    .card-items > h3:nth-child(1)::before {
        content: "ID: ";
    }

    .card-items > h3:nth-child(3)::before {
        content: "Price: ";
    }

    .card-items > h3:nth-child(1), .card-items > h3:nth-child(2), .card-items > h3:nth-child(3), .card-items > h3:nth-child(4), .card-items > h3:nth-child(5) {
        width: 100%;
    }
}

</style>