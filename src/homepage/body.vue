<template>
	<div class="body">
		<div class="center">
			<div class="left">
				<h1>IU</h1>
				<p class="introduce">我也不知道该起什么名字</p>
				<p class="introduce">锻炼自己vue水平所做</p>
				<p class="introduce">项目处于鸿蒙时代</p>
			</div>
			<div class="right">
				
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
	div.body {
		width:100%;
		height: 600px;
		background-color: #42405a;

		div.center {
			background-color: #533d6c;
			width: 80%;
			height: 100%;
			margin: 0 auto;
			display: flex;
			flex-direction: row;

			div.right {
				width: 50%;
				border-left: 1px solid rgb(99, 110, 0);
				
			}

			div.left {
				width: 50%;
				border-right: 1px solid rgb(99, 110, 0);

				padding: 60px 0;

				display: flex;
				flex-direction: column;
				align-items: center;

				h1 {
					font-size: 80px;
					font-weight: bold;
				}

				p.introduce {
					font-size: 20px;
					line-height: 30px;
				}
			}
		}
	}
</style>