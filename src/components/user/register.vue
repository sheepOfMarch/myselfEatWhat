<template>
	<div class="registerPage">
		<div class="registerBox">
			<div class="input-group">
				<span class="input-group-addon">用户名</span>
				<input type="text" class="form-control" v-model="username" @blur="blur_name">
				<span v-if="nameIsFlag" :class="nameIsRight? 'isRight':'isError'">{{ nameIsRight? '√':'×' }}</span>
			</div>
			<div class="input-group">
				<span class="input-group-addon">手机号</span>
				<input type="text" class="form-control" v-model="tel" @blur="blur_tel">
				<span v-if="telIsFlag" :class="telIsRight? 'isRight':'isError'">{{ telIsRight? '√':'×' }}</span>
			</div>
			<div class="input-group">
				<span class="input-group-addon">邮箱</span>
				<input type="text" class="form-control" v-model="eMail" @blur="blur_eMail">
				<span v-if="emailIsFlag" :class="emailIsRight? 'isRight':'isError'">{{ emailIsRight? '√':'×' }}</span>
			</div>
			<div class="input-group">
				<span class="input-group-addon">密码</span>
				<input type="password" class="form-control" v-model="password">
			</div>
			<div class="input-group">
				<span class="input-group-addon">验证码</span>
				<input type="text" class="form-control" v-model="typeCode" @blur="blur_code">
				<a class="input-group-addon yzm" @click="sendCode">点击发送</a>
				<span v-if="codeIsFlag" :class="codeIsRight? 'isRight':'isError'">{{ codeIsRight? '√':'×' }}</span>
			</div>

			<input type="button" class="btn btn-primary register" value="注册" @click="userRegister">


		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nameIsFlag: false,
				nameIsRight: false,
				telIsFlag: false,
				telIsRight: false,
				emailIsFlag: false,
				emailIsRight: false,
				codeIsFlag: false,
				codeIsRight: false,

				username: '',
				tel: '',
				eMail: '',
				password: '',
				code: undefined,
				typeCode: ''
			}
		},
		methods: {
			blur_name() {
				var re_username = /^[a-zA-Z0-9_-]{5,20}$/;
				if (re_username.test(this.username)) {
					this.nameIsFlag = true;
					this.nameIsRight = true;
				} else {
					this.nameIsFlag = true;
					this.nameIsRight = false;
				}
			},
			blur_tel() {
				var re_tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				if (re_tel.test(this.tel)) {
					this.telIsFlag = true;
					this.telIsRight = true;
				} else {
					this.telIsFlag = true;
					this.telIsRight = false;
				}
			},
			blur_eMail() {
				var re_email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				if (re_email.test(this.eMail)) {
					this.emailIsFlag = true;
					this.emailIsRight = true;
				} else {
					this.emailIsFlag = true;
					this.emailIsRight = false;
				}
			},
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
				alert(codes);
			},
			userRegister() {
				// 1、判断表单格式是否都正确
				if (this.nameIsRight && this.telIsRight && this.emailIsRight && this.codeIsRight) {
					// 2、把数据组合成一个对象
					var userInfo = {
						"name": this.username,
						"tel": this.tel,
						"email": this.eMail,
						"password": this.password
					};
					// 3、有数据就把数据提取出来，并转换成 JSON 格式（原数据为 String 格式），保存到变量 userJson 中, 可能为空
					var userJson = JSON.parse(localStorage.getItem("eatWhatUserInfo")) || [];
					// 4、判断是否已经注册（遍历 userJson 中每条数据的 tel 属性是否与新注册数据相同）
					var isRegister = userJson.some(function(item) {
						return item.tel == userInfo.tel;
					});
					if (isRegister) {
						// 5、已注册 弹出提示
						return alert('此手机号码已经注册！');
					} else {
						// 6、没注册 把新对象 userInfo 加入 
						userJson.push(userInfo);
						localStorage.setItem("eatWhatUserInfo",JSON.stringify(userJson));
						
						this.$store.state.userInfo = userInfo;
						this.$router.push({
							path: '/user/usercenter'
						});
					}
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


	.registerPage {
		padding-top: 100px;

		.registerBox {
			margin: auto;
			padding-top: 20px;
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
					background-color: #337ab7;
					text-decoration: none;
					cursor: pointer;
					color: white;
					margin: 0;
					padding: 0;
					text-align: center;
					text-align-last: center;
				}
			}

			.register {
				display: block;
				width: 80px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				margin: 25px auto;
				padding: 0;
			}
		}
	}
</style>
