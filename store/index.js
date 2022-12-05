// export const state = () => ({
//     users: []
// })

// export const mutations = {
//     ADD_USER(state, user) {
//         state.users = [{...user}, ...state.users];
//     }
// }


export const state = () => ({
    token: localStorage.getItem("token"),
    rooms: localStorage.getItem("rooms") ? JSON.parse(localStorage.getItem("rooms")) : [
        {
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
        state.rooms[roomId].desks[index].user = JSON.parse(state.token).name;
        localStorage.setItem("rooms", JSON.stringify(state.rooms));
    }
}