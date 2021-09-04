<template>
    <div class="start-menu absolute flex flex-col bg-white bg-opacity-80 dark:bg-gray-600 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-md overflow-hidden duration-200" :class="{ 'show': isOpen }">

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
                    <div v-for="(item, index) in apps" :key="index" class="flex flex-col justify-center items-center gap-1 py-2 hover:bg-white hover:bg-opacity-50 active:bg-opacity-30 dark:hover:bg-opacity-10 dark:active:bg-opacity-5 rounded-sm duration-150">
                        <img :src="item.icon" width="24"/>
                        <span class="text-2xs font-medium text-gray-800 dark:text-gray-200 text-center">{{ item.label }}</span>
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
                            <span class="text-2xs font-medium text-gray-800 dark:text-gray-200">{{ item.label }}</span>
                            <span class="text-2xs font-medium text-gray-500 dark:text-white dark:text-opacity-30">{{ item.subLabel }}</span>
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
                <img src="@/assets/ui/power.png" class="rounded-full" :class="{ 'filter invert': !darkMode }" width="14"/>
            </div>
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'StartMenu',
    computed: {
        ...mapState({
            isOpen: state => state.startMenuOpen,
            darkMode: state => state.darkMode
        })
    },
    data() {
        return {

            apps: [
                { label: 'Edge', icon: require('@/assets/icons/edge.png'), active: false, click: this.none },
                { label: 'Word', icon: require('@/assets/icons/word.png'), active: false, click: this.none },
                { label: 'PowerPoint', icon: require('@/assets/icons/powerpoint.png'), active: false, click: this.none },
                { label: 'OneNote', icon: require('@/assets/icons/onenote.png'), active: false, click: this.none },
                { label: 'Mail', icon: require('@/assets/icons/mail.png'), active: false, click: this.none },
                { label: 'To Do', icon: require('@/assets/icons/todo.png'), active: false, click: this.none },
                { label: 'Store', icon: require('@/assets/icons/store-dark.png'), active: false, click: this.none },
                { label: 'Photos', icon: require('@/assets/icons/photos.png'), active: false, click: this.none },
                { label: 'Your Phone', icon: require('@/assets/icons/your-phone.png'), active: false, click: this.none },
                { label: 'Notepad', icon: require('@/assets/icons/notepad.png'), active: false, click: this.none },
                { label: 'Calculator', icon: require('@/assets/icons/calculator.png'), active: false, click: this.none },
                { label: 'Spotify', icon: require('@/assets/icons/spotify.png'), active: false, click: this.none },
                { label: 'VS Code', icon: require('@/assets/icons/vscode.png'), active: false, click: this.none },
                { label: 'Terminal', icon: require('@/assets/icons/terminal.png'), active: false, click: this.none },
                { label: 'Github', icon: require('@/assets/icons/github.png'), active: false, click: this.none },
                { label: 'Discord', icon: require('@/assets/icons/discord.png'), active: false, click: this.none },
            ],

            recommendedApps: [
                { label: 'Edge', subLabel: '17min ago', icon: require('@/assets/icons/edge.png'), active: false, click: this.none },
                { label: 'Word', subLabel: '1h ago', icon: require('@/assets/icons/word.png'), active: false, click: this.none },
                { label: 'Mail', subLabel: '12h ago', icon: require('@/assets/icons/mail.png'), active: false, click: this.none },
                { label: 'Terminal', subLabel: '1h ago', icon: require('@/assets/icons/terminal.png'), active: false, click: this.none },
                { label: 'VS Code', subLabel: 'Yesterday at 4:24 PM', icon: require('@/assets/icons/vscode.png'), active: false, click: this.none },
                { label: 'Photos', subLabel: 'Last week', icon: require('@/assets/icons/photos.png'), active: false, click: this.none },
            ]

        }
    },
    methods: {
        none() {}
    }
}
</script>

<style>

.start-menu {
    left: 50%;
    width: 520px;
    height: 530px;
    bottom: -100px;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%) scale(0.9);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.start-menu.show {
    bottom: 50px;
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) scale(1);
}

</style>