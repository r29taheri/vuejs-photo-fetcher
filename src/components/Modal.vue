<template>
    <transition name="fade">
        <div class="modal" v-if="showModal" @click.self="$emit('close')">
            <div class="modal__container">
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['showModal']
}
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.281);
        z-index: 1001;
        .modal__container {
            width: 80%;
            min-height: 100px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 8px;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
            background-color: #ffffff;
            overflow-x: hidden;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>