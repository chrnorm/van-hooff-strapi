export const state = () => ({
  list: []
})

export const mutations = {
  add(state, project) {
    state.list.push(project)
  },
  emptyList(state) {
    state.list = []
  }
}

export const getters = {
  list: state => {
    return state.list
  }
}
