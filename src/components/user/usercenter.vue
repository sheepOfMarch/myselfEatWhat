<template>
	<div>
		<div class="usercenterbox">
			<div class="usertoux">
				<a class="touxianghref" href=""><img class="headpic" src="/src/images/userpic.jpg"><span>点击修改头像</span></a>
			</div>
			<div class="username">
				<span>我的昵称:</span>
				<span>行有不得</span>
				<a href=""></a>
			</div>
			<div class="usermail">
				<span>我的邮箱:</span>
				<span>1388888888@qq.com</span>
				<a href=""></a>
			</div>
			<div class="mymeun">
				我的菜单
			</div>
			<div class="mymeunlist">
				<compo v-for="item in 5"></compo>
			</div>
		</div>
	</div>
</template>

<script>
	import compo from '../compo.vue';
	export default {
		components: {
			compo
		},
	}
</script>

<style lang="less">
	.usercenterbox {
		height: 480px;
		overflow: hidden;
		margin: 20px 50px 0px 50px;
		.usertoux {
			// margin-bottom: 15px;
			.touxianghref {
			text-decoration: none;
			
			.headpic {
				width: 80px;
				height: 80px;
				margin-right: 5px;
			}

			span {
				vertical-align: bottom;
			}
		}
		}
		
		.username, .usermail  {
			margin-top: 25px;
		}
		
		.mymeun {
			margin-top: 50px;
			padding: 3px 0;
			font-size: 16px;
			border-bottom: 1px solid #ccc;
		}
		.mymeunlist {
			height: 220px;
			overflow: hidden;
		}
	}
</style>
