<template>
	<div class="iu-color-show">
		<div class="iu-bgc-pure-red iu-color-black">
			<p>纯红色</p>
		</div>
		<div class="iu-bgc-pure-lime iu-color-black">
			<p>lime</p>
		</div>
		<div class="iu-bgc-pure-blue iu-color-white">
			<p>纯蓝色</p>
		</div>
		<div class="iu-bgc-pure-yellow iu-color-black">
			<p>纯黄色</p>
		</div>
		<div class="iu-bgc-pure-fuchsia iu-color-black">
			<p>fuchsia</p>
		</div>
		<div class="iu-bgc-pure-aqua iu-color-black">
			<p>湖绿色</p>
		</div>
	</div>
	<div class="iu-color-show">
		<div class="iu-bgc-light-red iu-color-black">
			<p>淡红色</p>
		</div>
		<div class="iu-bgc-light-lime iu-color-black">
			<p>light lime</p>
		</div>
		<div class="iu-bgc-light-blue iu-color-black">
			<p>淡蓝色</p>
		</div>
		<div class="iu-bgc-light-yellow iu-color-black">
			<p>淡黄色</p>
		</div>
		<div class="iu-bgc-light-fuchsia iu-color-black">
			<p>light fuchsia</p>
		</div>
		<div class="iu-bgc-light-aqua iu-color-black">
			<p>淡绿色</p>
		</div>
	</div>
	<div class="iu-color-show">
		<div class="iu-bgc-deep-red iu-color-white">
			<p>深红色</p>
		</div>
		<div class="iu-bgc-deep-lime iu-color-white">
			<p>deep lime</p>
		</div>
		<div class="iu-bgc-deep-blue iu-color-white">
			<p>深蓝色</p>
		</div>
		<div class="iu-bgc-deep-yellow iu-color-white">
			<p>深黄色</p>
		</div>
		<div class="iu-bgc-deep-fuchsia iu-color-white">
			<p>deep fuchsia</p>
		</div>
		<div class="iu-bgc-deep-aqua iu-color-white">
			<p>深绿色</p>
		</div>
	</div>
	<div class="iu-color-show">
		<div class="iu-bgc-dark-red iu-color-white">
			<p>暗红色</p>
		</div>
		<div class="iu-bgc-dark-lime iu-color-white">
			<p>dark lime</p>
		</div>
		<div class="iu-bgc-dark-blue iu-color-white">
			<p>暗蓝色</p>
		</div>
		<div class="iu-bgc-dark-yellow iu-color-white">
			<p>暗黄色</p>
		</div>
		<div class="iu-bgc-dark-fuchsia iu-color-white">
			<p>dark fuchsia</p>
		</div>
		<div class="iu-bgc-dark-aqua iu-color-white">
			<p>暗绿色</p>
		</div>
	</div>
</template>

<script setup lang="ts">


</script>

<style lang="scss">
	@import "../css/variable.scss";
	div.iu-color-show {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;

		div {
			padding: 20px;
		}
	}
	div.iu-bgc-pure-red {
		background-color: $iu-pure-red;
	}
	div.iu-bgc-pure-lime {
		background-color: $iu-pure-lime;
	}
	div.iu-bgc-pure-blue {
		background-color: $iu-pure-blue;
	}
	div.iu-bgc-pure-yellow {
		background-color: $iu-pure-yellow;
	}
	div.iu-bgc-pure-fuchsia {
		background-color: $iu-pure-fuchsia;
	}
	div.iu-bgc-pure-aqua {
		background-color: $iu-pure-aqua;
	}


	div.iu-bgc-light-red {
		background-color: $iu-light-red;
	}
	div.iu-bgc-light-lime {
		background-color: $iu-light-lime;
	}
	div.iu-bgc-light-blue {
		background-color: $iu-light-blue;
	}
	div.iu-bgc-light-yellow {
		background-color: $iu-light-yellow;
	}
	div.iu-bgc-light-fuchsia {
		background-color: $iu-light-fuchsia;
	}
	div.iu-bgc-light-aqua {
		background-color: $iu-light-aqua;
	}
	
	div.iu-bgc-deep-red {
		background-color: $iu-deep-red;
	}
	div.iu-bgc-deep-lime {
		background-color: $iu-deep-lime;
	}
	div.iu-bgc-deep-blue {
		background-color: $iu-deep-blue;
	}
	div.iu-bgc-deep-yellow {
		background-color: $iu-deep-yellow;
	}
	div.iu-bgc-deep-fuchsia {
		background-color: $iu-deep-fuchsia;
	}
	div.iu-bgc-deep-aqua {
		background-color: $iu-deep-aqua;
	}

	div.iu-bgc-dark-red {
		background-color: $iu-dark-red;
	}
	div.iu-bgc-dark-lime {
		background-color: $iu-dark-lime;
	}
	div.iu-bgc-dark-blue {
		background-color: $iu-dark-blue;
	}
	div.iu-bgc-dark-yellow {
		background-color: $iu-dark-yellow;
	}
	div.iu-bgc-dark-fuchsia {
		background-color: $iu-dark-fuchsia;
	}
	div.iu-bgc-dark-aqua {
		background-color: $iu-dark-aqua;
	}

	div.iu-color-black {
		color: black;
	}
	div.iu-color-white {
		color: white;
	}
</style>