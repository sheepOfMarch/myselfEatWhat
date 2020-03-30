<template>
	<div class="loginPage">
		<div class="loginBox">
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">用户名</span>
				<input type="text" class="form-control" aria-describedby="basic-addon1">
			</div>
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">密码</span>
				<input type="text" class="form-control" aria-describedby="basic-addon1">
			</div>
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">验证码</span>
				<input type="text" class="form-control" aria-describedby="basic-addon1">
				<a class="input-group-addon yzm">DNj8</a>
			</div>
			<div class="longin-btn">
				<input type="button" class="btn btn-primary login" value="登陆"><router-link to="/user/forgetkey" class="forget">忘记密码？</router-link>
			</div>
			<div class="longin-btn">
				<router-link to="/user/register" class="noId">没有账号？点击注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>

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
