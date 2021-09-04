<template>
    <vue-resizable class="window flex flex-col overflow-hidden shadow-lg"
                   dragSelector=".title-bar"
                   :top="top"
                   :left="left"
                   :width="width"
                   :height="height"
                   :min-width="minWidth"
                   :min-height="minHeight"
                   :maximize="isMaximized"
                   @drag:start="dragStart()"
                   @drag:end="dragEnd()"
                   @resize:start="resizeStart()"
                   @resize:end="resizeEnd()"
                   :class="{ 'duration-100': !isDragging && !isResizing, 'minimized': isMinimized, 'rounded-md': !isMaximized }">

            <div class="title-bar flex items-center gap-2 bg-black pl-2 h-30" @dblclick="isMaximized ? restore() : maximize()">

                <img width="14" src="@/assets/icons/vscode.png"/>

                <span class="text-white text-xs flex-grow">Visual Studio Code</span>

                <div class="window-controls h-full flex">
                    <button class="px-5 py-3 hover:bg-white hover:bg-opacity-10 duration-100" @click="minimize()">
                        <svg class="fill-current text-white w-2 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 1">
                            <path d="M10 -0.000976562V1H0V-0.000976562H10Z"></path>
                        </svg>
                    </button>
                    <button class="px-5 py-3 hover:bg-white hover:bg-opacity-10 duration-100" v-if="isMaximized" @click="restore()">
                        <svg class="fill-current text-white w-2 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                            <path d="M10 7.99805H7.99805V10H0V2.00195H2.00195V0H10V7.99805ZM7.00195
                                  2.99805H1.00098V8.99902H7.00195V2.99805ZM8.99902
                                  1.00098H2.99805V2.00195H7.99805V7.00195H8.99902V1.00098Z"></path>
                        </svg>
                    </button>
                    <button class="px-5 py-3 hover:bg-white hover:bg-opacity-10 duration-100" v-else @click="maximize()">
                        <svg class="fill-current text-white w-2 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                            <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path>
                        </svg>
                    </button>
                    <button class="px-5 py-3 hover:bg-red-500 duration-100" @click="close()">
                        <svg class="fill-current text-white w-2 h-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.2 10.2">
                            <path d="M10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2
                                    5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></path>
                        </svg>
                    </button>
                </div>

            </div>

            <div class="window-content flex-grow bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg w-full" :class="{ 'pointer-events-none': isDragging || isResizing }">
                <iframe src="https://github1s.com/bilalbentoumi/win11-vue" class="w-full h-full"></iframe>
            </div>

        </vue-resizable>
</template>

<script>
import VueResizable from 'vue-resizable'
import {mapState} from 'vuex'

export default {
    name: 'VSCode',
    components: {
        VueResizable
    },
    computed: {
        ...mapState({
            'isActive': state => state.apps.vscode.isActive,
            'isMaximized': state => state.apps.vscode.isMaximized,
            'isMinimized': state => state.apps.vscode.isMinimized,
        })
    },
    data() {
        return {
            top: 50,
            left: 50,
            width: 1100,
            height: 700,
            minWidth: 1100,
            minHeight: 700,
            isDragging: false,
            isResizing: false,
        }
    },
    methods: {
        minimize() {
            this.$store.state.apps.vscode.isMinimized = true
        },
        restore() {
            this.$store.state.apps.vscode.isMaximized = false
        },
        maximize() {
            this.$store.state.apps.vscode.isMaximized = true
        },
        close() {
            this.$store.state.apps.vscode.isActive = false
        },

        dragStart() {
            this.isDragging = true
        },
        dragEnd() {
            this.isDragging = false
        },
        resizeStart() {
            this.isResizing = true
        },
        resizeEnd() {
            this.isResizing = false
        }
    }
}
</script>

<style>

.window {
    box-shadow: 0 4px 15px #0004;
}

.resizable-component {
    position: absolute !important;
}

.minimized {
    opacity: 0;
    transform: translateY(100px);
}

</style>