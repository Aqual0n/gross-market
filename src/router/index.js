import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Form from '../views/Form.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },
    {
        path: '/form',
        name: 'form',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Form,
    },
];

const router = new VueRouter({
    routes,
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

export default router;
