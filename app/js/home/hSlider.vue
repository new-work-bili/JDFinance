<template>
	<article>
		<!-- 	给轮播图组件传入数据 -->
		<Slider :items="items" :class="$style.slider"></Slider>
		<!-- 五个图标-->
		<section :class="$style.list">	
			<div :class="$style.item" v-for="item in enters" :key="item.img">	<!-- v-for循环出五个图标的内容 -->
				<router-link :to="{name:item.href}">	<!-- 要跳转的路由 -->
					<img :src="item.img" :alt="item.title">
					<h4>{{item.title}}</h4>
				</router-link>
			</div>
		</section>
	</article>
</template>

<script>
	import Slider from "../core/slider.vue";
	export default{
		components: {
			Slider,
		},
		data() {
			return {
				items: [{	//传给轮播图的数据，href为跳转路由，src是图标资源
				    href: "home",
				    src: "//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320",
				}, {
				    href: "home",
				    src: "//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320",
				}, {
				    href: "home",
				    src: "//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320",
				}],
				enters: [{	//五个图标当中的数据
				    href: "download",
				    img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
				    title: "优惠券",
				}, {
				    href: "home",
				    img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
				    title: "领红包",
				}, {
				    href: "home",
				    img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
				    title: "抢钢镚",
				}, {
				    href: "home",
				    img: "//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132",
				    title: "领京豆",
				}, {
				    href: "home",
				    img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
				    title: "白条提额",
				}],
			}
		},
	}
</script>

<style lang="scss" module>
	@import "../../css/element.scss";
	.slider{
		margin-top: 120px; 
		img{
			width: 100%;
		}
	}
	.list{
		@include list(row);	/* 使用element.scss里的模板 */
		background: #fff;
		padding-top: 40px;
		padding-bottom: 20px;
		justify-content: space-around;	/* 两端对齐，也就是左右都有空隙 */
		a{
			text-decoration: none;
		}
		.item{
			text-align: center;
			img{
				display: inline-block;
				width: 90px;
				height:90px;
			}
			h4{
				font-size: 26px;
				margin-top: 12px;
				color: #666;
			}
		}
	}
</style>
