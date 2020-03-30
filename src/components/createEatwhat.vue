<template>
			<div class="eatWhat-index2">
				<h4>标题：标题会自动加上“吃什么？”，用于描述场景</h4>
				<input type="text" placeholder="例如输入：跟女朋友一起去" name="CEW_title">
				<h4>吃什么：输入一些可以吃的东西，并用空格键分开</h4>
				<input type="text" placeholder="例如输入：米饭 面条 黄焖鸡 火锅 奶茶" name="CEW_eatWhat">
				<h4>描述：简单描述，将在“大家吃什么”中展示（选填）</h4>
				<input type="text" placeholder="例如输入：为了解决跟女朋友的吃饭矛盾" name="CEW_describe">
				<h4>封面图：将在“大家吃什么”中展示（选填）</h4>
				<div class="imgInput">
					<input type="text" name="CEW_picture">
					<router-link class="create_img" to="/addimage"></router-link>
				</div>
				<input type="submit" class="addBtn" value="确认创建">
				<p>提示：一单提交后就不能修改了，如果想改就去创建一个新的。</p>
			</div>
</template>

<script>
</script>

<style lang="less" scoped>
	@goldColor:#ff9900;
	@fontColor:#dedede;
	@placeholder:#ccc;
	@buttonBgc:#5bc0de;
	@buttonborder:#46b8da;

	a{
		text-decoration: none;
		color: @placeholder;
	}
	/* input元素placeholder属性设置 */
	.ff9900{
		color: @goldColor;
	}
	::-webkit-input-placeholder { /* WebKit browsers */
	  color: @placeholder;
	}
	
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	  color: @placeholder;
	}
	
	:-ms-input-placeholder { /* Internet Explorer 10+ */
	  color: @placeholder;
	} 
	// input元素placeholder属性设置
	.eatWhat-index2{
		margin: auto;
		width: 760px;
		height: 500px;
		padding: 30px 15px;
		input{
			width:100%;
			// min-width: 600px;
			height: 24px;
			font-size: 16px;
			font-weight: 200;
			margin: 5px 0;
		}
		.imgInput{
			position: relative;
			>.imgPath{
				width:100%;
				height: 24px;
				font-size: 16px;
				font-weight: 200;
			}
			.create_img{
				display:block;
				
				background-color: olive;
				background: url(../images/create-log.png) no-repeat center center;
				background-size: cover;
				width: 20px;
				height: 20px;
				
				position: absolute;
				margin-top: -27px;
				margin-left: 2px;
			}
		}
		>.addBtn{
			display: block;
			width: 100px;
			height: 30px;
			margin: 30px auto;
			font-weight: 400;
			color: #fff;
			background-color: @buttonBgc;
			border-color: @buttonborder;
			border-radius: 3px;
		}
		>p{
			text-align: center;
		}
	}
</style>
