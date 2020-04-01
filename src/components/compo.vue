<template>
	<div>
		
			<div class="item-everybody">
				<div class="food">
					<img src="/src/images/20161031122056.jpeg" alt="">
				</div>
				<div class="title">
					<span>跟女朋友吃什么？</span>
				</div>
				<div class="ico">
					<img src="/src/images/touxiang.jpeg" alt="">
					<div>
						<span class="name">舍我其谁</span>
						<span class="date">2019/11/20</span>
					</div>
		
				</div>
				<!-- <hr> -->
				<div class="hr"></div>
				<div class="look">
					<div>
						<img src="/src/images/eye.png" alt="">
						<span>520</span>
					</div>
					<div>
						<span v-if="true" class="glyphicon glyphicon-trash del"></span>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	
		.item-everybody {
			float: left;
			box-sizing: border-box;
			width: 150px;
			height: 200px;
			border: 1px solid #ccc;
			box-shadow: 2px 2px 5px;
			margin: 12px;
	
			.food {
				>img {
					width: 150px;
					height: 80px;
				}
			}
	
			.title {
				padding: 5px 10px;
			}
	
			.ico {
				padding: 8px 8px;
	
				>img {
					float: left;
					display: block;
					width: 36px;
					height: 36px;
					border: 1px solid dimgrey;
					border-radius: 50%;
				}
	
				.name,
				.date {
					padding-left: 5px;
					font-size: 12px;
				}
	
			}
	
			.hr {
				// width: 100%;
				height: 1px;
				margin: 0 8px;
				background-color: #ccc;
			}
	
			.look {
				margin: 5px 8px;
				display: flex;
				justify-content: space-between;
				img {
					width: 20px;
					opacity: 0.3;
					margin-left: 5px;
				}
				.del {
					margin-right: 5px;
					color: grey;
				}
			}
		}
	
</style>
