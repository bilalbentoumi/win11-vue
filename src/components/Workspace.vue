<template>
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
            <img src="@/assets/icons/store-dark.png" width="43" height="43" v-if="!darkMode">
            <img src="@/assets/icons/store-light.png" width="43" height="43" v-else>
            <span class="text-white text-xs app-name">Microsoft Store</span>
        </button>
        <button class="flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-30 rounded-sm duration-200 cursor-auto">
            <img src="@/assets/icons/edge.png" width="43" height="43">
            <span class="text-white text-xs app-name">Microsoft Edge</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Workspace',
    computed: {
        darkMode() {
            return this.$store.state.darkMode
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

.app-name {
    color: #fafafa;
    margin: 4px 0;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
}

</style>