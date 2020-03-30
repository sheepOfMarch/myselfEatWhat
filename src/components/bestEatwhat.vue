<template>
	<div>
		<div class="besteatwhat">
			<div>
				<h3>热门食物</h3>
			</div>
			<div class="foodList">
				<div class="colum" v-for="col in colum">
					<div class="itemfoodlist" v-for="(item, id) in col">
						<p class="count">{{ item.id }}</p>
						<p class="foodname">{{ item.name }}</p>
						<p class="choosenum">X {{ item.choosenum }}</p>
					</div>
				</div>

			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				colum: [[{
						id: 1,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 2,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 3,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 4,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 5,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 6,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 7,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 8,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 9,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 10,
						name: '麻辣烫',
						choosenum: 121
					},
				],[{
						id: 1,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 2,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 3,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 4,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 5,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 6,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 7,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 8,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 9,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 10,
						name: '麻辣烫',
						choosenum: 121
					},
				],[{
						id: 1,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 2,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 3,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 4,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 5,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 6,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 7,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 8,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 9,
						name: '麻辣烫',
						choosenum: 121
					},
					{
						id: 10,
						name: '麻辣烫',
						choosenum: 121
					},
				],]
			}
		}
	}
</script>

<style lang="less" scoped>
	.besteatwhat {
		height: 500px;
		overflow: hidden;
		padding: 30px;

		h3 {
			font-size: 20px;
			font-weight: 700;
			margin: 0;
			padding: 0;
		}

		.foodList {

			// border: 1px solid red;
			height: 430px;
			margin-top: 30px;
			display: flex;
			justify-content: space-between;
			.colum {
				float: left;
				.itemfoodlist {
					display: flex;

					.count {
						height: 33px;
						width: 33px;
						background-color: #ccc;
						// border: 1px solid red;
						text-align: center;
						line-height: 33px;
					}

					.foodname {
						width: 120px;
						height: 33px;
						background-color: #eee;
						text-align: center;
						line-height: 33px;
					}

					.choosenum {
						padding-left: 5px;
						text-align: center;
						line-height: 33px;
					}
				}
			}

		}
	}
</style>
