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
    rooms: [
        {
            size: "small",
            full: false,
            desks: [
                {
                    user: "user 1",
                    price: 20,
                    size: "small",
                    position: "window"
                },
                {
                    user: "user 2",
                    price: 20,
                    size: "small",
                    position: "window"
                }
            ]
        },
        {
            size: "big",
            full: false,
            desks: [
                {
                    user: "user 2",
                    price: 20,
                    size: "small",
                    position: "window"
                }
            ]
        }
    ]
})

export const mutations = {
    editToken(state, token) {
        state.token = token;
    }
}