export const state = () =>
    /**
     * @type { string[] }
     */
    []


export const mutations = {
    
    add(state, favoriteId) {
        state.push(favoriteId)
    },
    remove(state, idToRemove) {
        state.splice(state.indexOf(idToRemove), 1)
    },

    toggle(state, favoriteId) {
        if (state.includes(favoriteId))
            state.splice(state.indexOf(favoriteId), 1)
        else
            state.push(favoriteId)
    }
}