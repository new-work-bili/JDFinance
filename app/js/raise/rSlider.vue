<!-- 上下轮播图,重新写轮播图 -->
<template>
	<Panel title="轮播图" :class="$style.panel">
		<swiper :class="$style.content" :options="options">
			<swiper-slide>百万白条券免费送，速来领取！！</swiper-slide>
			<swiper-slide>签到领流量，1元500M！</swiper-slide>
		</swiper>
	</Panel>
</template>

<script>
	import Panel from "../core/panel.vue";
	//import Slider from "../core/slider.vue";	不用之前设计好的轮播图插件了，因为它是为图片轮播图而设计的
	import { swiper, swiperSlide } from "vue-awesome-swiper";
	

	export default {
		components: {
			Panel,
			//Slider
			swiper, 
			swiperSlide
		},
		data() {
			return {
				options: {
					direction: 'vertical',
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					autoplay:true,//自动滚动
					loop:true,		//循环
				}
				
			}
		},

	}
</script>

<style lang="scss" module>
	@import "../../css/element.scss";

	.panel {
		margin-top: 120px!important;
		@include panel;
		h4 {
			display: none;
		}
		.content{
			overflow: hidden;
			font-size: 28px;
			height: 72px;
			line-height: 72px;
			height: 72px;
			line-height: 72px;
			overflow: hidden;
			padding-left: 178px;
			background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) center left no-repeat;
		}
	}
</style>
