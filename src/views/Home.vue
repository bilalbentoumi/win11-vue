<template>
    <div class="desktop flex flex-col w-full h-full overflow-hidden">

        <div class="desktop-icons flex-grow p-1">
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
                <img src="@/assets/icons/store-dark.png" width="43" height="43" v-if="!isDarkMode">
                <img src="@/assets/icons/store-light.png" width="43" height="43" v-else>
                <span class="text-white text-xs app-name">Microsoft Store</span>
            </button>
            <button class="flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-30 rounded-sm duration-200 cursor-auto">
                <img src="@/assets/icons/edge.png" width="43" height="43">
                <span class="text-white text-xs app-name">Microsoft Edge</span>
            </button>
        </div>

        <div class="task-bar w-full bg-white bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center z-50">

            <div class="flex gap-2 p-1">
                <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto" @click="toggleStartMenu()">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/start.png" width="34">
                </button>
                <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/search-light.png" width="34" v-if="isDarkMode">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/search-dark.png" width="34" v-else>
                </button>
                <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/widget.png" width="34">
                </button>
                <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/settings.png" width="34">
                </button>
                <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/explorer.png" width="34">
                </button>
                <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/edge.png" width="34">
                </button>
                <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/store-dark.png" width="34" v-if="!isDarkMode">
                    <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/store-light.png" width="34" v-else>
                </button>
            </div>

            <div class="flex absolute right-0 bottom-0 h-full hidden md:flex">
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 10px; height: 10px;">
                        <path fill="currentColor" :class="{ 'text-white': isDarkMode }" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                    </svg>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <img width="16" src="@/assets/ui/battery.png" :class="{ 'filter invert': isDarkMode }"/>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <img width="22" src="@/assets/ui/audio.png" :class="{ 'filter invert': isDarkMode }"/>
                </div>
                <div class="flex flex-col text-xs justify-center items-center px-2" :class="{ 'text-white': isDarkMode}">
                    <span>{{ today.time }}</span>
                    <span>{{ today.date }}</span>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full hover:bg-gray-300 dark:hover:bg-gray-600 duration-100" @click="toggleNotificationCenter()">
                    <img width="16" src="@/assets/ui/notification-center.png" :class="{ 'filter invert': !isDarkMode }"/>
                </div>
                <div class="h-full w-2 border-l border-gray-300 dark:border-gray-600 ml-2"></div>
            </div>

        </div>

        <div class="notification-center absolute bg-white bg-opacity-80 dark:bg-gray-600 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg duration-150 flex flex-col" :class="{ 'show': isNotificationCenterVisible }">
            <div class="text-right text-2xs p-3 text-gray-600 dark:text-gray-200">Manage notifications</div>
            <div class="flex justify-center items-center flex-grow">
                <span class="text-xs text-gray-600 dark:text-gray-200">No new notifications</span>
            </div>
            <div class="control-center grid grid-cols-4 gap-1 p-4">
                <button class="flex flex-col gap-3 bg-white dark:bg-gray-700 dark:text-white px-1 pt-2 pb-1 border border-gray-200 dark:border-gray-600 duration-150" v-for="(item, index) in controlCenterItems" :key="index" @click="item.active = !item.active; item.click()" :class="{ 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500': item.active }">
                    <img :src="item.icon" width="14" class="duration-150" :class="{ 'filter invert': item.active || isDarkMode }"/>
                    <span>{{ item.label }}</span>
                </button>
            </div>
        </div>

        <div class="start-menu absolute flex flex-col bg-white bg-opacity-90 dark:bg-gray-600 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-md overflow-hidden duration-200" :class="{ 'show': isStartMenuVisible }">

            <div class="flex flex-col p-6 flex-grow">

                <div class="flex-grow">
                    <div class="flex items-center px-6 py-4">
                        <span class="text-xs font-semibold dark:text-white">Pinned</span>
                        <div class="flex-grow"></div>
                        <button class="flex items-center gap-2 text-2xs bg-white hover:bg-gray-50 dark:hover:bg-opacity-20 dark:bg-opacity-10 dark:text-white duration-100 px-3 py-1 rounded-sm shadow-sm">
                            <span>All apps</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 8px; height: 8px;">
                                <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="grid grid-cols-6">
                        <div v-for="(item, index) in startMenuApps" :key="index" class="flex flex-col justify-center items-center gap-1 py-2 hover:bg-white hover:bg-opacity-50 dark:hover:bg-opacity-10 rounded-sm duration-150">
                            <img :src="item.icon" width="24"/>
                            <span class="text-2xs font-medium text-gray-800 dark:text-gray-300 text-center">{{ item.label }}</span>
                        </div>
                    </div>
                </div>

                <div class="flex-grow">
                    <div class="flex items-center px-6 py-4">
                        <span class="text-xs font-semibold dark:text-white">Recommended</span>
                        <div class="flex-grow"></div>
                        <button class="flex items-center gap-2 text-2xs bg-white hover:bg-gray-50 dark:hover:bg-opacity-20 dark:bg-opacity-10 dark:text-white duration-100 px-3 py-1 rounded-sm shadow-sm">
                            <span>More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width: 8px; height: 8px;">
                                <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="grid grid-cols-2">
                        <div v-for="(item, index) in recommendedApps" :key="index" class="flex gap-3 py-3 px-6">
                            <img :src="item.icon" width="24"/>
                            <div class="flex flex-col">
                                <span class="text-2xs font-medium text-gray-800 dark:text-gray-300">{{ item.label }}</span>
                                <span class="text-2xs font-medium text-gray-500 dark:text-white dark:text-opacity-30">1h ago</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="bg-black bg-opacity-5 dark:bg-opacity-10 px-12 py-4">
                <div class="user flex items-center gap-2">
                    <img src="@/assets/bilal-bentoumi.jpg" class="rounded-full" width="26"/>
                    <span class="text-2xs text-gray-800 dark:text-gray-300">Bilal Bentoumi</span>
                    <div class="flex-grow"></div>
                    <img src="@/assets/ui/power.png" class="rounded-full" :class="{ 'filter invert': !isDarkMode }" width="14"/>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Home',
    data() {
        return {
            isDarkMode: false,
            today: {},
            isStartMenuVisible: false,
            isNotificationCenterVisible: false,

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
            ],

            startMenuApps: [
                { label: 'Edge', icon: require('@/assets/icons/edge.png'), active: false, click: null },
                { label: 'Word', icon: require('@/assets/icons/word.png'), active: false, click: null },
                { label: 'PowerPoint', icon: require('@/assets/icons/powerpoint.png'), active: false, click: null },
                { label: 'OneNote', icon: require('@/assets/icons/onenote.png'), active: false, click: null },
                { label: 'Mail', icon: require('@/assets/icons/mail.png'), active: false, click: null },
                { label: 'To Do', icon: require('@/assets/icons/todo.png'), active: false, click: null },
                { label: 'Store', icon: require('@/assets/icons/store-dark.png'), active: false, click: null },
                { label: 'Photos', icon: require('@/assets/icons/photos.png'), active: false, click: null },
                { label: 'Your Phone', icon: require('@/assets/icons/your-phone.png'), active: false, click: null },
                { label: 'Notepad', icon: require('@/assets/icons/notepad.png'), active: false, click: null },
                { label: 'Calculator', icon: require('@/assets/icons/calculator.png'), active: false, click: null },
                { label: 'Spotify', icon: require('@/assets/icons/spotify.png'), active: false, click: null },
                { label: 'VS Code', icon: require('@/assets/icons/vscode.png'), active: false, click: null },
                { label: 'Terminal', icon: require('@/assets/icons/terminal.png'), active: false, click: null },
                { label: 'Github', icon: require('@/assets/icons/github.png'), active: false, click: null },
                { label: 'Discord', icon: require('@/assets/icons/discord.png'), active: false, click: null },
            ],

            recommendedApps: [
                { label: 'Edge', icon: require('@/assets/icons/edge.png'), active: false, click: null },
                { label: 'Word', icon: require('@/assets/icons/word.png'), active: false, click: null },
                { label: 'Mail', icon: require('@/assets/icons/mail.png'), active: false, click: null },
                { label: 'Photos', icon: require('@/assets/icons/photos.png'), active: false, click: null },
                { label: 'VS Code', icon: require('@/assets/icons/vscode.png'), active: false, click: null },
                { label: 'Terminal', icon: require('@/assets/icons/terminal.png'), active: false, click: null },
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
        toggleStartMenu() {
            this.isStartMenuVisible = !this.isStartMenuVisible
        },
        toggleNotificationCenter() {
            this.isNotificationCenterVisible = !this.isNotificationCenterVisible
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

.dark {
    .desktop {
        background-image: url('../assets/wallpapers/dark.jpg');
    }
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

.start-menu {
    left: 50%;
    width: 520px;
    height: 530px;
    bottom: -100px;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%) scale(0.9);
    box-shadow: 0 0 6px rgb(0 0 0 / 25%);
}

.start-menu.show {
    bottom: 50px;
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) scale(1);
}

</style>