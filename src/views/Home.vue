<template>
    <div class="desktop flex flex-col w-full h-full overflow-hidden">
        <Workspace/>
        <TaskBar/>
        <StartMenu/>
        <NotificationCenter/>
    </div>
</template>

<script>
import Workspace from '../components/Workspace'
import TaskBar from '../components/TaskBar'
import StartMenu from '../components/StartMenu'
import NotificationCenter from '../components/NotificationCenter'

export default {
    name: 'Home',
    components: {
        Workspace,
        TaskBar,
        StartMenu,
        NotificationCenter
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

</style>