<template lang="pug">
include ../../../tools/mixins.pug
+b.SECTION.vacancies
    +e.container.container
        +e.H3.title.title--h2 вакансии в гросс маркете
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
        v-swiper:vacanciesSlider="slider.settings"
    )
        .swiper-wrapper.container
            +e.CARD-VACANCY-COMPONENT.item.swiper-slide(
                ref="items"
                v-for="(vacancy, index) in vacanciesList"
                :key="`vacancy-${index}`"
                :class="[{ 'swiper-no-swiping': !slider.init || slider.disabled }]"
                :name="vacancy.name"
                :description="vacancy.description"
                :image="vacancy.image"
            )
</template>

<script>
import CardVacancy from '../blanks/CardVacancy.vue';
export default {
    components: {
        'card-vacancy-component': CardVacancy,
    },
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
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    slidesOffsetAfter: 60,
                    breakpoints: {
                        650: {
                            slidesOffsetAfter: 100,
                        },
                        1200: {
                            slidesOffsetAfter: 200,
                        },
                        1600: {
                            slidesOffsetAfter: 800,
                        },
                    },
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
            vacanciesList: [
                {
                    name: 'товаровед',
                    description:
                        'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
                    image: '/images/vacancies/commodity-expert.png',
                },
                {
                    name: 'водитель',
                    description:
                        'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
                    image: '/images/vacancies/driver.png',
                },
                {
                    name: 'пекарь',
                    description:
                        'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
                    image: '/images/vacancies/baker.png',
                },
                {
                    name: 'кассир',
                    description:
                        'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
                    image: '/images/vacancies/cashier.png',
                },
                {
                    name: 'продавец',
                    description:
                        'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
                    image: '/images/vacancies/seller.png',
                },
                {
                    name: 'повар',
                    description:
                        'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
                    image: '/images/vacancies/cook.png',
                },
                {
                    name: 'приёмщик',
                    description:
                        'Доставка товара по магазинам и гипермаркетам компании в обслуживаемом регионе',
                    image: '/images/vacancies/receiver.png',
                },
            ],
        };
    },
    methods: {
        prevSlide() {
            this.vacanciesSlider.slidePrev();
        },
        nextSlide() {
            this.vacanciesSlider.slideNext();
        },
        initSlider() {
            this.slider.init =
                this.$refs.items[
                    this.$refs.items.length - 1
                ].$el.getBoundingClientRect().left +
                    this.$refs.items[
                        this.$refs.items.length - 1
                    ].$el.getBoundingClientRect().width >
                window.innerWidth;
            this.slider.disabled = !this.slider.init;
        },
        onSlideChange() {
            this.slider.disableNavigation.prev = !this.vacanciesSlider.progress;
            this.slider.disableNavigation.next =
                this.$refs.items[
                    this.$refs.items.length - 1
                ].$el.getBoundingClientRect().left +
                    this.$refs.items[
                        this.$refs.items.length - 1
                    ].$el.getBoundingClientRect().width <
                window.innerWidth;
        },
    },
};
</script>
