<template>

	<div class="todayEatwhat">
		<h2>今天中午吃<span id="what" class="ff9900">什么？</span></h2>
		<input id="zwEatWhat_bnt" type="button" value="开  始"><br>
		<input id="zwEatWhat_input" type="text" placeholder="自定义候选菜单..." /><br>
		<a id="zwEatWhat_a" class="ff9900" href="#">创建自己专属吃什么界面-&gt;</a>
		<div class="share">
			<a href="#">分享到微信</a>
			<a href="#">分享到微博</a>
			<a href="#">分享的QQ</a>
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
	
	::-webkit-input-placeholder { /* WebKit browsers */
	  color: @placeholder;
	}
	
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	  color: @placeholder;
	}
	
	:-ms-input-placeholder { /* Internet Explorer 10+ */
	  color: @placeholder;
	} 

  .ff9900 {
		color: @goldColor;
	}
	.todayEatwhat {
			height: 500px;
			width: 760px;
			height: 100%;
			margin: auto;
			padding: 0;
			>h2,
			input,
			#zwEatWhat_a,
			.share {
				display: block;
				text-align: center;
				margin: auto;
				// margin-top: 10px;
				margin-bottom: 10px;
			}

			>h2 {
				padding-top: 130px;
				margin-bottom: 20px;
			}

			>#zwEatWhat_bnt {
				font-size: 16px;
				color: white;
				width: 100px;
				height: 30px;
				line-height: 20px;
				padding: 2px 10px;
				background-color: @buttonBgc;
				// border: 1px solid @buttonborder;
				border-radius: 3px;
			}

			#zwEatWhat_input {
				margin-top: -10px;
				margin-bottom: -10px;
			}

			#zwEatWhat_a {
				margin-bottom: 40px;
			}

			.share {
				width: 100%;

				>a {
					font-size: 16px;
					color: white;
					width: 100px;
					height: 30px;
					line-height: 20px;
					margin-left: 20px;
					margin-right: 20px;
					padding: 2px 10px;
					background-color: seagreen;
					border: 1px solid green;
					border-radius: 3px;
					text-decoration: none;
				}
			}
	}
</style>
