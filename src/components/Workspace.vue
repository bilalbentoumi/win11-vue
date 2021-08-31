<template>
    <div class="desktop-icons flex-grow p-1 grid-flow-col auto-cols-max">
        <button class="app flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-10 focus:bg-blue-500 focus:bg-opacity-10 border border-transparent focus:border-blue-500 focus:border-opacity-20 rounded-sm duration-200 cursor-auto" v-for="(item, index) in items" :key="index">
            <img :src="require(`@/assets/icons/${item.icon}.png`)" width="43" height="43">
            <span class="text-white text-xs app-name">{{ item.label }}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Workspace',
    computed: {
        darkMode() {
            return this.$store.state.darkMode
        },
        items() {
            let iconTheme = this.darkMode ? 'light' : 'dark'
            return [
                { label: 'This PC', icon: 'computer' },
                { label: 'Recycle Bin', icon: 'trash-empty' },
                { label: 'File Explorer', icon: 'explorer' },
                { label: 'Microsoft Store', icon: 'store-' + iconTheme },
                { label: 'Microsoft Edge', icon: 'edge' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.desktop-icons {
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(110px, 1fr) );

    .app {
        .app-name {
            color: #fafafa;
            margin: 4px 0;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
        }
    }
}

</style>