<template>
    <div>
        <button v-if="$store.state.token.role == 'admin'" @click="box = 'active'" class="btn-secondary">Add</button>
        <button v-if="$store.state.token.role == 'client'" @click="box = 'active'" class="btn-secondary">Book the Desk</button>
        <div v-if="box === 'active'" class="modal-overlay">
            <div class="modal">
                <select v-model="email" v-if="$store.state.token.role == 'admin'">
                    <option value="" selected disabled hidden>Choose Role</option>
                    <template v-for="(user, index) in $store.state.users" :value="index">
                        <option v-if="(user.role == 'manager' && user.free)" :value="user.email">{{user.email}}</option>
                    </template>
                </select>
                <input v-if="$store.state.token.role == 'client'" type="datetime-local"
                    v-model="date" value="2018-06-12T19:30" />
                <div class="btn">
                    <button @click="remove" class="btn-danger">Go Back</button>
                    <button @click="add" class="btn-secondary" v-if="$store.state.token.role == 'admin'">Add</button>
                    <button @click="editDesk" class="btn-secondary" v-if="$store.state.token.role == 'client'">Book the Desk</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['index', 'roomId', 'deskId'],
    data() {
        return {
            email: '',
            date: '',
            box: ''
        }
    },
    methods: {
        remove() {
            this.box = '';
        },
        add() {
            const index = this.index;
            const manager = this.email;
            this.$store.commit('addManager', {index, manager});
            this.box = '';
        },
        editDesk(roomId, deskId, date) {
            roomId = this.roomId;
            deskId = this.deskId;
            date = this.date;
            this.$store.commit('editDesk', {roomId, deskId, date});
            this.box = '';
        }
    }
}
</script>

<style scoped>

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #0303037c;
}

.modal {
    text-align: center;
    background-color: white;
    height: 200px;
    width: 400px;
    margin-top: 10%;
    padding: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.btn {
    display: flex;
    justify-content: space-between;
}
</style>