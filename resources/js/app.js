/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vue.component('testing-component', require('./components/TestingComponent.vue').default);

import testing from './components/TestingComponent.vue'
import example from './components/ExampleComponent.vue'
import form from './components/FormComponent.vue'



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


 const routes = [
  { path: '/testing', component: testing },
  { path: '/', component: example },
  { path: '/form', component: form }

]




const router = new VueRouter({
  routes // short for `routes: routes`
})


const app = new Vue({
	 router,
    el: '#app',
});
