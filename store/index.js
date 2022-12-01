export const state = () => ({
    users: []
})

export const mutations = {
    ADD_USER(state, user) {
        state.users = [{...user}, ...state.users];
    }
}