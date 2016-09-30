import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});