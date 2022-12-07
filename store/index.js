// export const state = () => ({
//     users: []
// })

// export const mutations = {
//     ADD_USER(state, user) {
//         state.users = [{...user}, ...state.users];
//     }
// }


export const state = () => ({
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "",
    rooms: localStorage.getItem("rooms") ? JSON.parse(localStorage.getItem("rooms")) : [
        {
            manager: "manager@gmail.com",
            size: "small",
            full: false,
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
            full: false,
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
                    position: "Center"
                }
            ]
        }
    ]
})

export const mutations = {
    editToken(state, token) {
        state.token = token;
    },

    editDesk(state, {roomId, index}) {
        state.rooms[roomId].desks[index].user = state.token.email;
        localStorage.setItem("rooms", JSON.stringify(state.rooms));
    },

    removeManager(state, index) {
        state.rooms[index].manager = "";
        localStorage.setItem("rooms", JSON.stringify(state.rooms));
    }
}