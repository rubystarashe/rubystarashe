export const state = () => ({
  preloadList: [],
  loadedList: []
})

export const getters = {
  preloadList: state => state.preloadList,
  loadedList: state => state.loadedList
}

export const mutations = {
  preloadList: (state, item) => {
    if (state.preloadList.indexOf(item) < 0) return state.preloadList.push(item)
  },
  reset_preloadList: (state, item) => state.preloadList = [],
  loadedList: (state, item) => state.loadedList.push(item),
  reset_loadedList: (state, item) => state.loadedList = []
}
