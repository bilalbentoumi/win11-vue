<template>
    <div class="task-bar w-full bg-white bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center z-50 relative">
        <div class="flex gap-2 p-1">
            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto" v-for="(item, index) in items" :key="index" @click="item.action">
                <img class="transform active:scale-75 duration-150 px-1.5 py-1" :src="require(`@/assets/icons/${item.icon}.png`)" width="34">
            </button>
<!--            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/search-light.png" width="34" v-if="darkMode">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/search-dark.png" width="34" v-else>-->
<!--            </button>-->
<!--            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/widget.png" width="34">-->
<!--            </button>-->
<!--            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/settings.png" width="34">-->
<!--            </button>-->
<!--            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/explorer.png" width="34">-->
<!--            </button>-->
<!--            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/edge.png" width="34">-->
<!--            </button>-->
<!--            <button class="rounded-sm hover:bg-white hover:bg-opacity-80 dark:hover:bg-black dark:hover:bg-opacity-20 duration-200 cursor-auto">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/store-dark.png" width="34" v-if="!darkMode">-->
<!--                <img class="transform active:scale-75 duration-150 px-1.5 py-1" src="@/assets/icons/store-light.png" width="34" v-else>-->
<!--            </button>-->
        </div>
        <div class="flex absolute right-0 bottom-0 h-full hidden md:flex">
            <div class="inline-flex justify-center items-center w-8 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 10px; height: 10px;">
                    <path fill="currentColor" :class="{ 'text-white': darkMode }" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
                </svg>
            </div>
            <div class="inline-flex justify-center items-center w-8 h-full">
                <img width="16" src="@/assets/ui/battery.png" :class="{ 'filter invert': darkMode }"/>
            </div>
            <div class="inline-flex justify-center items-center w-8 h-full">
                <img width="22" src="@/assets/ui/audio.png" :class="{ 'filter invert': darkMode }"/>
            </div>
            <div class="flex flex-col text-xs justify-center items-center px-2" :class="{ 'text-white': darkMode}">
                <span>{{ today.time }}</span>
                <span>{{ today.date }}</span>
            </div>
            <div class="inline-flex justify-center items-center w-8 h-full hover:bg-gray-300 dark:hover:bg-gray-600 duration-100" @click="toggleNotificationCenter()">
                <img width="16" src="@/assets/ui/notification-center.png" :class="{ 'filter invert': !darkMode }"/>
            </div>
            <div class="h-full w-2 border-l border-gray-300 dark:border-gray-600 ml-2"></div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'TaskBar',
    computed: {
        darkMode() {
            return this.$store.state.darkMode
        },
        items() {
            let iconTheme = this.darkMode ? 'light' : 'dark'
            return [
                { icon: 'start', action: this.toggleStartMenu },
                { icon: 'search-' + iconTheme, action: null },
                { icon: 'widget', action: null },
                { icon: 'settings', action: null },
                { icon: 'explorer', action: null },
                { icon: 'edge', action: null },
                { icon: 'store-' + iconTheme, action: null }
            ]
        }
    },
    data() {
        return {
            today: {},
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
            this.$store.dispatch('toggleStartMenu')
        },
        toggleNotificationCenter() {
            this.$store.dispatch('toggleNotificationCenter')
        }
    },
    mounted() {
        this.updateTime()
        setInterval(this.updateTime, 1000)
    }
}
</script>

<style scoped>

.task-bar {
    height: 40px;
}

</style>