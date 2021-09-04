<template>
    <div class="notification-center absolute bg-white bg-opacity-80 dark:bg-gray-600 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg duration-150 flex flex-col" :class="{ 'show': isOpen }">
        <div class="text-right text-2xs p-3 text-gray-600 dark:text-gray-200">Manage notifications</div>
        <div class="flex justify-center items-center flex-grow">
            <span class="text-xs text-gray-600 dark:text-gray-200">No new notifications</span>
        </div>
        <div class="control-center grid grid-cols-4 gap-1 p-4">
            <button class="flex flex-col items-start gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150" v-for="(item, index) in controls" :key="index" @click="item.active = !item.active; item.click()" :class="{ 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500': item.active }">
                <img :src="item.icon" width="14" class="duration-150" :class="{ 'filter invert': item.active || darkMode }"/>
                <span>{{ item.label }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'NotificationCenter',
    computed: {
        ...mapState({
            isOpen: state => state.notificationCenterOpen,
            darkMode: state => state.darkMode,
            nightLight: state => state.nightLight,
        })
    },
    data() {
        return {
            controls: [],
        }
    },
    methods: {
        initItems() {
            this.controls = [
                { label: 'Location', icon: require('@/assets/ui/location.png'), active: false, click: this.none },
                { label: 'Battery saver', icon: require('@/assets/ui/battery-saver.png'), active: true, click: this.none },
                { label: 'Night light', icon: require('@/assets/ui/night-light.png'), active: this.nightLight, click: this.toggleNightLight },
                { label: 'Bluetooth', icon: require('@/assets/ui/bluetooth.png'), active: true, click: this.none },
                { label: 'Offline mode', icon: require('@/assets/ui/offline-mode.png'), active: false, click: this.none },
                { label: 'Connect', icon: require('@/assets/ui/connect.png'), active: false, click: this.none },
                { label: 'Project', icon: require('@/assets/ui/project.png'), active: false, click: this.none },
                { label: 'Network', icon: require('@/assets/ui/network.png'), active: false, click: this.none },
                { label: 'Sharing', icon: require('@/assets/ui/sharing.png'), active: false, click: this.none },
                { label: 'Tablet mode', icon: require('@/assets/ui/tablet-mode.png'), active: false, click: this.none },
                { label: 'Security', icon: require('@/assets/ui/security.png'), active: false, click: this.none },
                { label: 'Dark mode', icon: require('@/assets/ui/focus-assist.png'), active: this.darkMode, click: this.toggleDarkMode }
            ]
        },
        toggleDarkMode() {
            this.$store.dispatch('toggleDarkMode')
        },
        toggleNightLight() {
            this.$store.dispatch('toggleNightLight')
        },
        none() {}
    },
    mounted() {
        this.initItems()
    }
}
</script>

<style lang="scss">

.notification-center {
    width: 320px;
    top: 0;
    right: -340px;
    bottom: 40px;
    box-shadow: -6px 0 6px #0001;
}

.notification-center.show {
    right: 0;
}

.control-center {
    button {
        font-size: 9px;
        border-radius: 4px;
    }
}

</style>