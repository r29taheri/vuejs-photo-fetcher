<template>
    <div class="container">
        <h1>Photo Fetcher</h1>
        <div class="flex-wrapper">
            <ToggleButton type="bg-info" :isActive="isGray" @active="isGray = !isGray"/>
            <CustomButton type="bg-info" title="Fetch New Photos" @onClick="onFetch()"/>
        </div>
        <div class="grid-wrapper">
            <ImageItem v-for="pic in count" :key="fetch + pic" :class="{'gray': isGray}" @webview="showDetail"/>
        </div>
        <div class="flex-wrapper">
            <CustomButton type="bg-info" class="mt-10 mb-10 col" title="More Photos" @onClick="onMorePhotos()"/>
        </div>
        <Modal :showModal="showModal" @close="showModal = false">
            <div class="pic__detail" v-if="picDetail">
                <img :src="picDetail.download_url" :alt="picDetail.author" :class="{'gray': isGray}" >
                <a :href="picDetail.url" target="_blank" :alt="picDetail.author">See the picture on unsplash</a>
            </div>
        </Modal>
    </div>
</template>

<script>
import ImageItem from "@/components/ImageItem";
import CustomButton from "@/components/CustomButton";
import ToggleButton from "@/components/ToggleButton";
import Modal from "@/components/Modal";

export default {
    components: {
        ImageItem,
        CustomButton,
        ToggleButton,
        Modal
    },
    data() {
        return {
            showModal: false,
            picDetail: null,
            count: 4,
            fetch: new Date().getTime(),
            isGray: false
        }
    },
    methods: {
        showDetail(info) {
            this.picDetail = info;
            this.showModal = true;
        },
        onFetch() {
            this.fetch = new Date().getTime();
            this.count = 4;
        },
        onMorePhotos() {
            this.count += 4;
            setTimeout(() => {
                window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
            }, 100);
        }
    }
}
</script>

<style lang="scss" scoped>
    .images {
        display: flex;
        flex-wrap: wrap;
    }
    .pic__detail {
        display: flex;
        flex-direction: column;
        img {
            max-height: 80vh;
            width: auto;
            object-fit: cover;
        }
        a {
            padding: 10px 0;
            text-decoration: none;
        }
    }
    .gray {
        filter: grayscale(100%);
    }
</style>