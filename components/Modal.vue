<template>
    <div>
        <button @click="box = 'active'" class="btn-secondary">Add</button>
        <div v-if="box === 'active'" class="modal-overlay">
            <div class="modal">
                <select v-model="email">
                    <option value="" selected disabled hidden>Choose Role</option>
                    <template v-for="(user, index) in $store.state.users" :value="index">
                        <option v-if="(user.role == 'manager' && user.free)" :value="user.email">{{user.email}}</option>
                    </template>
                </select>
                <div class="btn">
                    <button @click="remove" class="btn-danger">Go Back</button>
                    <button @click="add" class="btn-secondary">Add</button>
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