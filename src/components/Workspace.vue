<template>
    <div class="desktop-icons flex-grow p-1">

        <grid-layout
            :layout.sync="items"
            :col-num="cols"
            :max-rows="rows"
            :row-height="112"
            :is-draggable="true"
            :is-resizable="false"
            :is-mirrored="false"
            :vertical-compact="false"
            :margin="[2, 2]"
            :use-css-transforms="true"
            style="width: 100%; height: 100%;">

            <grid-item v-for="item in items" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" style="touch-action: none;">
                <div class="app flex flex-col justify-center items-center w-24 h-28 hover:bg-white hover:bg-opacity-10 focus:bg-blue-500 focus:bg-opacity-10 border border-transparent rounded-sm" :class="{ 'bg-blue-500 hover:bg-blue-500 bg-opacity-10': activeItem === item.i }" @mouseup="activeItem = item.i">
                    <img :src="require(`@/assets/icons/${item.icon}.png`)" width="43" height="43">
                    <span class="text-white text-xs text-center app-name">{{ item.label }}</span>
                </div>
            </grid-item>

        </grid-layout>

        <transition name="window">
            <VSCode v-show="apps.vscode.isActive"/>
        </transition>

    </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import VSCode from './apps/VSCode'
import {mapState} from 'vuex'

export default {
    name: 'Workspace',
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        VSCode
    },
    computed: {
        ...mapState({
            darkMode: state => state.darkMode,
            apps: state => state.apps,
        }),
        iconTheme() {
            return this.darkMode ? 'light' : 'dark'
        }
    },
    data() {
        return {
            shownApps: ['vscode'],
            cols: 15,
            rows: 15,
            items: [],
            activeItem: -1
        }
    },
    methods: {
        loadItems() {

            this.updateGrid()

            let items = [
                { label: 'This PC', icon: 'computer' },
                { label: 'Recycle Bin', icon: 'trash-empty' },
                { label: 'File Explorer', icon: 'explorer' },
                { label: 'Microsoft Store', icon: 'store-' + this.iconTheme },
                { label: 'Microsoft Edge', icon: 'edge' }
            ]

            for (let i = 0; i < items.length; i++) {
                items[i].x = parseInt(i / this.rows)
                items[i].y = i % this.rows
                items[i].w = 1
                items[i].h = 1
                items[i].i = i
            }

            this.items = items

        },
        updateGrid() {
            this.cols = parseInt(document.querySelector('.desktop-icons').offsetWidth / 96)
            this.rows = parseInt(document.querySelector('.desktop-icons').offsetHeight / 112)
        }
    },
    mounted() {

        this.loadItems()

        window.onresize = () => {
            this.loadItems()
        }

        document.addEventListener('click', (event) => {

            let ignoreClickOnMeElements = document.getElementsByClassName('vue-grid-item');
            let isClickInsideElement = false

            for (let element of ignoreClickOnMeElements) {
                if (element.contains(event.target)) {
                    isClickInsideElement = true
                    break
                }
            }

            if (!isClickInsideElement) {
                this.activeItem = -1
            }

        })

    }
}
</script>

<style lang="scss">

.desktop-icons {

    .app {
        .app-name {
            color: #fafafa;
            margin: 4px 0;
            text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
        }
    }

    .vue-grid-item {
        cursor: auto !important;
    }

    .vue-grid-item.vue-grid-placeholder {
        background: #ceceff !important;
    }

}


.window-enter,
.window-leave-to {
    visibility: hidden;
    height: 0;
    margin: 0;
    padding: 0;
    opacity: 0;
    transform: scale(0.95);
}

.window-enter-active,
.window-leave-active {
    transition: all 0.3s;
}

</style>