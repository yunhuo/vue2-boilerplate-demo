import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Index from './components/Index.vue';

require('regenerator-runtime/runtime');  //async support
require('es6-promise/auto');
require('isomorphic-fetch');

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    render(h) {
        return (
            <Index></Index>
        );
    }
});