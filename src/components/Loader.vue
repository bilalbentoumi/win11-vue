<template>
    <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>

<script>
export default {
    name: 'Loader.vue'
}
</script>

<style lang="scss" scoped>

.loader {
    width: 40px;
    height: 40px;
    position: relative;

    .circle {
        position: absolute;
        width: 30px;
        height: 30px;
        opacity: 0;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(225deg);
        transform-origin: center;
        animation-iteration-count: infinite;
        animation-name: orbit;
        animation-duration: 5.5s;
    }

    .circle:after {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 5px;
        background: #fff9;
    }

    .circle:nth-child(2) {
        animation-delay: 240ms;
    }

    .circle:nth-child(3) {
        animation-delay: 480ms;
    }

    .circle:nth-child(4) {
        animation-delay: 720ms;
    }

    .circle:nth-child(5) {
        animation-delay: 960ms;
    }

}

@keyframes orbit {
    0% {
        transform: translateX(-50%) translateY(-50%) rotate(225deg);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    7% {
        transform: translateX(-50%) translateY(-50%) rotate(345deg);
        animation-timing-function: linear;
    }
    30% {
        transform: translateX(-50%) translateY(-50%) rotate(455deg);
        animation-timing-function: ease-in-out;
    }
    39% {
        transform: translateX(-50%) translateY(-50%) rotate(690deg);
        animation-timing-function: linear;
    }
    70% {
        transform: translateX(-50%) translateY(-50%) rotate(815deg);
        opacity: 1;
        animation-timing-function: ease-out;
    }
    75% {
        transform: translateX(-50%) translateY(-50%) rotate(945deg);
        animation-timing-function: ease-out;
    }
    76% {
        transform: translateX(-50%) translateY(-50%) rotate(945deg);
        opacity: 0;
    }
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(945deg);
        opacity: 0;
    }
}

</style>