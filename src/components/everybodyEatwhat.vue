<template>
	<div class="everybody-box">
		<div class="itemBox">
		<compo v-for="item in 10"></compo>
		</div>
		<div class="pageCount">
			<!-- <p class="page" v-for="pagecount in 20">{{ pagecount }}</p> -->
			<nav aria-label="Page navigation">
				<ul class="pagination">
					<li>
						<a href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li>
						<a href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	import compo from './compo.vue';
	 export default {  
	         components: {compo},  
	     }  
</script>

<style lang="less">
	.everybody-box {
		padding: 20px 30px 0px 30px;
		
		.itemBox {
			height: 450px;
			overflow: hidden;
		}

		.pageCount {


			width: 216px;
			height: 60px;
			margin: auto;
			// border: 1px solid cadetblue;
			clear: both;
			overflow: hidden;

			.pagination>li>a,
			.pagination>li>span {
				border: none;
				padding-top: 0px;
			}

			.page {
				float: left;
				margin: 0 3px;
			}
		}
	}
</style>
