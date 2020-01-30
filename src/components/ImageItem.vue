<template>
    <div class="image" :class="{'loading': isLoading}">
        <img :src="pic" @click.self="$emit('webview', detail)"/>
        <div v-if="detail" class="image__detail">
            <span class="image__author">{{detail.author}}</span>
            <a class="image__url" :href="detail.url" target="_blank">{{detail.url}}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pic: undefined,
            isLoading: true,
            detail: null
        }
    },
    methods: {
        getImg() {
            const url = `https://picsum.photos/367/267?random&t==${this.id}`;
            this.$http.get(url, { responseType: 'arraybuffer' }).then(response => {
                const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte),''));
                this.pic = "data:;base64," + base64 ;
                const id = (new URL(response.request.responseURL)).pathname.split("/")[2];
                this.getImgDetail(id);
            })
        },
        getImgDetail(id) {
            const url = `https://picsum.photos/id/${id}/info`;
            this.$http.get(url).then(response => {
                this.detail = response.data;
                this.isLoading = false;
            })
        }
    },
    mounted() {
        this.getImg();
    }
}
</script>

<style lang="scss">
    .image {
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
        border-radius: $standardRadiusSize;
        width: 100%;
        height: 315px;
        overflow: hidden;
        position: relative;
        user-select: none;
        transition: 300ms ease-in-out;
        position: relative;
        &:hover {
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.51);
            transform: translate(2px, 5px)
        }
        &.loading {
            &:after {
                content: "";
                width: 100%;
                height: 100%;
                background: rgb(255,255,255);
                background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(233,233,233,1) 32%, rgba(246,246,246, 0.5) 76%, rgba(255,255,255, 0.5) 100%);
                position: absolute;
                left: -20px;
                animation: loading 1s infinite ease-in-out;
            }
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            cursor: pointer;
        }
    }
    .image__detail {
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.555);
        color: #e3e3e3;
        padding: 15px 20px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .image__author {
            display: block;
            font-weight: 700;
            font-size: 1.4rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .image__url {
            font-weight: 100;
            font-size: .8rem;
            text-decoration: none;
            color: inherit;
        }
    }
    @keyframes loading {
        from {
            left: -20px;
        }
        to {
            left: 100%;
        }
    }
</style>