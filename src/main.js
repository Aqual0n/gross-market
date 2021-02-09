import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/styles.scss';

import { Swiper, Navigation } from 'swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Swiper.use([Navigation]);
Vue.use(VueAwesomeSwiper);

import VueGoogleMaps from 'vue-googlemaps';
Vue.use(VueGoogleMaps, {
    installComponents: true,
    load: {
        apiKey: {
            key: 'AIzaSyBBrz3p5oIhdD-cGUu5MF0ixHOg1go6bcI',
            language: 'ru',
        },
        libraries: ['places'],
        useBetaRenderer: false,
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
