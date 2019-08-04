<!-- 众筹页面 -->
<template>
	<div>
		<rHeader></rHeader>
		<rSlider></rSlider>
		<Daily></Daily>
		<In></In>
		<More></More>
		<rFooter></rFooter>
		<navbar></navbar>
	</div>
</template>

<script>
	import rFooter from "../public/footer.vue";
	import rHeader from "../public/header.vue";
	import navbar from "../public/navbar.vue";
	import rSlider from "./rSlider.vue";
	import Daily from "./daily.vue";
	import In from "./in.vue";
	import More from "./more.vue";

	
	export default{
		components: {
			rFooter,
			rHeader,
			navbar,
			rSlider,
			Daily,
			In,
			More
		},
	}
</script>

<style>
</style>

