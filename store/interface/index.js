export const state = () => ({
  loading: true,
  srcollProgress: 0,
  scrollPosition: 0,
  scrollPosition_lerp: 0,
  bodyScroll: 3000,
  scrollAcceleration: 1
})

export const getters = {
  loading: state => state.loading,
  srcollProgress: state => state.srcollProgress,
  scrollPosition: state => state.scrollPosition,
  scrollPosition_lerp: state => state.scrollPosition_lerp,
  bodyScroll: state => state.bodyScroll,
  scrollAcceleration: state => state.scrollAcceleration
}

export const mutations = {
  loading: (state, v) => state.loading = v,
  scrollPosition: (state, v) => state.scrollPosition = v,
  scrollPosition_lerp: (state, v) => state.scrollPosition_lerp = v
}

export const actions = {
  set_scrollPosition_lerp: ({ getters, commit }, v) => {
    const { scrollPosition, scrollPosition_lerp } = getters
    if (Math.abs(scrollPosition - scrollPosition_lerp) < 1) commit('scrollPosition_lerp', scrollPosition)
    else commit('scrollPosition_lerp', v)
  }
}
