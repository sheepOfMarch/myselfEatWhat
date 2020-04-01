import VueRouter from 'vue-router';



import todayEatwhat from './components/todayEatwhat.vue';
import createEatwhat from './components/createEatwhat.vue';
import everybodyEatwhat from './components/everybodyEatwhat.vue';
import bestEatwhat from './components/bestEatwhat.vue';
import aboutUs from './components/aboutUs.vue';
import login from './components/user/login.vue';
import register from './components/user/register.vue';
import forgetKey from './components/user/forgetKey.vue';
import userCenter from './components/user/usercenter.vue';
import addImage from './components/addimage.vue';


var router = new VueRouter({
	routes: [
		{ path: '/', redirect: '/todayeatwhat'},
		{ path: '/todayeatwhat', component: todayEatwhat },
		{ path: '/createeatwhat', component: createEatwhat },
		{ path: '/everybodyeatwhat', component: everybodyEatwhat },
		{ path: '/besteatwhat', component: bestEatwhat },
		{ path: '/aboutus', component: aboutUs },
		{ path: '/user/login', component: login },
		{ path: '/user/register', component: register },
		{ path: '/user/forgetkey', component: forgetKey },
		{ path: '/user/usercenter', component: userCenter },
		{ path: '/addimage', component: addImage },
	]
});

export default router;
