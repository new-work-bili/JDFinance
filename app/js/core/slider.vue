<template>
	<section :class="cname">
		<swiper :options="options" :not-next-tick="options.notNextTick">	<!-- 官方规定的属性:用来设置轮播图,引号里的option对应下面props里的option -->
			<swiper-slide v-for="item in items" :key="item.href">	<!-- 通过v-for循环出各个图片；其实是可以一个一个的写出来的，但为了代码的简洁 -->
				<router-link :to="{name:item.href}">		<!-- 根据href路由链接进行跳转 -->
					<img :src="item.src" alt="">			<!-- 轮播图中的图片 -->
				</router-link>
			</swiper-slide>
			<!-- 小点，v-if用来判断：当option里没有pagination属性时，这个小点组件消失；因为有的组件可能不使用小点，到那时通过控制传入pagination的值来控制小点的有无-->
			<div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>		
		</swiper>
	</section>
</template>

<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'	//引入组件
	export default{
		components: {
			swiper,			//注册两轮播图组件
			swiperSlide
		},
		props: {
			options: {
				type: Object,
				default(){	/* 这是默认配置，到时候别的组件引入时还可以改动 */
					return{
						autoplay:true,//自动滚动
						loop:true,		//循环
						pagination:{
							el:".swiper-pagination"	//作用????
						},
						notNextTick:false	//？？？
					}
				}
			},
			items:{							//轮播图的链接数组
				type:Array,
				default(){
					return[
						{href:"",src:""}	//href表示要跳转的链接，src是图片路径
					]
				}
			},
			cname:{
				type:String,
				default:""
			}
		},
	}
</script>

<style>
	@import "~swiper/dist/css/swiper.css";	/* 引入轮播图图标，前面~表示允许在node_modules里查找路径 */
	
</style>

<!-- 轮播图组件 -->
