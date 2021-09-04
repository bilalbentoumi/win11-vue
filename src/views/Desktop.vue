<template>
    <div class="desktop flex flex-col w-full h-full overflow-hidden">
        <Workspace/>
        <TaskBar/>
        <StartMenu/>
        <Calendar/>
        <NotificationCenter/>
    </div>
</template>

<script>
import Workspace from '../components/Workspace'
import TaskBar from '../components/TaskBar'
import StartMenu from '../components/StartMenu'
import NotificationCenter from '../components/NotificationCenter'
import Calendar from '../components/Calendar'

export default {
    name: 'Desktop',
    components: {
        Workspace,
        TaskBar,
        StartMenu,
        Calendar,
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