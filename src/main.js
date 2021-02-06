import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/styles.scss';

import { Swiper, Navigation } from 'swiper';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Swiper.use([Navigation]);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
