<template lang="pug">
include ../../../tools/mixins.pug
+b.SECTION.geography
    +e.container.container
        +e.H2.title.title--h2 География
    +e.container--map.container
        +e.map
            +e.MAP-COMPONENT.view(
                srcPreviewImage="/images/map/placeholder.jpg"
                srcPreviewImageTablet="/images/map/placeholder-tablet.jpg"
                srcPreviewImageMobile="/images/map/placeholder-mobile.jpg"
                :points="shownPoints"
            )
            +e.filter
                +e.BUTTON.button.button--standart.--height-small.--font-size-medium(
                    v-for="(button, buttonIndex) in filter.buttons"
                    :class="buttonClass(buttonIndex)"
                    v-on:click="setFilter(buttonIndex)"
                ) {{ button.text }}
            +e.zoom
</template>

<script>
import Map from '../blanks/Map';
export default {
    components: {
        'map-component': Map,
    },
    data: () => ({
        date1: 2,
        filter: {
            activeIndex: 2,
            buttons: [
                {
                    text: 'юрлица',
                },
                {
                    text: 'физлица',
                },
                {
                    text: 'показать всё',
                },
            ],
        },
        points: [
            {
                position: { lat: 55.75222, lng: 37.61556 },
                type: 0,
            },
            {
                position: { lat: 55.761887, lng: 37.634536 },
                type: 1,
            },
            {
                position: { lat: 55.745103, lng: 37.65683 },
                type: 0,
            },
            {
                position: { lat: 55.733046, lng: 37.638152 },
                type: 1,
            },
            {
                position: { lat: 55.737261, lng: 37.592849 },
                type: 0,
            },
            {
                position: { lat: 55.755318, lng: 37.575582 },
                type: 1,
            },
            {
                position: { lat: 55.772399, lng: 37.582859 },
                type: 0,
            },
            {
                position: { lat: 55.771559, lng: 37.622039 },
                type: 1,
            },
            {
                position: { lat: 55.767796, lng: 37.655052 },
                type: 0,
            },
            {
                position: { lat: 55.761242, lng: 37.602776 },
                type: 1,
            },
        ],
    }),
    computed: {
        shownPoints() {
            if (this.filter.activeIndex === 2) {
                return this.points;
            }
            return this.points.filter(
                (point) => point.type === this.filter.activeIndex
            );
        },
    },
    methods: {
        buttonClass(index) {
            if (index === this.filter.activeIndex) {
                return 'button--background-yellow';
            }

            return 'button--background-white';
        },
        setFilter(index) {
            this.filter.activeIndex = index;
        },
    },
};
</script>
