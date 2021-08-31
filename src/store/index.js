import {createStore} from 'vuex'

export default createStore({
    state: {
        darkMode: localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') === 'true' : false,
        nightLight: false,
        startMenuOpen: false,
        NotificationCenterOpen: false
    },
    mutations: {
        toggleStartMenu(state) {
            state.startMenuOpen = !state.startMenuOpen
        },
        toggleNotificationCenter(state) {
            state.NotificationCenterOpen = !state.NotificationCenterOpen
        },
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode
            localStorage.setItem('darkMode', state.darkMode)
        },
        toggleNightLight(state) {
            state.nightLight = !state.nightLight
        }
    },
    actions: {
        toggleStartMenu(context) {
            context.commit('toggleStartMenu')
        },
        toggleNotificationCenter(context) {
            context.commit('toggleNotificationCenter')
        },
        toggleDarkMode(context) {
            context.commit('toggleDarkMode')
        },
        toggleNightLight(context) {
            context.commit('toggleNightLight')
        }
    },
    modules: {}
})
