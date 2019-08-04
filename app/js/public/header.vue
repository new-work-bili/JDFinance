<template>
	<!-- <div class="header"> -->
	<div :class="$style.header">
		<!-- **改成这样，在&style命名空间里找header -->
		<span :class="$style.left">
			<em>注册</em>&nbsp;|&nbsp;<em>登陆</em>
		</span>
		<btn :class="$style.btnDownload">APP下载</btn> <!-- 这个btn标签会替换btn.vue组件中solt插槽 -->
	</div>
</template>

<script>
	import btn from '../core/btn.vue' //引入按钮组件
	export default {
		components: {
			btn
		},
	}
</script>

<style lang="scss" module>
	/* **设置scc module，以局域化css，防止影响其他组件 1.写module,此操作会在编译时把你写的样式放到$style命名空间里*/
	/* 因为设计稿是2倍的，所以所有像素乘以二？？？ */
	.header {
		color: #666;
		height: 100px;
		line-height: 100px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		font-size: 32px;
		background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
		background-size: auto 50%;
		z-index: 100;

		.left {	/* 为什么要包裹在header里面？ */
			font-size: 28px;
			height: 30px;
			line-height: 30px;
			margin: 17px 0 0 18px;
		}

		.btnDownload {
			float: right;
			font-size: 24px;
			border-width: 0;
			height: 56px;
			line-height: 56px;
			min-width: 120px;
			padding: 0;
			border-radius: 4px;
			margin: 28px 24px 0 0;
		}
	}
</style>
