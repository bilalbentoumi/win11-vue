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
                <img src="@/assets/icons/store.png" width="43" height="43">
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
                    <img class="transform active:scale-75 duration-150" src="@/assets/icons/store.png" width="22" height="22">
                </button>
            </div>

            <div class="flex absolute right-0 bottom-0 h-full">
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-flip="false" data-invert="false" data-rounded="false" style="width: 10px; height: 10px;"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <img width="16" src="@/assets/icons/battery.png"/>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full">
                    <img width="22" src="@/assets/icons/audio.png"/>
                </div>
                <div class="inline-flex justify-center items-center w-8 h-full filter invert">
                    <img width="16" src="@/assets/icons/sidepane.png"/>
                </div>
                <div class="flex flex-col text-xs justify-center items-center px-2">
                    <span>{{ today.date }}</span>
                    <span>{{ today.time }}</span>
                </div>
                <div class="h-full w-2 border-l border-gray-300 ml-2"></div>
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
            today: {}
        }
    },
    methods: {
        updateTime() {
            this.today = {
                date: moment().format('MM/D/YYYY'),
                time: moment().format('hh:mm A')
            }
        }
    },
    mounted() {
        this.updateTime()
        setInterval(this.updateTime, 1000)
    }
}
</script>

<style scoped>

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

</style>