// export const state = () => ({
//     users: []
// })

// export const mutations = {
//     ADD_USER(state, user) {
//         state.users = [{...user}, ...state.users];
//     }
// }


export const state = () => ({
    // token: localStorage.getItem("token")
    token: localStorage.getItem("token")
})

export const mutations = {
    editToken(state, token) {
        state.token =  token;
    }
}