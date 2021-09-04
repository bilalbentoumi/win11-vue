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
        notificationCenterOpen: false,

        apps: {
            vscode: { name: 'Visual Studio Code', isMaximized: false, isMinimized: false, isActive: false }
        }

    },
    getters: {
        loading: state => state.loading
    },
    mutations: {

        SET_LOADING(state, status) {
            state.loading = status
        },

        SET_START_MENU_OPEN(state, status) {
            state.startMenuOpen = status
        },
        SET_CALENDAR_OPEN(state, status) {
            state.calendarOpen = status
        },
        SET_NOTIFICATION_CENTER_OPEN(state, status) {
            state.notificationCenterOpen = status
        },

        SET_DARK_MODE_ENABLED(state, status) {
            state.darkMode = status
        },
        SET_NIGHT_LIGHT_ENABLED(state, status) {
            state.nightLight = status
        }

    },
    actions: {

        showBootScreen(context) {
            context.commit('SET_LOADING', true)
        },
        hideBootScreen(context) {
            context.commit('SET_LOADING', false)
        },

        toggleStartMenu(context) {
            context.commit('SET_NOTIFICATION_CENTER_OPEN', false)
            context.commit('SET_CALENDAR_OPEN', false)
            context.commit('SET_START_MENU_OPEN', !context.state.startMenuOpen)
        },
        toggleCalendar(context) {
            context.commit('SET_NOTIFICATION_CENTER_OPEN', false)
            context.commit('SET_START_MENU_OPEN', false)
            context.commit('SET_CALENDAR_OPEN', !context.state.calendarOpen)
        },
        toggleNotificationCenter(context) {
            context.commit('SET_CALENDAR_OPEN', false)
            context.commit('SET_START_MENU_OPEN', false)
            context.commit('SET_NOTIFICATION_CENTER_OPEN', !context.state.notificationCenterOpen)
        },

        toggleDarkMode(context) {
            context.commit('SET_DARK_MODE_ENABLED', !context.state.darkMode)
            localStorage.setItem('darkMode', context.state.darkMode)
        },
        toggleNightLight(context) {
            context.commit('SET_NIGHT_LIGHT_ENABLED', !context.state.nightLight)
        }

    },
    modules: {}
})
