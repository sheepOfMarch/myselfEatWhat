<template>
	<div>
		<div class="usercenterbox">
			<div class="usertoux">
				<a class="touxianghref"><img class="headpic" src="/src/images/userpic.jpg"><span>点击修改头像</span></a>
			</div>
			<div class="username">
				<span>我的昵称:</span>
				<input type="text" v-model="oldname" :disabled="isChangeNameFn" @blur="doneChangeName"> 
				<a class="glyphicon glyphicon-pencil change" @click="isChangeName"></a>
			</div>
			<div class="usermail">
				<span>我的邮箱:</span>
				<!-- <span>{{ this.$store.state.userInfo.email }}</span> -->
				<input type="text" v-model="oldmail" :disabled="isChangeMailFn" @blur="doneChangeMail"> 
				<a class="glyphicon glyphicon-pencil change" @click="isChangeMail"></a>
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
	function updataUser(key, value, obj) {
		var userdata = JSON.parse(localStorage.getItem("eatWhatUserInfo")) || [];
		userdata.forEach(function(item){
			if(item.tel == obj.$store.state.userInfo.tel){
				item[key] = value;
			}
		});
		localStorage.setItem("eatWhatUserInfo",JSON.stringify(userdata));
	}
	import compo from '../compo.vue';
	export default {
		data() {
			return {
				ischangeName: true,
				ischangeMail: true,
				oldname: '',
				oldmail: '',
			}
		},
		created(){
			this.oldname = this.$store.state.userInfo.name;
			this.oldmail = this.$store.state.userInfo.email;
		},
		computed:{
			isChangeNameFn() {
				return this.ischangeName
			},
				
			isChangeMailFn() {
				return this.ischangeMail
			}
		},
		methods: {
			isChangeName(){
				this.ischangeName = false
			},
			isChangeMail(){
				this.ischangeMail = false
			},
			doneChangeName(){
				this.ischangeName = true;
				updataUser('name', this.oldname, this);
			},
			doneChangeMail(){
				this.ischangeMail = true;
				updataUser('email', this.oldmail, this);
			}
		},
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
		.change {
			font-size: 12px;
			cursor: pointer;
			text-decoration: none;
		}
		.usertoux {
			// margin-bottom: 15px;
			.touxianghref {
			text-decoration: none;
			cursor: pointer;
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
		.username, .usermail {
			input {
				border: none;
			}
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
