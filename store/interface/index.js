export const state = () => ({
  init: false,
  loading: true,
  scrollPosition: 0,
  scrollPosition_lerp: 0,
  bodyScroll: 0,
  windowHeight: 0,
  scrollAcceleration: 2
})

export const getters = {
  init: state => state.init,
  loading: state => state.loading,
  scrollProgress: state => ((state.scrollPosition / (state.bodyScroll - state.windowHeight)) * 100).toFixed(0),
  scrollPosition: state => state.scrollPosition,
  scrollPosition_lerp: state => state.scrollPosition_lerp,
  bodyScroll: state => state.bodyScroll,
  windowHeight: state => state.windowHeight,
  scrollAcceleration: state => state.scrollAcceleration
}

export const mutations = {
  init: (state, v) => state.init = v,
  loading: (state, v) => state.loading = v,
  bodyScroll: (state, v) => state.bodyScroll = v,
  windowHeight: (state, v) => state.windowHeight = v,
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
