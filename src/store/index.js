import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        loading: true,
        darkMode: localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') === 'true' : false,
        nightLight: false,
        startMenuOpen: false,
        calendarOpen: false,
        NotificationCenterOpen: false
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status
        },
        toggleStartMenu(state) {
            state.startMenuOpen = !state.startMenuOpen
        },
        toggleCalendar(state) {
            state.calendarOpen = !state.calendarOpen
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
        toggleCalendar(context) {
            context.commit('toggleCalendar')
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
