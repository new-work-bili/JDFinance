<!-- 白条页面 -->
<template>
	<div>
		<bHeader></bHeader>
		<iSlider></iSlider>
		<Fuli></Fuli>
		<More></More>
		<bFooter></bFooter>
		<navbar></navbar>
	</div>
</template>

<script>
	import bFooter from "../public/footer.vue";
	import bHeader from "../public/header.vue";
	import navbar from "../public/navbar.vue";
	import iSlider from "./iSlider.vue";
	import Fuli from "./fuli.vue";
	import More from "./more.vue";
	
	export default{
		components: {
			bFooter,
			bHeader,
			navbar,
			iSlider,
			Fuli,
			More
		},
	}
</script>

<style>
</style>
