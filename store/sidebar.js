export const state = () => ({
        toggleSideBar: false,
        screens : [],
    })

export const mutations = {
    toggleSideBar(state) {
        state.toggleSideBar = !state.toggleSideBar
    },
    closeSideBar(state) {
        state.toggleSideBar = false
    },
    setScreens(state, _screens) {
        state.screens = _screens
    },
}
      