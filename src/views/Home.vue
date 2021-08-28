<template>
    <div class="desktop flex flex-col w-full h-full overflow-hidden">

        <div class="desktop-icons flex-1 p-1">
            <button class="flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-30 rounded-sm duration-200 cursor-auto">
                <img src="@/assets/icons/computer.png" width="43" height="43">
                <span class="text-white text-xs app-name">This PC</span>
            </button>
            <button class="flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-30 rounded-sm duration-200 cursor-auto">
                <img src="@/assets/icons/trash-empty.png" width="43" height="43">
                <span class="text-white text-xs app-name">Recycle Bin</span>
            </button>
            <button class="flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-30 rounded-sm duration-200 cursor-auto">
                <img src="@/assets/icons/explorer.png" width="43" height="43">
                <span class="text-white text-xs app-name">File Explorer</span>
            </button>
            <button class="flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-30 rounded-sm duration-200 cursor-auto">
                <img src="@/assets/icons/store-dark.png" width="43" height="43">
                <span class="text-white text-xs app-name">Microsoft Store</span>
            </button>
            <button class="flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-30 rounded-sm duration-200 cursor-auto">
                <img src="@/assets/icons/edge.png" width="43" height="43">
                <span class="text-white text-xs app-name">Microsoft Edge</span>
            </button>
        </div>

        <div class="task-bar w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg flex justify-center">

            <div class="flex gap-2 p-1">
                <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/start.png" width="22" height="22">
                </button>
                <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/search.png" width="22" height="22">
                </button>
                <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/widget.png" width="22" height="22">
                </button>
                <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/settings.png" width="22" height="22">
                </button>
                <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/explorer.png" width="22" height="22">
                </button>
                <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/edge.png" width="22" height="22">
                </button>
                <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/store-dark.png" width="25" height="25">
                </button>
            </div>

            <div class="flex absolute right-0 bottom-0 h-full hidden md:flex">
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 10px; height: 10px;">
                        <path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                    </svg>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <img width="16" src="@/assets/ui/battery.png"/>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <img width="22" src="@/assets/ui/audio.png"/>
                </div>
                <div class="flex flex-col text-xs justify-center items-center px-2">
                    <span>{{ today.date }}</span>
                    <span>{{ today.time }}</span>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full hover:bg-gray-300 duration-100" @click="toggleNotificationCenter()">
                    <img width="16" src="@/assets/ui/notification-center.png" class="filter invert"/>
                </div>
                <div class="h-full w-2 border-l border-gray-300 ml-2"></div>
            </div>

        </div>

        <div class="notification-center bg-white absolute bg-opacity-80 backdrop-filter backdrop-blur-lg duration-150 flex flex-col" :class="{ 'show': isNotificationCenterShown }">
            <div class="text-right text-xs p-3">Manage notifications</div>
            <div class="flex justify-center items-center flex-1">
                <span class="text-xs">No new notifications</span>
            </div>
            <div class="control-center grid grid-cols-4 gap-1 p-4">
                <button class="flex flex-col gap-3 bg-white px-1 pt-2 pb-1 duration-150" v-for="(item, index) in controlCenterItems" :key="index" @click="item.active = !item.active; item.click" :class="{ 'bg-blue-600 text-white': item.active }">
                    <img :src="item.icon" width="14" class="duration-150" :class="{ 'filter invert': item.active }"/>
                    <span>{{ item.label }}</span>
                </button>
            </div>
        </div>

    </div>
</template>

<script>
const moment = require('moment')

export default {
    name: 'Home',
    data() {
        return {
            today: {},
            isNotificationCenterShown: false,

            controlCenterItems: [
                { label: 'Location', icon: require('@/assets/ui/location.png'), active: false, click: null },
                { label: 'Battery saver', icon: require('@/assets/ui/battery-saver.png'), active: false, click: null },
                { label: 'Night light', icon: require('@/assets/ui/night-light.png'), active: false, click: null },
                { label: 'Bluetooth', icon: require('@/assets/ui/bluetooth.png'), active: false, click: null },
                { label: 'Offline mode', icon: require('@/assets/ui/offline-mode.png'), active: false, click: null },
                { label: 'Connect', icon: require('@/assets/ui/connect.png'), active: false, click: null },
                { label: 'Project', icon: require('@/assets/ui/project.png'), active: false, click: null },
                { label: 'Network', icon: require('@/assets/ui/network.png'), active: false, click: null },
                { label: 'Sharing', icon: require('@/assets/ui/sharing.png'), active: false, click: null },
                { label: 'Tablet mode', icon: require('@/assets/ui/tablet-mode.png'), active: false, click: null },
                { label: 'Security', icon: require('@/assets/ui/security.png'), active: false, click: null },
                { label: 'Dark mode', icon: require('@/assets/ui/focus-assist.png'), active: false, click: this.toggleDarkMode }
            ]
        }
    },
    methods: {
        updateTime() {
            this.today = {
                date: moment().format('MM/D/YYYY'),
                time: moment().format('hh:mm A')
            }
        },
        toggleNotificationCenter() {
            this.isNotificationCenterShown = !this.isNotificationCenterShown
        },

        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode
            document.documentElement.classList.remove('dark')
            if (this.isDarkMode) {
                document.documentElement.classList.add('dark')
            }
        }
    },
    mounted() {
        this.updateTime()
        setInterval(this.updateTime, 1000)
    }
}
</script>

<style lang="scss" scoped>

.desktop {
    background-image: url('../assets/wallpapers/light.jpg');
    background-position: center;
    background-size: cover;
}

.task-bar {
    height: 40px;
}

.app-name {
    color: #fafafa;
    margin: 4px 0;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
}

.notification-center {
    width: 320px;
    top: 0;
    right: -320px;
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