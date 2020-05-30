export const state = () => ({
  srcollProgress: 0,
  bodyScroll: 3000,
  scrollAcceleration: 1
})

export const getters = {
  srcollProgress: state => state.srcollProgress,
  bodyScroll: state => state.bodyScroll
}
