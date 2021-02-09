<template lang="pug">
include ../../../tools/mixins.pug

+b.map(
    v-on:mouseenter="initMap"
    v-on:click="initMap"
)
    +e.preview(
        v-if="!hideImage"
    )
        template(
            v-if="deviceSize.mobile"
        )
            img(
                :src="srcPreviewImageMobile"
                alt="Карта"
            )
        template(
            v-if="deviceSize.tablet"
        )
            img(
                :src="srcPreviewImageTablet"
                alt="Карта"
            )
        template(
            v-if="deviceSize.desktop"
        )
            img(
                :src="srcPreviewImage"
                alt="Карта"
            )
    +e.gmap(
        v-if="showMap"
    )
        googlemaps-map(
            :center.sync="map.center"
            :zoom.sync="map.zoom"
            :options="map.options"
            ref="map"
        )
            googlemaps-marker(
                v-for="(item, index) in points"
                :title="item.title"
                :key="index"
                :position="item.position"
                :icon="map.icon"
                :clickable="true"
                :ref="'marker' + index"
            )
</template>

<script>
import deviceSize from '../../mixins/deviceSize';

export default {
    mixins: [deviceSize],
    props: {
        srcPreviewImage: {
            type: String,
            required: true,
        },
        srcPreviewImageMobile: {
            type: String,
            required: true,
        },
        srcPreviewImageTablet: {
            type: String,
            required: true,
        },
        points: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        // it is possible to add lazy-load of map
        showMap: true,
        hideImage: true,
        map: {
            center: { lat: 55.75222, lng: 37.61556 },
            point: { lat: 55.75222, lng: 37.61556 },
            zoom: 13,
            options: {
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: [
                    {
                        stylers: [
                            {
                                color: '#FAFBFD',
                            },
                        ],
                    },
                    {
                        elementType: 'labels.icon',
                        stylers: [
                            {
                                visibility: 'off',
                            },
                        ],
                    },
                    {
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#616161',
                            },
                        ],
                    },
                    {
                        elementType: 'labels.text.stroke',
                        stylers: [
                            {
                                color: '#F5F5F5',
                            },
                        ],
                    },
                    {
                        featureType: 'administrative.land_parcel',
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#516378',
                            },
                        ],
                    },
                    {
                        featureType: 'landscape.man_made',
                        elementType: 'geometry.fill',
                        stylers: [
                            {
                                color: '#FBFCFD',
                            },
                        ],
                    },
                    {
                        featureType: 'landscape.man_made',
                        elementType: 'geometry.stroke',
                        stylers: [
                            {
                                color: '#FFFFFF',
                            },
                        ],
                    },
                    {
                        featureType: 'poi',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#F9FAFC',
                            },
                        ],
                    },
                    {
                        featureType: 'poi',
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#516378',
                            },
                        ],
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#F3F6F9',
                            },
                        ],
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#9E9E9E',
                            },
                        ],
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#FFFFFF',
                            },
                        ],
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.stroke',
                        stylers: [
                            {
                                color: '#D8E1EB',
                            },
                        ],
                    },
                    {
                        featureType: 'road.arterial',
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#8291A3',
                            },
                        ],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#F8FBFF',
                            },
                        ],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [
                            {
                                color: '#D8E1EB',
                            },
                        ],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#616161',
                            },
                        ],
                    },
                    {
                        featureType: 'road.local',
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#8291A3',
                            },
                        ],
                    },
                    {
                        featureType: 'transit.line',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#E5E5E5',
                            },
                        ],
                    },
                    {
                        featureType: 'transit.station',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#EEEEEE',
                            },
                        ],
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#CBDCE9',
                            },
                        ],
                    },
                    {
                        featureType: 'water',
                        elementType: 'labels.text.fill',
                        stylers: [
                            {
                                color: '#5A8AB7',
                            },
                        ],
                    },
                ],
            },
            icon: `/images/map/icon.svg`,
            markers: {
                clicked: false,
                event: false,
                opened: {
                    el: null,
                    index: null,
                },
            },
        },
    }),
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.$nextTick(() => {
                this.setMapZoom();
            });
        },
        setMapZoom() {
            if (this.deviceSize.mobile) {
                this.map.zoom = 12;
            } else {
                this.map.zoom = 13;
            }
        },
        initMap() {
            if (!this.showMap) {
                this.showMap = true;
                setTimeout(() => {
                    this.hideImage = true;
                }, 700);
            }
        },
    },
};
</script>
