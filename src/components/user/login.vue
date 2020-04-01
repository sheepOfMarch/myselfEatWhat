<template>
	<div class="loginPage">
		<div class="loginBox">
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">用户名</span>
				<input type="text" class="form-control" v-model="username">
				<!-- <span v-if="nameIsFlag" :class="nameIsRight? 'isRight':'isError'">{{ nameIsRight? '√':'×' }}</span> -->
			</div>
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">密码</span>
				<input type="password" class="form-control" v-model="password">
			</div>
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">验证码</span>
				<input type="text" class="form-control" v-model="typeCode" @blur="blur_code">
				<a class="input-group-addon yzm" @click="sendCode"> {{ code }}</a>
				<span v-if="codeIsFlag" :class="codeIsRight? 'isRight':'isError'">{{ codeIsRight? '√':'×' }}</span>
			</div>
			<div class="longin-btn">
				<input type="button" class="btn btn-primary login" value="登陆" @click="userLogin"><router-link to="/user/forgetkey" class="forget">忘记密码？</router-link>
			</div>
			<div class="longin-btn">
				<router-link to="/user/register" class="noId">没有账号？点击注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// nameIsFlag: true,
				nameIsRight: false,
				codeIsFlag: false,
				codeIsRight: true,
				
				username: '',
				password: '',
				code: undefined,
				typeCode: ''
			}
		},
		created() {
			this.sendCode();
		},
		methods: {
			blur_code() {
				if (this.typeCode === this.code) {
					this.codeIsFlag = true;
					this.codeIsRight = true;
				} else {
					this.codeIsFlag = true;
					this.codeIsRight = false;
				}
			},
			sendCode() { // 随机生成验证码
				var arr = [];
			
				function myAscii(a, b) {
					var temp = [];
					for (var i = a; i <= b; i++) {
						temp.push(String.fromCharCode(i));
					}
					return temp;
				}
				arr = arr.concat(myAscii(48, 57), myAscii(65, 90), myAscii(97, 122));
				var codes = '';
				for (var i = 0; i < 4; i++) {
					codes += arr[Math.floor(Math.random() * 62)];
				}
				this.code = codes;
			},
			userLogin() {
				var userJson = JSON.parse(localStorage.getItem("eatWhatUserInfo")) || [];
				var userInfo = this;
				
				userJson.forEach(item=>{
					
				});
				var isLogin = false;
				isLogin = userJson.some(function(item) {
					
					if(item.name == userInfo.username && item.password == userInfo.password && userInfo.typeCode == userInfo.code) {
						userInfo.$store.state.userInfo = item;
						return true;
					}
				});
				if(isLogin) {
					this.$store.state.islog = true;
					this.$router.push({
						path: '/'
					});
				} else {
					console.log("用户不存在，请注册。")
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@goldColor: #ff9900;
	@fontColor: #dedede;
	@placeholder: #ccc;
	@buttonBgc: #5bc0de;
	
	
	.loginPage {
		padding-top: 100px;

		.loginBox {
			margin: auto;
			padding-top: 40px;
			width: 500px;
			height: 300px;
			border: 1px solid #bbb;
			box-shadow: 3px 3px 8px;

			.input-group {
				margin: 5px auto;
				width: 300px;
				position: relative;
				
				.isRight {
					width: 20px;
					position: absolute;
					margin: 7px 10px;
					color: limegreen;
				}
				
				.isError {
					width: 20px;
					position: absolute;
					margin: 7px 10px;
					color: red;
				}
				.input-group-addon {
					width: 70px;
					text-align: justify;
					text-align-last: justify;
				}

				.yzm {
					background-color: #337ab0;
					text-decoration: none;
					color: white;
					margin: 0;
					padding: 0;
					text-align: center;
					text-align-last: center;
					cursor: pointer;
				}
			}

			.longin-btn {

				width: 175px;
				margin: 25px auto;
				padding-left: 20px;

				.login {
					// display: inline-block;
					width: 80px;
					height: 30px;
					line-height: 30px;
					text-align: center;
					// margin: auto;
					padding: 0;
				}
				.forget {
					font-size: 8px;
					margin-left: 15px;
					text-decoration: none;
				}
				.noId {
					text-decoration: none;
					color: @goldColor;
					font-size: 14px;
				}
			}

		}
	}
</style>
