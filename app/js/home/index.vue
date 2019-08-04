<!-- hoem组件的入口文件 -->
<template lang="html">
	<div :class="$style.home">
		<!-- 原本是 class='home';这里是使用了css Module -->
		<HomeHeader></HomeHeader>
		<hSlider></hSlider>
		<Novice></Novice>
		<Borrow></Borrow>
		<Money></Money>
		<Product></Product>
		<Life></Life>
		<hFooter></hFooter>
		<hNavbar></hNavbar>
	</div>
</template>

<script>
	import HomeHeader from "../public/header.vue";
	import hSlider from "./hSlider.vue";
	import Novice from "./novice.vue";
	import Borrow from "./borrow.vue";
	import Money from "./money.vue";
	import Product from "./product.vue";
	import Life from "./life.vue";
	import hFooter from "../public/footer.vue";
	import hNavbar from "../public/navbar.vue";

	export default { //为什么这个地方不输出也能
		/* name:"Home" */
		
		components: {
			HomeHeader,
			hSlider,
			Novice,
			Borrow,
			Money,
			Product,
			Life,
			hFooter,
			hNavbar
			
		},

	}
</script>

<style lang="scss" module>
	//module表示使用css Module 即css模块化
	@import '../../css/reset.scss';

</style>
