<template>
	<div class="forgetKeyPage">
		<div class="forgetKeyBox">
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">注册手机号</span>
				<input type="text" class="form-control" aria-describedby="basic-addon1">
			</div>
			<div class="input-group">
				<span class="input-group-addon" id="basic-addon1">注册邮箱</span>
				<input type="text" class="form-control" aria-describedby="basic-addon1">
			</div>
			
			<div class="forgetkey-btn">
				<input type="button" class="btn btn-primary forgetKey" value="提交">
			</div>
			<div class="forgetkey-btn">
				<span class="info">若信息正确，密码将以邮件形式发送到你的邮箱</span>
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
	
	
	.forgetKeyPage {
		padding-top: 100px;

		.forgetKeyBox {
			margin: auto;
			padding-top: 50px;
			width: 500px;
			height: 300px;
			border: 1px solid #bbb;
			box-shadow: 3px 3px 8px;

			.input-group {
				margin: 5px auto;
				width: 300px;

				.input-group-addon {
					width: 100px;
					text-align: justify;
					text-align-last: justify;
				}

				.yzm {
					background-color: #337ab7;
					text-decoration: none;
					color: white;
					margin: 0;
					padding: 0;
					text-align: center;
					text-align-last: center;
				}
			}

			.forgetkey-btn {

				// width: 175px;
				margin: 25px auto;
				// padding-left: 20px;
				color: @goldColor;
				.forgetKey {
					width: 80px;
					display: block;
					margin: auto;
				}
				.info {
					display: block;
					width: 100%;
					text-align: center;
				}
				
			}

		}
	}
</style>
