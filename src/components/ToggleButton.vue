<template>
    <div class="toggle__wrapper">
        <div class="toggle__box" :class="{'active': isActive}">
            <div class="off__icon"></div>
            <div class="on__btn" @click.self="$emit('active')"></div>
        </div>
        <p>Make photos grayscale</p>
    </div>
</template>

<script>
export default {
    props: ["isActive"]
}
</script>

<style lang="scss" scoped>
    .toggle__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .toggle__box {
        border-radius: 50px;
        width: 45px;
        height: 20px;
        background-color: #303030;
        position: relative;
        transition: 300ms ease-in background-color;
        margin-right: 10px;
    }
    .off__icon {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        &:after, &:before {
            content: "";
            width: 1px;
            height: 50%;
            position: absolute;
            background-color: #fff;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &:before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
    .on__btn {
        width: 40%;
        height: 80%;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translate(2px, -50%);
        cursor: pointer;
        transition: 300ms ease-in;
    }
    .active {
        background-color: $successColor;
        .on__btn {
            transform: translate(140%, -50%);
        }
    }
</style>