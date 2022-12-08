<template>
    <div>
        <button @click="box = 'active'">Add</button>
        <div v-if="box === 'active'" class="modal-overlay">
            <div class="modal">
                <select v-model="email">
                    <option value="" selected disabled hidden>Choose Role</option>
                    <template v-for="(user, index) in $store.state.users" :value="index">
                        <option v-if="(user.role == 'manager' && user.free)" :value="user.email">{{user.email}}</option>
                    </template>
                </select>
                <div class="close">
                    <button @click="remove">Go Home</button>
                    <button @click="add">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['index'],
    data() {
        return {
            email: '',
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
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}
.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}

.close-img {
    width: 25px;
}

.check {
    width: 150px;
}

h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
}

p {
    font-size: 16px;
    margin: 20px 0;
}
</style>