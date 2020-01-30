<template>
    <button class="btn" :class="type" @click="$emit('onClick')">{{title}}</button>
</template>

<script>
export default {
    props: ["type", "title"]
}
</script>

<style lang="scss" scoped>
    .btn {
        border: none;
        background-color: #546E7A;
        color: #fff;
        padding: 10px;
        border-radius: $standardRadiusSize;
        transition: 300ms ease-in opacity;
        &:hover {
            opacity: 0.9;
        }
    }
</style>