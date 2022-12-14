export const state = () => ({
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "",
    rooms: localStorage.getItem("rooms") ? JSON.parse(localStorage.getItem("rooms")) : [
        {
            manager: "manager@gmail.com",
            size: "small",
            desks: [
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Next to Window"
                },
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Next to Door"
                },
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Center"
                }
            ]
        },
        {
            manager: "",
            size: "big",
            desks: [
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Next to Window"
                },
                {
                    user: "",
                    price: 50,
                    size: "big",
                    position: "Center"
                },
                {
                    user: "",
                    price: 50,
                    size: "big",
                    position: "Center"
                },
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Next to Desk"
                }
                ,                {
                    user: "",
                    price: 50,
                    size: "big",
                    position: "Next to Desk"
                },
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Next to Window"
                }
            ]
        },
        {
            manager: "",
            size: "small",
            desks: [
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Next to Window"
                },
                {
                    user: "",
                    price: 50,
                    size: "big",
                    position: "Next to Door"
                },
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Center"
                }
            ]
        },
        {
            manager: "",
            size: "small",
            desks: [
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Next to Window"
                },
                {
                    user: "",
                    price: 50,
                    size: "big",
                    position: "Next to Door"
                },
                {
                    user: "",
                    price: 20,
                    size: "small",
                    position: "Center"
                }
            ]
        },
    ],
    users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [
        {name: "client", email: "client@gmail.com", password: "client", role: "client"},
        {name: "client2", email: "client2@gmail.com", password: "client", role: "client"},
        {name: "client3", email: "client3@gmail.com", password: "client", role: "client"},
        {name: "manager", email: "manager@gmail.com", password: "manager", role: "manager", free: false},
        {name: "manager2", email: "manager2@gmail.com", password: "manager", role: "manager", free: true},
        {name: "manager3", email: "manager3@gmail.com", password: "manager", role: "manager", free: true},
        {name: "admin", email: "admin@example.com", password: "admin", role: "admin"},
    ]
})

export const mutations = {
    addUser(state, user){
        let used = false;
        for(const index in state.users) {
            if(state.users[index].email == user.email){
                used = true;
            }
        }
        if(used){
            alert("Email already used !");
        } else {
            state.users.push(user);
            localStorage.setItem("users", JSON.stringify(state.users));
            this.$router.push('/');
        }
    },

    editToken(state, token) {
        state.token = token;
    },

    editDesk(state, {roomId, deskId, date}) {
        const user = JSON.parse(localStorage.getItem("token"));
        state.rooms[roomId].desks[deskId].user = user.email;
        state.rooms[roomId].desks[deskId].is_taken = date;
        localStorage.setItem("rooms", JSON.stringify(state.rooms));
    },

    addManager(state, {index, manager}) {
        state.rooms[index].manager = manager;
        localStorage.setItem("rooms", JSON.stringify(state.rooms));
        for(const index in state.users) {
            if(state.users[index].email == manager){
                state.users[index].free = false; 
            }
        };
        localStorage.setItem("users", JSON.stringify(state.users));
    },

    removeManager(state, index) {
        const manager = state.rooms[index].manager;
        state.rooms[index].manager = "";
        localStorage.setItem("rooms", JSON.stringify(state.rooms));
        for(const index in state.users) {
            if(state.users[index].email == manager){
                state.users[index].free = true; 
            }
        };
        localStorage.setItem("users", JSON.stringify(state.users));
    }
}