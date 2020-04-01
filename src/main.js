// 入口文件

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Vuex);



import app from './App.vue';
import router from './router.js';
import $ from 'jquery';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

var store = new Vuex.Store({
	state:{
		islog: false,
		userInfo: null
	},
	mutations:{}
});

var vm = new Vue({
	el: '#app',
	data: {
		
	},
	render: c => c(app),
	router,
	store
});