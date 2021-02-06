<template lang="pug">
include ../../../tools/mixins.pug
+b.SECTION.main
    +e.container--navigation.container
        +e.navigation(
            v-if="slider.init"
        )
            +e.BUTTON.button--navigation.--prev.button--navigation(
                type="button"
                :class="{ disabled: slider.disableNavigation.prev }"
                v-on:click="prevSlide"
            )
            +e.BUTTON.button--navigation.--next.button--navigation(
                type="button"
                :class="{ disabled: slider.disableNavigation.next }"
                v-on:click="nextSlide"
            )
    +e.slider.swiper-container(
        v-swiper:mainSlider="slider.settings"
    )
        .swiper-wrapper
            +e.slide.swiper-slide(
                v-for="slide in slides"
                ref="slide"
            )
                +e.container.container
                    +e.title.title--h1 {{ slide.title }}
                    +e.image
                        +e.label(
                            v-for="label in slide.labels"
                            :class="`main__label--${label.position}`"
                        ) {{ label.text }}
                        img(
                            :src="getImageSrc(slide.image)"
                        )
</template>

<script>
import deviceSize from '../../mixins/deviceSize';
export default {
    mixins: [deviceSize],
    data() {
        return {
            slider: {
                init: true,
                disabled: false,
                disableNavigation: {
                    prev: true,
                    next: false,
                },
                settings: {
                    slidesPerView: 1,
                    on: {
                        init: () => {
                            this.initSlider();
                        },
                        transitionEnd: () => {
                            this.onSlideChange();
                        },
                    },
                },
            },
            slides: [
                {
                    title: 'У тебя к этому талант',
                    labels: [
                        {
                            text: 'пекарь',
                            position: 'top-right',
                        },
                        {
                            text: 'валентин',
                            position: 'bottom-left',
                        },
                    ],
                    image: {
                        mobile: '/images/main/1.png',
                        tablet: '/images/main/1-tablet.png',
                        desktop: '/images/main/1-desktop.png',
                    },
                },
                {
                    title: 'У тебя к этому талант',
                    labels: [
                        {
                            text: 'пекарь',
                            position: 'top-right',
                        },
                        {
                            text: 'валентин',
                            position: 'bottom-left',
                        },
                    ],
                    image: {
                        mobile: '/images/main/1.png',
                        tablet: '/images/main/1-tablet.png',
                        desktop: '/images/main/1-desktop.png',
                    },
                },
            ],
        };
    },
    mounted() {
        this.onSlideChange();
    },
    methods: {
        initSlider() {
            this.slider.init = this.$refs.slide.length > 1;
            this.slider.disabled = !this.slider.init;
        },
        prevSlide() {
            this.mainSlider.slidePrev();
        },
        nextSlide() {
            this.mainSlider.slideNext();
        },
        onSlideChange() {
            console.log(this.mainSlider.activeIndex);
            this.slider.disableNavigation.prev = !this.mainSlider.progress;
            this.slider.disableNavigation.next =
                this.mainSlider.activeIndex === this.$refs.slide.length - 1;
        },
        getImageSrc(path) {
            if (this.deviceSize.tablet) {
                return path.tablet;
            } else if (this.deviceSize.desktop) {
                return path.desktop;
            }

            return path.mobile;
        },
    },
};
</script>
