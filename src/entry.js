import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Index from './components/Index.vue';
import { Tag } from 'element-ui';

require('regenerator-runtime/runtime');  //async support
require('es6-promise').polyfill();
require('isomorphic-fetch');

Vue.component(Tag.name, Tag);
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