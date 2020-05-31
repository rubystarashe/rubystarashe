export const state = () => ({
  menu: [
    {
      title: 'abc'
    },
    {
      title: 'abc'
    },
    {
      title: 'abc'
    },
    {
      title: 'abc'
    }
  ]
})

export const getters = {
  menu: state => state.menu
}
