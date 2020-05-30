export const state = () => ({
  bodyScroll: 3000,
  scrollAcceleration: 1
})

export const getters = {
  bodyScroll: state => state.bodyScroll
}
