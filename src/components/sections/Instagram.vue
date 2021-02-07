<template lang="pug">
include ../../../tools/mixins.pug
+b.SECTION.instagram
    +e.container.container
        +e.H2.title.title--h2 мы в инстаграме
        +e.wrapper(
            :style="{ height: wrapperHeight }"
        )
            +e.list(
                ref="list"
            )
                +e.image(
                    v-for="(image, index) in shownImages"
                    :class="`instagram__image--${index + 1}`"
                )
                    img(
                        :src="image"
                    )
        +e.BUTTON.button.button--standart.--font-size-medium.--background-gray(
            v-if="!hideButton"
            v-on:click="showMore"
        ) показать ещё
</template>

<script>
export default {
    data: () => ({
        // this can be images from api for example
        images: [
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            // some more
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
            '/images/instagram/1.jpg',
        ],
        show: 5,
        wrapperHeight: null,
        hideButton: false,
    }),
    computed: {
        shownImages() {
            const images = [];
            this.images.forEach((item, index) => {
                if (index < this.show) {
                    images.push(item);
                }
            });

            return images;
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.onResize();
            this.checkButton();
        });
        window.addEventListener('resize', this.onResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        setWrapperHeight() {
            const list = this.$refs.list;
            this.wrapperHeight = `${list.getBoundingClientRect().height}px`;
            console.log(this.wrapperHeight);
        },
        checkButton() {
            if (this.show >= this.images.length) {
                this.hideButton = true;
            }
        },
        showMore() {
            this.show += 5;
            this.$nextTick(() => {
                this.setWrapperHeight();
                this.checkButton();
            });
        },
        onResize() {
            this.$nextTick(() => {
                this.setWrapperHeight();
            });
        },
    },
};
</script>
