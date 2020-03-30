<template>
	<div class="app-container">
		<!-- 导航栏 -->
		<div class="nav-content">
			<ul>
				<li><router-link class="navbar-logo" to="/aboutus"><img src="/src/images/logo.png" class="logo"></router-link></li>
				<li>
					<router-link class="navbar-title" to="/todayeatwhat">今天吃什么</router-link>
				</li>
				<li>
					<router-link class="navbar-title" to="/createeatwhat">创建吃什么</router-link>
				</li>
				<li>
					<router-link class="navbar-title" to="/everybodyeatwhat">大家吃什么</router-link>
				</li>
				<li>
					<router-link class="navbar-title" to="/besteatwhat">什么最好吃</router-link>
				</li>
				<li>
					<router-link class="navbar-title" to="/aboutus">关于我们</router-link>
				</li>
			</ul>
			<router-link class="nav-login" v-show="islog" to="/user/login"><span class="nav-login-btn">登陆/注册</span></router-link>
			<router-link class="nav-login" v-show="!islog" to="/user/usercenter">
				<img class="userpic" src="/src/images/userpic.jpg"><span class="usercenter">个人中心</span>
			</router-link>
		</div>
		<!-- 中间部分 -->
		<router-view style="height: 500px; width: 975px; overflow: hidden; margin: auto;"></router-view>
		<!-- 页脚部分 -->
		<footer class="footer">
			<p>Copyright© bangneedu黑龙江省马斯克网络科技有限责任公司</p>
			<p>黑ICP备19001710号-1</p>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				islog: true
			}
		}
	}
</script>

<style lang="less" scoped>
	@goldColor: #ff9900;
	@fontColor: #dedede;
	@placeholder: #ccc;
	@buttonBgc: #5bc0de;

	* {
		margin: 0;
		padding: 0;
	}

	a:hover {
		text-decoration: none;
	}

	.app-container {
		// height: 620px;
		min-width: 768px;
		// max-width: 975px;
		.nav-content {
			height: 50px;
			background-color: #666;
			margin: auto;
			ul {
				list-style-type: none;

				li {
					float: left;

					.navbar-logo {
						margin-left: 15px;

						.logo {
							margin-top: 5px;
							padding: 7px;
							max-height: 40px;
						}
					}

					.navbar-title {
						font-weight: 500;
						padding: 15px 10px;
						text-decoration: none;
						font-size: 14px;
						color: @fontColor;
						line-height: 50px;
						text-align: center;
					}

					.navbar-title:hover,
					.navbar-title:focus {
						color: @goldColor;
						border-bottom: 2px solid @goldColor;
					}
				}
			}

			.nav-login {
				float: right;
				// line-height: 50px;
				margin-right: 15px;
				.userpic, .usercenter {
					width: 32px;
					height: 32px;
					margin: 9px 5px;
					color: @goldColor;
				}
				 
				.nav-login-btn {
					font-size: 14px;
					color: #fff;
					padding: 5px 10px;
					line-height: 50px;
					background-color: @buttonBgc;
					border-radius: 4px;
				}
			}
		}

		.footer {
			margin-top: 20px;

			>p {
				font-weight: 600;
				font-size: 14px;
				text-align: center;
				line-height: 20px;
				// height: 10px;
			}
		}
	}
</style>
