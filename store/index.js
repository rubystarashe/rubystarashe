export const state = () => ({
  menu: [
    {
      title: 'SPINEL',
      description: 'Webview Desktop App',
      path: '/spinel'
    },
    {
      title: 'Path of Rubystar',
      description: 'Webview Desktop App',
      path: '/poe'
    },
    {
      title: 'Gersang Launcher',
      description: 'Webview Desktop & Mobile App',
      path: '/gersang'
    },
    {
      title: 'Web Camp',
      description: '강의',
      path: '/camp'
    }
  ]
})

export const getters = {
  menu: state => state.menu
}
