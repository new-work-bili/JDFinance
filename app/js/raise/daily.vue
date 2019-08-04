<template>
	<Panel title="每日签到" :class="$style.panel">
		<section :class="$style.content">
			<div>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
			</div>
			<div>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
			</div>
		</section>
	</Panel>
</template>

<script>
	import Panel from "../core/panel.vue";
	
	export default{
		components: {
			Panel
		},
	}
</script>

<style lang="scss" module>
	@import "../../css/element.scss";
	.panel{
		@include panel;
		.content{
			@include list(row);
			justify-content: space-around;
			div{
				padding-bottom: 40px;
				>img{
					width: 320px;
					height: 136px;
				}
			}
		}
	}
</style>
