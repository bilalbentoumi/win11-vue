<template>
    <div class="desktop flex flex-col w-full h-full">
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
        </div>
        <div class="task-bar w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg flex justify-center gap-2 p-1">
            <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 duration-200 cursor-auto">
                <img src="@/assets/icons/start.png" width="22" height="22">
            </button>
            <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 duration-200 cursor-auto">
                <img src="@/assets/icons/search.png" width="22" height="22">
            </button>
            <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 duration-200 cursor-auto">
                <img src="@/assets/icons/widget.png" width="22" height="22">
            </button>
            <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 duration-200 cursor-auto">
                <img src="@/assets/icons/settings.png" width="22" height="22">
            </button>
            <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 duration-200 cursor-auto">
                <img src="@/assets/icons/explorer.png" width="22" height="22">
            </button>
            <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 duration-200 cursor-auto">
                <img src="@/assets/icons/edge.png" width="22" height="22">
            </button>
            <button class="rounded-sm px-1.5 hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 duration-200 cursor-auto">
                <img src="@/assets/icons/store.png" width="22" height="22">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
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